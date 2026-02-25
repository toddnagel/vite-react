import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import Menu from "./Menu";
import UserMenu from "./UserMenu";

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [showBackTop, setShowBackTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 250);
      setShowBackTop(window.scrollY > 250);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleBackToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      {/* <div
        id="preloader"
        className="preloader loaded hidden"
      >
        <div className="animation-preloader">
          <div className="spinner"></div>
          <div className="txt-loading">
            <span data-text-preloader="A" className="letters-loading">
              X
            </span>
            <span data-text-preloader="I" className="letters-loading">
              O
            </span>
            <span data-text-preloader="F" className="letters-loading">
              L
            </span>
            <span data-text-preloader="O" className="letters-loading">
              O
            </span>
            <span data-text-preloader="R" className="letters-loading">
              I
            </span>
            <span data-text-preloader="G" className="letters-loading">
              T
            </span>
            <span data-text-preloader="E" className="letters-loading">
              Z
            </span>
            <span data-text-preloader="E" className="letters-loading">
              Q
            </span>
            <span data-text-preloader="E" className="letters-loading">
              I
            </span>
            <span data-text-preloader="E" className="letters-loading">
              N
            </span>
            <span data-text-preloader="E" className="letters-loading">
              T
            </span>
            <span data-text-preloader="E" className="letters-loading">
              L
            </span>
            <span data-text-preloader="E" className="letters-loading">
              E
            </span>
          </div>
          <p className="text-center">Loading</p>
        </div>
        <div className="loader">
          <div className="flex flex-wrap">
            <div className="w-1/4 loader-section section-left">
              <div className="bg"></div>
            </div>
            <div className="w-1/4 loader-section section-left">
              <div className="bg"></div>
            </div>
            <div className="w-1/4 loader-section section-right">
              <div className="bg"></div>
            </div>
            <div className="w-1/4 loader-section section-right">
              <div className="bg"></div>
            </div>
          </div>
        </div>
      </div> */}

      <button
        id="back-top"
        className={`back-to-top ${showBackTop ? 'show' : ''}`}
        onClick={handleBackToTop}
      >
        <FontAwesomeIcon icon={faArrowUp} />
      </button>


      <header
        id="header-sticky"
        className={`${isSticky ? 'fixed' : 'absolute'} p-0 top-0 left-0 right-0 z-50 w-full ${isSticky ? 'bg-[rgba(24,24,24,0.8)] backdrop-blur-md' : ''} transition-all duration-300 ease-out`}
      >
        <div className="transition-all w-full px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24 2xl:px-28">
          <div className="mega-menu-wrapper">
            <div className={`header-main flex items-center justify-between ${isSticky ? 'py-1' : 'py-4'} transition-all duration-300`}>
              <div className="header-left flex items-center gap-20 lg:gap-40">
                <div className="logo">
                  <Link className="header-logo" to="/">
                    <img
                      src="/white-logo.png"
                      alt="logo-img"
                      className={`transition-all duration-300 ${isSticky ? 'h-12 w-12' : 'h-12 w-12 md:h-24 md:w-24'}`}
                    />
                  </Link>
                </div>
                <div className="mean__menu-wrapper">
                  <Menu
                    isMobileMenuOpen={isMobileMenuOpen}
                    setIsMobileMenuOpen={setIsMobileMenuOpen}
                    isSticky={isSticky}
                  />
                </div>
              </div>
              <div className="header-right flex justify-end items-center gap-4">
                <UserMenu isSticky={isSticky} />
                <Menu
                  variant="mobile-toggle"
                  isMobileMenuOpen={isMobileMenuOpen}
                  setIsMobileMenuOpen={setIsMobileMenuOpen}
                />
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
