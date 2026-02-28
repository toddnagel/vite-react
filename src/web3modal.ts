import { createWeb3Modal, defaultWagmiConfig } from '@web3modal/wagmi/react';
import { mainnet } from 'wagmi/chains';

export const walletConnectProjectId =
  import.meta.env.VITE_WALLETCONNECT_PROJECT_ID ||
  import.meta.env.VITE_WEB3MODAL_PROJECT_ID ||
  import.meta.env.VITE_PROJECT_ID ||
  '';

const parseWalletIds = (rawValue?: string) =>
  (rawValue || '')
    .split(',')
    .map(item => item.trim())
    .filter(Boolean);

const includeWalletIds = parseWalletIds(
  import.meta.env.VITE_WC_INCLUDE_WALLET_IDS
);
const featuredWalletIds = parseWalletIds(
  import.meta.env.VITE_WC_FEATURED_WALLET_IDS
);
const excludeWalletIds = parseWalletIds(
  import.meta.env.VITE_WC_EXCLUDE_WALLET_IDS
);
const showAllWallets = import.meta.env.VITE_WC_SHOW_ALL_WALLETS !== 'false';

const metadata = {
  name: 'Donovan',
  description: 'Donovan wallet connection',
  url:
    typeof window !== 'undefined'
      ? window.location.origin
      : 'http://localhost:5173',
  icons: [
    `${typeof window !== 'undefined' ? window.location.origin : ''}/favicon.ico`,
  ],
};

const chains = [mainnet] as const;

export const wagmiConfig = defaultWagmiConfig({
  chains,
  projectId: walletConnectProjectId || 'missing_project_id',
  metadata,
  enableWalletConnect: true,
  enableInjected: true,
  enableEIP6963: true,
  enableCoinbase: true,
});

createWeb3Modal({
  wagmiConfig,
  projectId: walletConnectProjectId || 'missing_project_id',
  enableAnalytics: false,
  allWallets: showAllWallets ? 'SHOW' : 'HIDE',
  includeWalletIds,
  featuredWalletIds,
  excludeWalletIds,
});
