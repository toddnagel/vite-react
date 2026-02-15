import { useEffect, useRef } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { syncUserWithDatabase } from '../services/userService';

/**
 * Hook to automatically sync Auth0 user with database on login
 * Runs once when user becomes authenticated
 */
export function useUserSync() {
    const { isAuthenticated, user, getAccessTokenSilently } = useAuth0();
    const hasSyncedRef = useRef(false);
    const syncingRef = useRef(false);

    useEffect(() => {
        // Only sync if authenticated, user exists, and we haven't synced yet
        if (isAuthenticated && user && !hasSyncedRef.current && !syncingRef.current) {
            syncingRef.current = true;

            const syncUser = async () => {
                try {
                    // Get access token for API authentication
                    const accessToken = await getAccessTokenSilently().catch(() => undefined);

                    // Sync user with database
                    const result = await syncUserWithDatabase(user, accessToken);

                    if (result.success) {
                        hasSyncedRef.current = true;
                        console.log('User synced with database:', result.isNewUser ? 'New user created' : 'User updated');
                    }
                } catch (error) {
                    console.error('Failed to sync user with database:', error);
                    // Don't block the app if sync fails - user can still use the app
                } finally {
                    syncingRef.current = false;
                }
            };

            syncUser();
        }

        // Reset sync flag when user logs out
        if (!isAuthenticated) {
            hasSyncedRef.current = false;
            syncingRef.current = false;
        }
    }, [isAuthenticated, user, getAccessTokenSilently]);
}
