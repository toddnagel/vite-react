const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || '/api';

interface UserProfile {
  id: number;
  auth0_id: string;
  email: string;
  name: string;
  picture_url: string;
  bio: string | null;
  wallet_address: string | null;
  wallet_type: string | null;
  preferences: any;
}

interface ProfileResponse {
  success: boolean;
  user: UserProfile;
}

/**
 * Get user profile from database
 */
export async function getUserProfile(
  auth0Id: string,
  accessToken?: string
): Promise<ProfileResponse> {
  try {
    const response = await fetch(`${API_BASE_URL}/user/profile?auth0_id=${encodeURIComponent(auth0Id)}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        ...(accessToken && { Authorization: `Bearer ${accessToken}` }),
      },
    });

    if (!response.ok) {
      const error = await response.json().catch(() => ({ error: 'Unknown error' }));
      throw new Error(error.error || `HTTP error! status: ${response.status}`);
    }

    const data: ProfileResponse = await response.json();
    return data;
  } catch (error) {
    console.error('Error getting user profile:', error);
    throw error;
  }
}

/**
 * Update user profile in database
 */
export async function updateUserProfile(
  auth0Id: string,
  bio: string,
  accessToken?: string
): Promise<ProfileResponse> {
  try {
    const response = await fetch(`${API_BASE_URL}/user/profile`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        ...(accessToken && { Authorization: `Bearer ${accessToken}` }),
      },
      body: JSON.stringify({
        auth0_id: auth0Id,
        bio,
      }),
    });

    if (!response.ok) {
      const error = await response.json().catch(() => ({ error: 'Unknown error' }));
      throw new Error(error.error || `HTTP error! status: ${response.status}`);
    }

    const data: ProfileResponse = await response.json();
    return data;
  } catch (error) {
    console.error('Error updating user profile:', error);
    throw error;
  }
}
