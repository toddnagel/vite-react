import { XummPkce } from 'xumm-oauth2-pkce';

const xamanApiKey =
  import.meta.env.VITE_XAMAN_API_KEY || import.meta.env.VITE_XUMM_API_KEY || '';

const configuredRedirectUrl = import.meta.env.VITE_XAMAN_REDIRECT_URL || '';

let xamanPkce: XummPkce | null = null;

export function isXamanConfigured() {
  return Boolean(xamanApiKey);
}

export function getXamanRedirectUrl() {
  if (typeof window === 'undefined') {
    return configuredRedirectUrl;
  }

  if (configuredRedirectUrl) {
    return configuredRedirectUrl;
  }

  return `${window.location.origin}/`;
}

function getXamanClient() {
  if (!xamanApiKey) {
    throw new Error(
      'Xaman is not configured. Set VITE_XAMAN_API_KEY and restart the app.'
    );
  }

  if (typeof window === 'undefined') {
    throw new Error('Xaman can only be used in a browser environment.');
  }

  if (!xamanPkce) {
    xamanPkce = new XummPkce(xamanApiKey, {
      redirectUrl: getXamanRedirectUrl(),
      implicit: true,
      rememberJwt: false,
    });
  }

  return xamanPkce;
}

export async function clearXamanSession() {
  if (!xamanPkce) {
    return;
  }

  try {
    xamanPkce.logout();
  } catch (error) {
    console.warn('Failed to clear Xaman session:', error);
  } finally {
    xamanPkce = null;
  }
}

export async function authorizeXamanAccount(): Promise<string> {
  const client = getXamanClient();

  const flow = await client.authorize();
  const resolvedFlow = flow || (await client.state());
  const account = resolvedFlow?.me?.account;

  if (!account) {
    throw new Error('No XRPL account returned from Xaman sign-in.');
  }

  return account;
}
