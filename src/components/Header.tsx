import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import Menu from "./Menu";
import UserMenu from "./UserMenu";

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 250);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div
        id="preloader"
        className="preloader loaded"
        style={{ display: "none" }}
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
          <div className="row">
            <div className="col-3 loader-section section-left">
              <div className="bg"></div>
            </div>
            <div className="col-3 loader-section section-left">
              <div className="bg"></div>
            </div>
            <div className="col-3 loader-section section-right">
              <div className="bg"></div>
            </div>
            <div className="col-3 loader-section section-right">
              <div className="bg"></div>
            </div>
          </div>
        </div>
      </div>

      <button id="back-top" className="back-to-top">
        <FontAwesomeIcon icon={faArrowUp} />
      </button>


      <header
        id="header-sticky"
        className={`header-1 ${isSticky ? 'sticky' : ''} ${isSticky ? 'bg-[rgba(24,24,24,0.8)] backdrop-blur-md' : ''} transition-all duration-300`}
      >
        <div className="container-fluid">
          <div className="mega-menu-wrapper">
            <div className={`header-main flex items-center justify-between ${isSticky ? 'py-1' : 'py-2'} transition-all duration-300`}>
              <div className="header-left">
                <div className="logo">
                  <Link className="header-logo" to="/">
                    <img
                      src="/white-logo.png"
                      alt="logo-img"
                      className="transition-all duration-300"
                      style={{
                        height: isSticky ? '48px' : '96px',
                        width: isSticky ? '48px' : '96px',
                      }}
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
