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
                    console.log('useUserSync: Starting user sync for:', user.sub);
                    // Get access token for API authentication
                    const accessToken = await getAccessTokenSilently().catch((err) => {
                        console.warn('useUserSync: Could not get access token:', err);
                        return undefined;
                    });

                    console.log('useUserSync: Calling syncUserWithDatabase...');
                    // Sync user with database
                    const result = await syncUserWithDatabase(user, accessToken);
                    console.log('useUserSync: Sync result:', result);

                    if (result.success) {
                        hasSyncedRef.current = true;
                        console.log('useUserSync: ✅ User synced with database:', result.isNewUser ? 'New user created' : 'User updated');
                    } else {
                        console.error('useUserSync: ❌ Sync returned success=false');
                    }
                } catch (error: any) {
                    console.error('useUserSync: ❌ Failed to sync user with database:', error);
                    console.error('useUserSync: Error details:', {
                        message: error.message,
                        stack: error.stack
                    });
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
