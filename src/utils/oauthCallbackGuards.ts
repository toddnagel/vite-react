/**
 * Auth0 (this app) uses `redirect_uri: window.location.origin` → callback on `/` only.
 * Xumm / Xaman OAuth2 PKCE uses the same `code` + `state` query keys as Auth0.
 * We must NOT strip the URL when the user is returning from Xaman, or the Xumm PKCE
 * library never sees the grant and the wallet never connects.
 */

export function isLikelyXummPkceOAuthReturn(search: string): boolean {
	const q = search.startsWith('?') ? search.slice(1) : search;
	const p = new URLSearchParams(q);
	const scope = p.get('scope') || '';
	return (
		p.get('xaman_return') === '1' ||
		scope.includes('XummPkce') ||
		p.has('access_token') ||
		p.has('authorization_code')
	);
}

/** True only for Auth0 SPA callback at site root (matches Auth0 redirect_uri). */
export function isAuth0SpaCallbackUrl(pathname: string, search: string): boolean {
	const p = new URLSearchParams(search.startsWith('?') ? search.slice(1) : search);
	const onRoot = pathname === '/' || pathname === '';
	const hasOAuthCodeOrState = p.has('code') || p.has('state');
	return onRoot && hasOAuthCodeOrState && !isLikelyXummPkceOAuthReturn(search);
}

/**
 * After Xaman mobile redirect back to our app (usually /profile). We must resume
 * `xamanHandler.connect` so new wallets are created in the DB when the user had none.
 *
 * PKCE returns standard `code` + `state` — we never append `xaman_return` from the SDK,
 * so detecting only `xaman_return=1` misses most real returns.
 */
export function shouldResumeXamanPkceConnect(pathname: string, search: string): boolean {
	const path = pathname.toLowerCase();
	if (!path.includes('profile')) return false;

	const q = search.startsWith('?') ? search.slice(1) : search;
	const p = new URLSearchParams(q);

	// OAuth error without a grant (user cancelled in wallet, etc.)
	if (p.get('error') && !p.has('code') && !p.has('access_token')) {
		return false;
	}

	if (p.get('xaman_return') === '1') return true;
	if (p.has('access_token')) return true;
	if (p.has('authorization_code')) return true;

	const scope = p.get('scope') || '';
	if (scope.includes('XummPkce')) return true;

	// Standard OAuth2 authorization code (Xumm PKCE uses `code` + `state`)
	if (p.has('code') && p.has('state')) return true;

	return false;
}
