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
  const url = `${API_BASE_URL}/user/sync`;
  console.log('syncUserWithDatabase: Making request to:', url);
  console.log('syncUserWithDatabase: API_BASE_URL is:', API_BASE_URL);
  console.log('syncUserWithDatabase: User data:', {
    sub: auth0User.sub,
    email: auth0User.email,
    name: auth0User.name
  });
  
  try {
    console.log('syncUserWithDatabase: Starting fetch to:', url);
    const response = await fetch(url, {
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
    }).catch((fetchError) => {
      console.error('syncUserWithDatabase: Fetch error (network/CORS):', fetchError);
      throw new Error(`Network error: ${fetchError.message}`);
    });

    console.log('syncUserWithDatabase: Response received, status:', response.status);
    console.log('syncUserWithDatabase: Response ok:', response.ok);
    console.log('syncUserWithDatabase: Response headers:', Object.fromEntries(response.headers.entries()));

    if (!response.ok) {
      const errorText = await response.text();
      console.error('syncUserWithDatabase: Error response:', errorText);
      let error;
      try {
        error = JSON.parse(errorText);
      } catch {
        error = { error: errorText || 'Unknown error' };
      }
      throw new Error(error.error || `HTTP error! status: ${response.status}`);
    }

    const data: SyncUserResponse = await response.json();
    console.log('syncUserWithDatabase: Success, data:', data);
    return data;
  } catch (error: any) {
    console.error('syncUserWithDatabase: Exception caught:', error);
    console.error('syncUserWithDatabase: Error message:', error.message);
    console.error('syncUserWithDatabase: Error stack:', error.stack);
    throw error;
  }
}
