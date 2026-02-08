import { Link, NavLink } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUp,
  faTimes,
  faBars,
} from "@fortawesome/free-solid-svg-icons";

function Header() {
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

      <div className="fix-area">
        <div className="offcanvas__info">
          <div className="offcanvas__wrapper">
            <div className="offcanvas__content">
              <div className="offcanvas__top mb-5 d-flex justify-content-between align-items-center">
                <div className="offcanvas__logo">
                  <Link to="/">
                    <img src="white-logo.png" alt="logo-img" />
                  </Link>
                </div>
                <div className="offcanvas__close">
                  <button>
                    <FontAwesomeIcon icon={faTimes} />
                  </button>
                </div>
              </div>
              <div className="mobile-menu fix mb-3 mean-container">
                <div className="mean-bar">
                  <a
                    href="#nav"
                    className="meanmenu-reveal"
                    style={{ right: "0px", left: "auto", display: "inline" }}
                  >
                    <span>
                      <span>
                        <span></span>
                      </span>
                    </span>
                  </a>
                  <nav className="mean-nav hidden d-md-block">
                    <ul>
                      <li>
                        <NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''}>Home</NavLink>
                      </li>
                      <li>
                        <NavLink to="/about" className={({ isActive }) => isActive ? 'active' : ''}>About Us</NavLink>
                      </li>
                      <li>
                        <NavLink to="/faq" className={({ isActive }) => isActive ? 'active' : ''}>Faq</NavLink>
                      </li>
                      <li className="mean-last">
                        <NavLink to="/contact" className={({ isActive }) => isActive ? 'active' : ''}>Contact</NavLink>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="offcanvas__overlay"></div>

      <header id="header-sticky" className="header-1">
        <div className="container-fluid">
          <div className="mega-menu-wrapper">
            <div className="header-main">
              <div className="header-left">
                <div className="logo">
                  <Link className="header-logo" to="/">
                    <img src="/white-logo.png" alt="logo-img" />
                  </Link>
                </div>
                <div className="mean__menu-wrapper">
                  <div className="main-menu">
                    <div className="mean-push"></div>
                    <nav id="mobile-menu" className="d-none hidden d-md-block">
                      <ul>
                        <li>
                          <NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''}>Home</NavLink>
                        </li>
                        <li>
                          <NavLink to="/about" className={({ isActive }) => isActive ? 'active' : ''}>About Us</NavLink>
                        </li>
                        <li>
                          <NavLink to="/faq" className={({ isActive }) => isActive ? 'active' : ''}>FAQ</NavLink>
                        </li>                          
                      <li className="mean-last">
                        <NavLink to="/contact" className={({ isActive }) => isActive ? 'active' : ''}>Contact</NavLink>
                      </li>                     
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
              <div className="header-right d-flex justify-content-end align-items-center">
                <div className="header__hamburger d-md-none my-auto">
                  <div className="sidebar__toggle">
                    <FontAwesomeIcon icon={faBars} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
