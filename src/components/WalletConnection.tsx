import { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { MetaMaskProvider, useSDK } from '@metamask/sdk-react';
import { useAccount, useDisconnect as useWagmiDisconnect } from 'wagmi';
import { useWeb3Modal } from '@web3modal/wagmi/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink, faLinkSlash, faXmark } from '@fortawesome/free-solid-svg-icons';
import Button from './Button';
import ConfirmModal from './ConfirmModal';
import { walletConnectProjectId } from '../web3modal';
import type { Wallet } from '../services/walletService';
import {
    addWallet,
    connectWallet,
    disconnectWallet,
    deleteWallet,
    getUserWallets,
} from '../services/walletService';

interface WalletConnectionProps {
    auth0Id: string;
    accessToken?: string;
    onWalletsUpdated?: (wallets: Wallet[]) => void;
}

// useSDK() may expose disconnect at runtime; types don't declare it
type SDKWithDisconnect = ReturnType<typeof useSDK> & { disconnect?: () => Promise<void> };

function WalletConnectionContent({ auth0Id, accessToken, onWalletsUpdated }: WalletConnectionProps) {
    const sdkState = useSDK() as SDKWithDisconnect;
    const { account, connecting, connected, provider, sdk } = sdkState;
    const disconnect = sdkState.disconnect;
    const { open } = useWeb3Modal();
    const { address: wagmiAddress, isConnected: isWagmiConnected } = useAccount();
    const { disconnect: wagmiDisconnect } = useWagmiDisconnect();
    const [wallets, setWallets] = useState<Wallet[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);
    // When user clicks Disconnect, we must not let sync re-connect until provider has no account or after a cooldown
    const userDisconnectCooldownRef = useRef(false);
    const [pendingDeleteId, setPendingDeleteId] = useState<number | null>(null);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [showAddWalletModal, setShowAddWalletModal] = useState(false);
    const [isWalletConnectPending, setIsWalletConnectPending] = useState(false);
    const [pendingWalletConnectId, setPendingWalletConnectId] = useState<number | null>(null);

    const loadWallets = useCallback(async () => {
        try {
            setIsLoading(true);
            const result = await getUserWallets(auth0Id, accessToken);
            if (result.success) {
                setWallets(result.wallets || []);
                onWalletsUpdated?.(result.wallets || []);
            }
        } catch (error) {
            console.error('Failed to load wallets:', error);
            setMessage({ type: 'error', text: 'Failed to load wallets' });
        } finally {
            setIsLoading(false);
        }
    }, [accessToken, auth0Id, onWalletsUpdated]);

    const walletConnectQrUrl = useMemo(() => {
        const qrPayload = 'https://walletconnect.network/wallet-sdk';
        return `https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=${encodeURIComponent(qrPayload)}`;
    }, []);

    // Load wallets on mount
    useEffect(() => {
        void loadWallets();
    }, [loadWallets]);

    // Sync DB with MetaMask: when user switches/connects an account in MetaMask we add/connect it in DB.
    useEffect(() => {
        const syncConnectionState = async () => {
            let currentAccount: string | undefined;
            try {
                if (provider) {
                    const accounts = (await provider.request({ method: 'eth_accounts' })) as string[];
                    currentAccount = accounts?.[0]?.toLowerCase();
                }
            } catch (err) {
                console.warn('WalletConnection: error querying eth_accounts', err);
                return;
            }

            const connectedWallet = wallets.find(w => w.is_connected);
            const skipAutoDisconnect = connecting || connected;

            // If provider has no account, clear cooldown so future connections will sync
            if (!currentAccount) {
                userDisconnectCooldownRef.current = false;
            }

            // Provider has an account (user connected or switched in MetaMask)
            if (currentAccount) {
                // User just clicked Disconnect: MetaMask often still returns the account.
                // Don't re-connect until cooldown expires or they really disconnect in MetaMask.
                if (userDisconnectCooldownRef.current) {
                    return;
                }
                const existingWallet = wallets.find(
                    w => w.wallet_address.toLowerCase() === currentAccount
                );
                if (existingWallet?.is_connected) {
                    return;
                }
                if (existingWallet) {
                    console.log('WalletConnection: provider account in list, connecting in DB', {
                        address: currentAccount,
                        walletId: existingWallet.id,
                    });
                    try {
                        await connectWallet(auth0Id, existingWallet.id, accessToken);
                        await loadWallets();
                        setMessage({ type: 'success', text: 'Wallet connected' });
                        setTimeout(() => setMessage(null), 3000);
                    } catch (error) {
                        console.error('Failed to sync connect existing wallet:', error);
                    }
                    return;
                }
                console.log('WalletConnection: new provider account, adding and connecting in DB', {
                    address: currentAccount,
                });
                try {
                    const result = await addWallet(auth0Id, currentAccount, 'metamask', accessToken);
                    if (result.success && result.wallet) {
                        await connectWallet(auth0Id, result.wallet.id, accessToken);
                    }
                    await loadWallets();
                    setMessage({ type: 'success', text: 'Wallet added and connected' });
                    setTimeout(() => setMessage(null), 3000);
                } catch (error) {
                    console.error('Failed to add/connect wallet from provider:', error);
                }
                return;
            }

            if (connectedWallet && !skipAutoDisconnect) {
                console.log(
                    'WalletConnection: provider has no account, clearing DB connected state',
                    { connectedWallet }
                );
                try {
                    await disconnectWallet(auth0Id, accessToken);
                    await loadWallets();
                } catch (error) {
                    console.error('Failed to sync disconnect state:', error);
                }
            }
        };

        syncConnectionState();
    }, [account, wallets, auth0Id, accessToken, connecting, connected, provider, loadWallets]);

    useEffect(() => {
        const syncWalletConnectSession = async () => {
            if (!isWalletConnectPending || !isWagmiConnected || !wagmiAddress) {
                return;
            }

            try {
                setMessage(null);
                setIsLoading(true);

                const normalizedAddress = wagmiAddress.toLowerCase();

                if (pendingWalletConnectId != null) {
                    const existingWallet = wallets.find((wallet) => wallet.id === pendingWalletConnectId);
                    if (!existingWallet) {
                        setMessage({ type: 'error', text: 'Wallet not found' });
                        return;
                    }

                    if (existingWallet.wallet_address.toLowerCase() !== normalizedAddress) {
                        setMessage({
                            type: 'error',
                            text: 'Connected wallet does not match the selected wallet. Please connect the matching address.',
                        });
                        return;
                    }

                    await connectWallet(auth0Id, existingWallet.id, accessToken);
                    await loadWallets();
                    setMessage({ type: 'success', text: 'Wallet connected' });
                    setTimeout(() => setMessage(null), 3000);
                    return;
                }

                const existingWallet = wallets.find(
                    (wallet) => wallet.wallet_address.toLowerCase() === normalizedAddress
                );

                if (existingWallet) {
                    await connectWallet(auth0Id, existingWallet.id, accessToken);
                    await loadWallets();
                    setMessage({ type: 'success', text: 'Wallet connected' });
                    setTimeout(() => setMessage(null), 3000);
                    return;
                }

                const result = await addWallet(auth0Id, normalizedAddress, 'walletconnect', accessToken);
                if (result.success && result.wallet) {
                    await connectWallet(auth0Id, result.wallet.id, accessToken);
                }
                await loadWallets();
                setMessage({ type: 'success', text: 'WalletConnect wallet added and connected!' });
                setTimeout(() => setMessage(null), 3000);
            } catch (error) {
                const err = error instanceof Error ? error : new Error(String(error));
                console.error('Failed to sync WalletConnect session:', err);
                setMessage({ type: 'error', text: `Failed to connect wallet: ${err.message}` });
            } finally {
                setPendingWalletConnectId(null);
                setIsWalletConnectPending(false);
                setIsLoading(false);
            }
        };

        void syncWalletConnectSession();
    }, [
        accessToken,
        auth0Id,
        isWalletConnectPending,
        isWagmiConnected,
        pendingWalletConnectId,
        wagmiAddress,
        wallets,
        loadWallets,
    ]);

    useEffect(() => {
        if (!isWalletConnectPending || isWagmiConnected) {
            return;
        }

        const timeout = setTimeout(() => {
            setPendingWalletConnectId(null);
            setIsWalletConnectPending(false);
        }, 15000);

        return () => clearTimeout(timeout);
    }, [isWalletConnectPending, isWagmiConnected]);

    // Connect a brand-new wallet by invoking the SDK connect helper
    const handleConnectMetaMask = async () => {
        try {
            setMessage(null);
            setIsLoading(true);

            if (!sdk) {
                setMessage({ type: 'error', text: 'MetaMask SDK not initialized' });
                return;
            }

            console.log('calling sdk.connect()');
            const accounts = await sdk.connect();
            console.log('sdk.connect returned', accounts);

            if (!accounts || accounts.length === 0) {
                setMessage({ type: 'error', text: 'No account returned from MetaMask' });
                return;
            }

            const selectedAccount = accounts[0];

            // Add wallet and connect in the database
            const result = await addWallet(auth0Id, selectedAccount, 'metamask', accessToken);
            if (result.success && result.wallet) {
                await connectWallet(auth0Id, result.wallet.id, accessToken);
            }

            await loadWallets();
            setMessage({ type: 'success', text: 'Wallet added and connected!' });
            setTimeout(() => setMessage(null), 3000);
        } catch (error) {
            const err = error instanceof Error ? error : new Error(String(error));
            console.error('Failed to connect wallet:', err);
            setMessage({ type: 'error', text: `Failed to connect wallet: ${err.message}` });
        } finally {
            setIsLoading(false);
        }
    };

    const handleSelectWalletType = async (walletType: 'metamask' | 'walletconnect') => {
        setShowAddWalletModal(false);
        if (walletType === 'metamask') {
            void handleConnectMetaMask();
            return;
        }

        if (!walletConnectProjectId) {
            setMessage({
                type: 'error',
                text: 'WalletConnect is not configured. Set VITE_WALLETCONNECT_PROJECT_ID and restart the app.',
            });
            return;
        }
        try {
            setMessage(null);
            setPendingWalletConnectId(null);
            setIsWalletConnectPending(true);
            await open({ view: 'Connect' });
        } catch (error) {
            const err = error instanceof Error ? error : new Error(String(error));
            console.error('Failed to open WalletConnect modal:', err);
            setMessage({ type: 'error', text: `Failed to open WalletConnect: ${err.message}` });
            setIsWalletConnectPending(false);
        }
    };

    const handleDisconnect = async () => {
        try {
            setMessage(null);
            setIsLoading(true);
            // Block sync from re-connecting for 5s (MetaMask often still returns account after SDK disconnect)
            userDisconnectCooldownRef.current = true;
            setTimeout(() => {
                userDisconnectCooldownRef.current = false;
            }, 5000);
            if (connectedWallet?.wallet_type === 'walletconnect') {
                await wagmiDisconnect();
            } else if (disconnect) {
                // Disconnect from MetaMask at the provider level (clears SDK state; extension may still list us)
                await disconnect();
            }
            // Then disconnect at the database level
            await disconnectWallet(auth0Id, accessToken);
            setMessage({ type: 'success', text: 'Wallet disconnected' });
            await loadWallets();
            setTimeout(() => setMessage(null), 3000);
        } catch (error) {
            const err = error instanceof Error ? error : new Error(String(error));
            console.error('Failed to disconnect wallet:', err);
            setMessage({ type: 'error', text: `Failed to disconnect: ${err.message}` });
        } finally {
            setIsLoading(false);
        }
    };

    const handleConnectExisting = async (walletId: number) => {
        try {
            setMessage(null);
            setIsLoading(true);

            const wallet = wallets.find((currentWallet) => currentWallet.id === walletId);
            if (!wallet) {
                setMessage({ type: 'error', text: 'Wallet not found' });
                return;
            }

            if (wallet.wallet_type === 'metamask') {
                if (!sdk) {
                    setMessage({ type: 'error', text: 'MetaMask SDK not initialized' });
                    return;
                }
                console.log('connectExisting: calling sdk.connect() to ensure permissions');
                const accounts = await sdk.connect();
                console.log('connectExisting sdk.connect returned', accounts);
            }

            if (wallet.wallet_type === 'walletconnect') {
                if (!walletConnectProjectId) {
                    setMessage({
                        type: 'error',
                        text: 'WalletConnect is not configured. Set VITE_WALLETCONNECT_PROJECT_ID and restart the app.',
                    });
                    return;
                }
                setPendingWalletConnectId(wallet.id);
                setIsWalletConnectPending(true);
                await open({ view: 'Connect' });
                return;
            }

            await connectWallet(auth0Id, walletId, accessToken);
            await loadWallets();
            setMessage({ type: 'success', text: 'Wallet connected' });
            setTimeout(() => setMessage(null), 3000);
        } catch (error) {
            const err = error instanceof Error ? error : new Error(String(error));
            console.error('Failed to connect existing wallet:', err);
            setMessage({ type: 'error', text: `Failed to connect wallet: ${err.message}` });
        } finally {
            setIsLoading(false);
        }
    };

    const handleDelete = async (walletId: number) => {
        try {
            setMessage(null);
            setIsLoading(true);

            // Check if this is the connected wallet
            const walletToDelete = wallets.find(w => w.id === walletId);
            if (walletToDelete?.is_connected) {
                if (walletToDelete.wallet_type === 'walletconnect') {
                    await wagmiDisconnect();
                } else if (disconnect) {
                    // Disconnect from MetaMask at the provider level
                    await disconnect();
                }
                // Then disconnect at the database level
                await disconnectWallet(auth0Id, accessToken);
            }

            // Now delete the wallet
            await deleteWallet(walletId, auth0Id, accessToken);
            setMessage({ type: 'success', text: 'Wallet deleted successfully' });
            await loadWallets();
            setTimeout(() => setMessage(null), 3000);
        } catch (error) {
            const err = error instanceof Error ? error : new Error(String(error));
            console.error('Failed to delete wallet:', err);
            setMessage({ type: 'error', text: `Failed to delete wallet: ${err.message}` });
        } finally {
            setIsLoading(false);
        }
    };

    const handleConfirmDelete = async () => {
        if (pendingDeleteId == null) return;
        await handleDelete(pendingDeleteId);
        setShowDeleteModal(false);
        setPendingDeleteId(null);
    };

    const connectedWallet = wallets.find(w => w.is_connected);
    const isAnyWalletConnected = !!connectedWallet;

    // Stable order by date added (oldest first) so list doesn't jump when connecting/disconnecting
    const sortedWallets = useMemo(
        () => [...wallets].sort((a, b) => new Date(a.created_at).getTime() - new Date(b.created_at).getTime()),
        [wallets]
    );

    return (
        <div className="w-full p-6 bg-black/30 rounded-lg mt-4">
            <div className="flex justify-between items-center mb-4">
                <h4 className="text-white text-lg">
                    My Wallets {wallets.length > 0 && <span className="text-white/70 text-sm ml-2">({wallets.length})</span>}
                </h4>
            </div>

            {/* Wallets List */}
            {wallets.length > 0 ? (
                <div className="space-y-3 mb-4">
                    {sortedWallets.map((wallet) => (
                        <div
                            key={wallet.id}
                            className={`p-4 rounded-lg border ${wallet.is_connected
                                ? 'bg-green-900/30 border-green-500/60'
                                : 'bg-white/5 border-white/10'
                                }`}
                        >
                            <div className="flex flex-wrap items-center justify-between gap-2">
                                <div className="flex-1 min-w-0">
                                    <p className="text-white font-mono text-sm break-all">
                                        {wallet.wallet_address.slice(0, 6)}...{wallet.wallet_address.slice(-4)}
                                    </p>
                                    <div className="mt-2">
                                        <span
                                            className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium ${wallet.wallet_type === 'joey'
                                                ? 'bg-purple-900/60 text-purple-200 border border-purple-500/40'
                                                : wallet.wallet_type === 'walletconnect'
                                                    ? 'bg-emerald-900/60 text-emerald-200 border border-emerald-500/40'
                                                    : 'bg-blue-900/60 text-blue-200 border border-blue-500/40'
                                                }`}
                                        >
                                            {wallet.wallet_type === 'joey'
                                                ? 'Joey Wallet'
                                                : wallet.wallet_type === 'walletconnect'
                                                    ? 'WalletConnect'
                                                    : 'MetaMask'}
                                        </span>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2">
                                    {wallet.is_connected ? (
                                        <>
                                            <Button
                                                onClick={() => handleDisconnect()}
                                                disabled={isLoading}
                                                title="Disconnect wallet"
                                                className="w-9 h-9 p-0 bg-yellow-600 hover:bg-yellow-700 active:bg-yellow-800 text-xs"
                                            >
                                                <FontAwesomeIcon icon={faLinkSlash} />
                                                <span className="sr-only">Disconnect wallet</span>
                                            </Button>
                                            <Button
                                                onClick={() => {
                                                    setPendingDeleteId(wallet.id);
                                                    setShowDeleteModal(true);
                                                }}
                                                title="Remove wallet from profile"
                                                disabled={isLoading}
                                                className="w-9 h-9 p-0 bg-red-600 hover:bg-red-700 active:bg-red-800 text-xs"
                                            >
                                                <FontAwesomeIcon icon={faXmark} />
                                                <span className="sr-only">Remove wallet</span>
                                            </Button>
                                        </>
                                    ) : (
                                        <>
                                            <Button
                                                onClick={() => handleConnectExisting(wallet.id)}
                                                disabled={isLoading || isAnyWalletConnected}
                                                title="Connect wallet"
                                                className="w-9 h-9 p-0 bg-green-600 hover:bg-green-700 active:bg-green-800 disabled:opacity-50 disabled:cursor-not-allowed text-xs"
                                            >
                                                <FontAwesomeIcon icon={faLink} />
                                                <span className="sr-only">Connect wallet</span>
                                            </Button>
                                            <Button
                                                onClick={() => {
                                                    setPendingDeleteId(wallet.id);
                                                    setShowDeleteModal(true);
                                                }}
                                                title="Remove wallet from profile"
                                                disabled={isLoading}
                                                className="w-9 h-9 p-0 bg-red-600 hover:bg-red-700 active:bg-red-800 text-xs"
                                            >
                                                <FontAwesomeIcon icon={faXmark} />
                                                <span className="sr-only">Remove wallet</span>
                                            </Button>
                                        </>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <p className="text-white/50 text-center py-4 mb-4">No wallets added yet.</p>
            )}

            {message && (
                <div
                    className={`mb-4 p-3 rounded-lg ${message.type === 'success'
                        ? 'bg-green-900/50 text-green-200'
                        : 'bg-red-900/50 text-red-200'
                        }`}
                >
                    {message.text}
                </div>
            )}

            <ConfirmModal
                isOpen={showDeleteModal}
                title="Remove wallet?"
                message="This will remove the wallet from your profile. You can always re-add it later by connecting again."
                confirmLabel="Remove"
                loading={isLoading}
                onCancel={() => {
                    setShowDeleteModal(false);
                    setPendingDeleteId(null);
                }}
                onConfirm={handleConfirmDelete}
            />

            {showAddWalletModal && typeof document !== 'undefined' && createPortal(
                <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-black/75 p-4 sm:p-6">
                    <div className="w-full max-w-sm rounded-xl bg-neutral-900 p-6 shadow-xl border border-white/10">
                        <h3 className="text-white text-lg font-semibold mb-2">Add New Wallet</h3>
                        <p className="text-sm text-white/70 mb-4">Select the wallet type you want to add.</p>
                        <div className="grid grid-cols-1 gap-3">
                            <Button
                                onClick={() => void handleSelectWalletType('metamask')}
                                disabled={isLoading || connecting || isAnyWalletConnected}
                                className="w-full bg-blue-600 hover:bg-blue-700 active:bg-blue-800"
                            >
                                MetaMask
                            </Button>
                            <Button
                                onClick={() => void handleSelectWalletType('walletconnect')}
                                disabled={isLoading || isAnyWalletConnected}
                                className="w-full bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800"
                            >
                                WalletConnect
                            </Button>
                            <Button
                                onClick={() => handleSelectWalletType('walletconnect')}
                                disabled={isLoading || isAnyWalletConnected}
                                className="w-full bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800"
                            >
                                WalletConnect
                            </Button>
                        </div>
                        <div className="flex justify-end mt-4">
                            <Button
                                onClick={() => setShowAddWalletModal(false)}
                                disabled={isLoading}
                                className="bg-gray-600 hover:bg-gray-700 active:bg-gray-800 text-sm"
                            >
                                Cancel
                            </Button>
                        </div>
                    </div>
                </div>,
                document.body
            )}

            {/* Add/Connect Wallet Button */}
            <Button
                onClick={() => {
                    setMessage(null);
                    setShowAddWalletModal(true);
                }}
                disabled={isLoading || connecting || isWalletConnectPending || isAnyWalletConnected}
                className={`w-full text-center ${isAnyWalletConnected
                    ? 'bg-gray-600 hover:bg-gray-600 cursor-not-allowed opacity-50'
                    : 'bg-blue-600 hover:bg-blue-700 active:bg-blue-800'
                    }`}
            >
                {connecting || isWalletConnectPending ? (
                    'Connecting...'
                ) : isAnyWalletConnected ? (
                    'Disconnect wallet to add another'
                ) : wallets.length > 0 ? (
                    'Add Another Wallet'
                ) : (
                    'Add New Wallet'
                )}
            </Button>
        </div>
    );
}

export function WalletConnection({ auth0Id, accessToken, onWalletsUpdated }: WalletConnectionProps) {
    return (
        <MetaMaskProvider
            sdkOptions={{
                logging: {
                    sdk: true,
                },
                extensionOnly: true,
                dappMetadata: {
                    name: 'Donovan',
                    url: typeof window !== 'undefined' ? window.location.href : '',
                },
            }}
        >
            <WalletConnectionContent auth0Id={auth0Id} accessToken={accessToken} onWalletsUpdated={onWalletsUpdated} />
        </MetaMaskProvider>
    );
}

export default WalletConnection;
