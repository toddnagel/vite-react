import { User } from '@auth0/auth0-react';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || '/api';

interface SyncUserResponse {
  success: boolean;
  user: any;
  isNewUser: boolean;
}

/**
 * Syncs Auth0 user with database
 * Creates user if doesn't exist, updates if exists
 */
export async function syncUserWithDatabase(
  auth0User: User,
  accessToken?: string
): Promise<SyncUserResponse> {
  try {
    const response = await fetch(`${API_BASE_URL}/user/sync`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...(accessToken && { Authorization: `Bearer ${accessToken}` }),
      },
      body: JSON.stringify({
        sub: auth0User.sub,
        email: auth0User.email,
        name: auth0User.name,
        picture: auth0User.picture,
      }),
    });

    if (!response.ok) {
      const error = await response.json().catch(() => ({ error: 'Unknown error' }));
      throw new Error(error.error || `HTTP error! status: ${response.status}`);
    }

    const data: SyncUserResponse = await response.json();
    return data;
  } catch (error) {
    console.error('Error syncing user with database:', error);
    throw error;
  }
}
