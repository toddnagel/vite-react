import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDiscord,
  faReddit,
} from "@fortawesome/free-brands-svg-icons";

import { faX } from "@fortawesome/free-solid-svg-icons";

function Footer() {
  const footerRef = useRef<HTMLElement>(null);
  const greenBlobRef = useRef<HTMLDivElement>(null);
  const orangeBlobRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [greenBlobOffset, setGreenBlobOffset] = useState(0);
  const [orangeBlobOffset, setOrangeBlobOffset] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => {
      if (footerRef.current) {
        observer.unobserve(footerRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!footerRef.current) return;

      const rect = footerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Apply parallax when footer is in viewport
      if (rect.top <= windowHeight && rect.bottom >= 0) {
        // Calculate scroll progress based on footer's position
        const sectionTop = rect.top;
        const sectionHeight = rect.height;

        // Calculate parallax offset - different speeds for each blob
        // Green blob moves slower (0.3x speed)
        const scrollProgress = Math.max(0, (windowHeight - sectionTop) / (windowHeight + sectionHeight));
        const greenOffset = scrollProgress * sectionHeight * 0.3;
        const orangeOffset = scrollProgress * sectionHeight * 0.4; // Orange moves slightly faster (0.4x speed)

        setGreenBlobOffset(greenOffset);
        setOrangeBlobOffset(orangeOffset);
      } else {
        // Reset when footer is out of viewport
        setGreenBlobOffset(0);
        setOrangeBlobOffset(0);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial calculation

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <footer ref={footerRef} className="footer-section section-bg py-4 lg:py-8 relative overflow-hidden">
      {/* Green blob - left side */}
      <div
        ref={greenBlobRef}
        className="circle-shape absolute hidden xl:block pointer-events-none"
        style={{
          top: '5%',
          left: '0px',
          transform: `translateY(${greenBlobOffset}px)`,
          willChange: 'transform',
          transition: 'transform 0.1s ease-out',
          zIndex: 0,
          filter: 'brightness(1.2)',
        }}
      >
        <img src="/color-bg-shape.png" alt="Green blob" className="w-full h-full" />
      </div>

      {/* Orange blob - right side */}
      <div
        ref={orangeBlobRef}
        className="circle-shape-2 absolute hidden xl:block pointer-events-none"
        style={{
          top: '-155px',
          right: '30px',
          transform: `translateY(${orangeBlobOffset}px)`,
          willChange: 'transform',
          transition: 'transform 0.1s ease-out',
          zIndex: 0,
          filter: 'brightness(1.2)',
        }}
      >
        <img src="/color-bg-shape-2.png" alt="Orange blob" className="w-full h-full" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* XRPL Resources Section */}
        <div className={`flex flex-col items-center mb-4 ${isVisible ? 'opacity-100' : 'opacity-0'} transition-opacity duration-700 ease-out`}>
          <h3 className="text-xl md:text-2xl font-bold text-white mb-6 opacity-0 animate-[fadeInUp_0.6s_ease-out_0.2s_forwards]">
            XRPL Resources
          </h3>
          <div className="w-full max-w-5xl opacity-0 animate-[fadeInUp_0.6s_ease-out_0.4s_forwards]">
            <div className="footer-links-grid grid grid-cols-3 lg:grid-cols-5 gap-4 justify-items-center">
              <a href="https://xrp.cafe/" className="text-white whitespace-nowrap transition-all duration-300 ease-in-out">
                Xrp.cafe Marketplace
              </a>
              <a href="https://joeywallet.app/" className="text-white whitespace-nowrap transition-all duration-300 ease-in-out">
                Joey Wallet
              </a>
              <a href="https://xrpscan.com/" className="text-white whitespace-nowrap transition-all duration-300 ease-in-out">
                XRPSCAN Explorer
              </a>
              <a href="https://www.xrptoolkit.com/" className="text-white whitespace-nowrap transition-all duration-300 ease-in-out">
                XRP Toolkit
              </a>
              <a href="https://xrpl.org/" className="text-white whitespace-nowrap transition-all duration-300 ease-in-out">
                Official XRPL Site
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className={`flex flex-col md:flex-row items-center justify-between gap-5 md:gap-0 pt-6 ${isVisible ? 'opacity-100' : 'opacity-0'} transition-opacity duration-700 ease-out delay-300`}>
          <div className="logo-img opacity-0 animate-[fadeInUp_0.6s_ease-out_0.6s_forwards]">
            <Link to="/">
              <img
                width={60}
                src="/white-logo.png"
                alt="The Xoloitzquintle Collection Logo"
              />
            </Link>
          </div>
          <p className="text-[#cdcdcd] text-center text-sm md:text-left opacity-0 animate-[fadeInUp_0.6s_ease-out_0.7s_forwards]">
            The Xoloitzquintle Collection © 2024. All Rights Reserved.
          </p>
          <div className="social-icon flex items-center gap-2 opacity-0 animate-[fadeInUp_0.6s_ease-out_0.8s_forwards]">
            <a href="#" className="inline-flex items-center justify-center w-12 h-12 rounded-full border border-[#cfd0d4] text-[#cdcdcd] hover:text-[#b7e9f7] hover:bg-black/40 transition-all duration-300 ease-in-out">
              <FontAwesomeIcon icon={faX} />
            </a>
            <a href="#" className="inline-flex items-center justify-center w-12 h-12 rounded-full border border-[#cfd0d4] text-[#cdcdcd] hover:text-[#b7e9f7] hover:bg-black/40 transition-all duration-300 ease-in-out">
              <FontAwesomeIcon icon={faDiscord} />
            </a>
            <a href="#" className="inline-flex items-center justify-center w-12 h-12 rounded-full border border-[#cfd0d4] text-[#cdcdcd] hover:text-[#b7e9f7] hover:bg-black/40 transition-all duration-300 ease-in-out">
              <FontAwesomeIcon icon={faReddit} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
