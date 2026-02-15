import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Auth0Provider } from '@auth0/auth0-react'

const domain = import.meta.env.VITE_AUTH0_DOMAIN
const clientId = import.meta.env.VITE_AUTH0_CLIENT_ID

if (!domain || !clientId) {
  console.error('Auth0 Environment Variables:', {
    domain: domain || 'MISSING',
    clientId: clientId || 'MISSING',
    allEnv: Object.keys(import.meta.env).filter(key => key.startsWith('VITE_'))
  })
  throw new Error(
    'Missing Auth0 configuration. Please check your environment variables in Vercel. ' +
    'Make sure VITE_AUTH0_DOMAIN and VITE_AUTH0_CLIENT_ID are set and redeploy.'
  )
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      <App />
    </Auth0Provider>
  </StrictMode>,
)
