import { createContext, useContext, useState, useEffect, useRef, ReactNode } from 'react';
import type { Wallet } from '../services/walletService';
import { getUserWallets } from '../services/walletService';
// Add imports for user profile info and social handles as needed

interface UserProfile {
    auth0Id: string;
    accessToken?: string;
    socialHandles?: { [key: string]: string };
    // Add other profile fields as needed
}

interface UserContextType {
    profile: UserProfile | null;
    wallets: Wallet[];
    setProfile: (profile: UserProfile | null) => void;
    setWallets: (wallets: Wallet[]) => void;
    reloadWallets: () => Promise<void>;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {
    const [profile, setProfile] = useState<UserProfile | null>(null);
    const [wallets, setWallets] = useState<Wallet[]>([]);
    /** Avoid refetching on every silent token refresh; still load when token first appears after auth0Id. */
    const contextWalletsLoadedForAuth0Id = useRef<string | null>(null);

    const reloadWallets = async () => {
        if (!profile?.auth0Id || !profile?.accessToken) return;
        const result = await getUserWallets(profile.auth0Id, profile.accessToken);
        if (result.success) {
            setWallets(result.wallets || []);
        }
    };

    useEffect(() => {
        if (!profile?.auth0Id || !profile?.accessToken) {
            if (!profile?.auth0Id) contextWalletsLoadedForAuth0Id.current = null;
            return;
        }
        if (contextWalletsLoadedForAuth0Id.current === profile.auth0Id) return;
        contextWalletsLoadedForAuth0Id.current = profile.auth0Id;
        void reloadWallets();
    }, [profile?.auth0Id, profile?.accessToken]);

    return (
        <UserContext.Provider value={{ profile, wallets, setProfile, setWallets, reloadWallets }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUserContext = () => {
    const context = useContext(UserContext);
    if (!context) throw new Error('useUserContext must be used within a UserProvider');
    return context;
};
