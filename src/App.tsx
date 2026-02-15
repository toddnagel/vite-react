import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProtectedRoute from "./components/ProtectedRoute";
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

  // Redirect to profile after successful login
  useEffect(() => {
    if (!isLoading && isAuthenticated) {
      // Check if we're coming from Auth0 callback (URL might have code/state params)
      const urlParams = new URLSearchParams(window.location.search);
      if (urlParams.has('code') || urlParams.has('state')) {
        // Small delay to ensure Auth0 has processed the callback
        setTimeout(() => {
          navigate('/profile', { replace: true });
        }, 100);
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
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
