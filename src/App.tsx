import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProtectedRoute from "./components/ProtectedRoute";
import { useUserSync } from "./hooks/useUserSync";
import Home from "./pages/Home";
import About from "./pages/About";
import FAQ from "./pages/FAQ";
import Contact from "./pages/Contact";
import Vision from "./pages/Vision";
import RedShadow from "./pages/RedShadow";
import Cryptonite from "./pages/Cryptonite";
import Terms from "./pages/Terms";
import Profile from "./pages/Profile";
import NotFound from "./pages/404";

function AppContent() {
  const { isAuthenticated, isLoading } = useAuth0();
  const navigate = useNavigate();
  const location = useLocation();

  // Sync user with database on login
  useUserSync();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }, [location.pathname]);

  // Redirect to profile ONLY after successful login (Auth0 callback)
  useEffect(() => {
    if (!isLoading && isAuthenticated) {
      // Check if we're coming from Auth0 callback (URL has code/state params)
      const urlParams = new URLSearchParams(window.location.search);
      const hasAuthParams = urlParams.has('code') || urlParams.has('state');

      // Only redirect if we have auth params (coming back from Auth0 login)
      if (hasAuthParams) {
        // Get returnTo from sessionStorage (set by loginWithRedirect appState)
        const appState = sessionStorage.getItem('auth0_app_state');
        let returnTo = '/profile';

        if (appState) {
          try {
            const parsed = JSON.parse(appState);
            returnTo = parsed.returnTo || '/profile';
            sessionStorage.removeItem('auth0_app_state');
          } catch (e) {
            // Ignore parse errors
          }
        }

        // Clear URL params first
        window.history.replaceState({}, '', returnTo);

        // Small delay to ensure Auth0 has processed the callback
        setTimeout(() => {
          navigate(returnTo, { replace: true });
        }, 300);
      }
    }
  }, [isAuthenticated, isLoading, navigate]);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/vision" element={<Vision />} />
        <Route path="/redshadow" element={<RedShadow />} />
        <Route path="/cryptonite" element={<Cryptonite />} />
        <Route path="/terms" element={<Terms />} />
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

function App() {
  return <AppContent />;
}

export default App;
