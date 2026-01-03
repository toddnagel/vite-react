import './App.css'

function App() {

  return (
<>

<div id="preloader" className="preloader loaded" style={{display: 'none'}}>
    <div className="animation-preloader">
        <div className="spinner">
        </div>
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

<div className="mouse-cursor cursor-outer" style={{visibility: 'visible', transform: 'translate(660px, 438px)'}}></div>
<div className="mouse-cursor cursor-inner" style={{visibility: 'visible', transform: 'translate(660px, 438px)'}}></div>

<button id="back-top" className="back-to-top">
    <i className="fa-regular fa-arrow-up"></i>
</button>

<div className="fix-area">
    <div className="offcanvas__info">
        <div className="offcanvas__wrapper">
            <div className="offcanvas__content">
                <div className="offcanvas__top mb-5 d-flex justify-content-between align-items-center">
                    <div className="offcanvas__logo">
                        <a href="/">
                            <img src="white-logo.svg" alt="logo-img" />
                        </a>
                    </div>
                    <div className="offcanvas__close">
                        <button>
                            <i className="fas fa-times"></i>
                        </button>
                    </div>
                </div>
                <p className="text d-none d-xl-block">
                    Nullam dignissim, ante scelerisque the is euismod fermentum odio sem semper the is erat, a
                    feugiat leo urna eget eros. Duis Aenean a imperdiet risus.
                </p>
                <div className="mobile-menu fix mb-3 mean-container"><div className="mean-bar"><a href="#nav" className="meanmenu-reveal" style={{right: '0px', left: 'auto', display: 'inline'}}><span><span><span></span></span></span></a><nav className="mean-nav">
                                <ul style={{display: 'none'}}>
                                    <li>
                                        <a href="/">
                                            Home
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/about">About Us</a>
                                    </li>
                                    {/* <li className="has-dropdown">
                                        <a href="news.html">
                                            Pages
                                            <i className="fa-solid fa-chevron-down"></i>
                                        </a>
                                        <ul className="submenu">
                                            
                                            <li><a href="team.html">Team</a></li>
                                            <li><a href="project.html">Portfolio</a></li>
                                            <li><a href="project-details.html">Portfolio Details</a></li>
                                            <li><a href="pricing.html">Pricing</a></li>
                                            
                                            <li><a href="login.html">Login</a></li>
                                            <li><a href="register.html">Register</a></li>
                                            <li><a href="404.html">404 Page</a></li>
                                        </ul>
                                    </li> */}
                                    {/* <li><a href="service.html">Services</a></li> */}
                                    <li><a href="/faq">Our Faq</a></li>
                                    {/* <li>
                                        <a href="news-details.html">
                                            Blog
                                            <i className="fa-solid fa-chevron-down"></i>
                                        </a>
                                        <ul className="submenu">
                                            <li><a href="news.html">Blog</a></li>
                                            <li><a href="news-details.html">Blog Details</a></li>
                                        </ul>
                                    </li> */}
                                    <li className="mean-last">
                                        <a href="/contact">Contact</a>
                                    </li>
                                </ul>
                            </nav></div></div>
                <div className="offcanvas__contact">
                    <h4>Contact Info</h4>
                    <ul>
                        <li className="d-flex align-items-center">
                            <div className="offcanvas__contact-icon">
                                <i className="fal fa-map-marker-alt"></i>
                            </div>
                            <div className="offcanvas__contact-text">
                                <a target="_blank" href="#">Main Street, Melbourne, Australia</a>
                            </div>
                        </li>
                        <li className="d-flex align-items-center">
                            <div className="offcanvas__contact-icon mr-15">
                                <i className="fal fa-envelope"></i>
                            </div>
                            <div className="offcanvas__contact-text">
                                <a href="mailto:info@example.com"><span className="mailto:info@example.com">info@example.com</span></a>
                            </div>
                        </li>
                        <li className="d-flex align-items-center">
                            <div className="offcanvas__contact-icon mr-15">
                                <i className="fal fa-clock"></i>
                            </div>
                            <div className="offcanvas__contact-text">
                                <a target="_blank" href="#">Mod-friday, 09am -05pm</a>
                            </div>
                        </li>
                        <li className="d-flex align-items-center">
                            <div className="offcanvas__contact-icon mr-15">
                                <i className="far fa-phone"></i>
                            </div>
                            <div className="offcanvas__contact-text">
                                <a href="tel:+11002345909">+11002345909</a>
                            </div>
                        </li>
                    </ul>
                    <div className="header-button mt-4">
                        <a className="theme-btn text-center" href="/contact">
                            Get A Quote
                        </a>
                    </div>
                    <div className="social-icon d-flex align-items-center">
                        <a href="#"><i className="fab fa-facebook-f"></i></a>
                        <a href="#"><i className="fab fa-twitter"></i></a>
                        <a href="#"><i className="fab fa-youtube"></i></a>
                        <a href="#"><i className="fab fa-linkedin-in"></i></a>
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
                        <a className="header-logo" href="/">
                            <img src="/white-logo.png" alt="logo-img" />
                        </a>
                    </div>
                    <div className="mean__menu-wrapper">
                        <div className="main-menu">
                            <div className="mean-push"></div><nav id="mobile-menu" >
                                <ul>
                                    <li>
                                        <a href="/">
                                            Home
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/about">About Us</a>
                                    </li>
                                    {/* <li className="has-dropdown">
                                        <a href="news.html">
                                            Pages
                                            <i className="fa-solid fa-chevron-down"></i>
                                        </a>
                                        <ul className="submenu">
                                            
                                            <li><a href="team.html">Team</a></li>
                                            <li><a href="project.html">Portfolio</a></li>
                                            <li><a href="project-details.html">Portfolio Details</a></li>
                                            <li><a href="pricing.html">Pricing</a></li>
                                            
                                            <li><a href="login.html">Login</a></li>
                                            <li><a href="register.html">Register</a></li>
                                            <li><a href="404.html">404 Page</a></li>
                                        </ul>
                                    </li> */}
                                    {/* <li><a href="service.html">Services</a></li> */}
                                    <li><a href="/faq">Our Faq</a></li>
                                    {/* <li>
                                        <a href="news-details.html">
                                            Blog
                                            <i className="fa-solid fa-chevron-down"></i>
                                        </a>
                                        <ul className="submenu">
                                            <li><a href="news.html">Blog</a></li>
                                            <li><a href="news-details.html">Blog Details</a></li>
                                        </ul>
                                    </li> */}
                                    <li>
                                        <a href="/contact">Contact</a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
                <div className="header-right d-flex justify-content-end align-items-center">
                    <a href="login.html" className="join-text"><img src="/discord.svg" alt="img" /> Join now</a>
                    <a href="#0" className="search-trigger search-icon"><i className="fa-regular fa-magnifying-glass"></i></a>
                    <div className="header__hamburger d-xl-block my-auto">
                        <div className="sidebar__toggle">
                            <i className="fas fa-bars"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</header>

<div className="search-wrap">
    <div className="search-inner">
        <i className="fas fa-times search-close" id="search-close"></i>
        <div className="search-cell">
            <form method="get">
                <div className="search-field-holder">
                    <input type="search" className="main-search-input" placeholder="Search..." />
                </div>
            </form>
        </div>
    </div>
</div>

<section className="hero-secton hero-1 bg-cover" style={{backgroundImage: "url('/hero-bg-3.png')"}}>
    <div className="container">
        <div className="row">
            <div className="col-lg-12">
                <div className="hero-content">
                    <div className="color-bg">
                        <img src="/color-bg.png" alt="img" />
                    </div>
                    <p className="wow fadeInUp" style={{visibility: 'visible', animationName: 'fadeInUp'}}>The</p>
                    <h1 className="wow img-custom-anim-left" data-wow-duration="1.5s" data-wow-delay="0.1s" style={{visibility: 'visible', animationDuration: '1.5s', animationDelay: '0.1s', animationName: 'img-anim-left'}}>
                        Xoloitzquintle <img src="/radius-img.png" alt="img" />
                        <b>A</b> <span className="text-2">Sacred Legacy</span>
                    </h1>
                </div>
            </div>
        </div>
    </div>
    <div className="hero-image img-custom-anim-left bg-cover" style={{backgroundImage: "url('/hero-1.png')"}}>
    </div>
</section>

<section className="about-section section-padding section-bg fix">
    <div className="bg-shape">
        <img src="/bg-shape.png" alt="shape-img" />
    </div>
    <div className="color-bg">
        <img src="/color-bg-shape.png" alt="img" />
    </div>
    <div className="color-bg-2">
        <img src="/color-bg-shape-2.png" alt="img" />
    </div>
    <div className="container">
        <div className="section-title ml-200">
            <h6 className="wow fadeInUp" style={{visibility: 'visible', animationName: 'fadeInUp'}}>
                <img src="star.png" alt="img" /> The Sacred Legacy
            </h6>
            <h2 className="wow fadeInUp" data-wow-delay=".3s" style={{visibility: 'visible', animationDelay: '0.3s', animationName: 'fadeInUp'}}>
                The Xoloitzquintle NFT Collection<br />
                <span>&amp; <b>Our Vision</b> for the XRPL</span>
            </h2>
        </div>
        <div className="about-wrapper mt-4 mt-md-0">
            <ul className="nav" role="tablist">
                <li className="nav-item wow fadeInUp" data-wow-delay=".3s" role="presentation" style={{visibility: 'visible', animationDelay: '0.3s', animationName: 'fadeInUp'}}>
                    <a href="#Mission" data-bs-toggle="tab" className="nav-link" aria-selected="false" tabIndex={-1} role="tab">
                        Our Mission
                    </a>
                </li>
                <li className="nav-item wow fadeInUp" data-wow-delay=".5s" role="presentation" style={{visibility: 'visible', animationDelay: '0.5s', animationName: 'fadeInUp'}}>
                    <a href="#Vision" data-bs-toggle="tab" className="nav-link active" aria-selected="true" role="tab">
                        Our Vision
                    </a>
                </li>
                <li className="nav-item wow fadeInUp" data-wow-delay=".5s" role="presentation" style={{visibility: 'visible', animationDelay: '0.5s', animationName: 'fadeInUp'}}>
                    <a href="#Feature" data-bs-toggle="tab" className="nav-link" aria-selected="false" tabIndex={-1} role="tab">
                        Key Feature
                    </a>
                </li>
            </ul>
            <div className="tab-content">
                <div id="Mission" className="tab-pane fade" role="tabpanel">
                    <div className="about-items">
                        <div className="about-content">
                            <p>
                                Our mission is to honor the millennia-old legacy of the Xoloitzquintle, the spiritual guide of Mesoamerica, by blending ancient heritage with modern blockchain technology. We are determined to make a difference while celebrating culture, art, and loyalty to the XRPL community.
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </p>
                            <ul className="list-items">
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="14" viewBox="0 0 22 14" fill="none">
                                        <path d="M11.3909 14C11.0558 14 10.8325 13.8667 10.6091 13.6L5.91878 8C5.47208 7.46667 5.47208 6.66667 5.91878 6.13333C6.36548 5.6 7.03553 5.6 7.48223 6.13333L11.3909 10.8L20.1015 0.4C20.5482 -0.133333 21.2183 -0.133333 21.665 0.4C22.1117 0.933333 22.1117 1.73333 21.665 2.26667L12.1726 13.6C12.0609 13.8667 11.7259 14 11.3909 14Z" fill="#EFFB53"></path>
                                        <path d="M5.80711 14C5.47208 14 5.24873 13.8667 5.02538 13.6L0.335025 8C-0.111675 7.46667 -0.111675 6.66667 0.335025 6.13333C0.781726 5.6 1.45178 5.6 1.89848 6.13333L6.58883 11.7333C7.03553 12.2667 7.03553 13.0667 6.58883 13.6C6.47716 13.8667 6.14213 14 5.80711 14ZM11.7259 7.06667C11.3909 7.06667 11.1675 6.93333 10.9442 6.66667C10.4975 6.13333 10.4975 5.33333 10.9442 4.8L14.5178 0.4C14.9645 -0.133333 15.6345 -0.133333 16.0812 0.4C16.5279 0.933333 16.5279 1.73333 16.0812 2.26667L12.5076 6.66667C12.2843 6.93333 12.0609 7.06667 11.7259 7.06667Z" fill="#EFFB53"></path>
                                    </svg>

                                    <span>Celebrate Mesoamerican Heritage</span>
                                </li>
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="14" viewBox="0 0 22 14" fill="none">
                                        <path d="M11.3909 14C11.0558 14 10.8325 13.8667 10.6091 13.6L5.91878 8C5.47208 7.46667 5.47208 6.66667 5.91878 6.13333C6.36548 5.6 7.03553 5.6 7.48223 6.13333L11.3909 10.8L20.1015 0.4C20.5482 -0.133333 21.2183 -0.133333 21.665 0.4C22.1117 0.933333 22.1117 1.73333 21.665 2.26667L12.1726 13.6C12.0609 13.8667 11.7259 14 11.3909 14Z" fill="#EFFB53"></path>
                                        <path d="M5.80711 14C5.47208 14 5.24873 13.8667 5.02538 13.6L0.335025 8C-0.111675 7.46667 -0.111675 6.66667 0.335025 6.13333C0.781726 5.6 1.45178 5.6 1.89848 6.13333L6.58883 11.7333C7.03553 12.2667 7.03553 13.0667 6.58883 13.6C6.47716 13.8667 6.14213 14 5.80711 14ZM11.7259 7.06667C11.3909 7.06667 11.1675 6.93333 10.9442 6.66667C10.4975 6.13333 10.4975 5.33333 10.9442 4.8L14.5178 0.4C14.9645 -0.133333 15.6345 -0.133333 16.0812 0.4C16.5279 0.933333 16.5279 1.73333 16.0812 2.26667L12.5076 6.66667C12.2843 6.93333 12.0609 7.06667 11.7259 7.06667Z" fill="#EFFB53"></path>
                                    </svg>

                                     <span>Give Back to the XRPL Community</span>
                                </li>
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="14" viewBox="0 0 22 14" fill="none">
                                        <path d="M11.3909 14C11.0558 14 10.8325 13.8667 10.6091 13.6L5.91878 8C5.47208 7.46667 5.47208 6.66667 5.91878 6.13333C6.36548 5.6 7.03553 5.6 7.48223 6.13333L11.3909 10.8L20.1015 0.4C20.5482 -0.133333 21.2183 -0.133333 21.665 0.4C22.1117 0.933333 22.1117 1.73333 21.665 2.26667L12.1726 13.6C12.0609 13.8667 11.7259 14 11.3909 14Z" fill="#EFFB53"></path>
                                        <path d="M5.80711 14C5.47208 14 5.24873 13.8667 5.02538 13.6L0.335025 8C-0.111675 7.46667 -0.111675 6.66667 0.335025 6.13333C0.781726 5.6 1.45178 5.6 1.89848 6.13333L6.58883 11.7333C7.03553 12.2667 7.03553 13.0667 6.58883 13.6C6.47716 13.8667 6.14213 14 5.80711 14ZM11.7259 7.06667C11.3909 7.06667 11.1675 6.93333 10.9442 6.66667C10.4975 6.13333 10.4975 5.33333 10.9442 4.8L14.5178 0.4C14.9645 -0.133333 15.6345 -0.133333 16.0812 0.4C16.5279 0.933333 16.5279 1.73333 16.0812 2.26667L12.5076 6.66667C12.2843 6.93333 12.0609 7.06667 11.7259 7.06667Z" fill="#EFFB53"></path>
                                    </svg>

                                    <span>Foster Global Collector Connections</span>
                                </li>
                            </ul>
                            <a className="theme-btn" href="/about">explore now <i className="fa-sharp fa-regular fa-arrow-up-right"></i></a>
                        </div>
                        <div className="about-image">
                            <img src="/01.png" alt="img" />
                        </div>
                    </div>
                </div>
                <div id="Vision" className="tab-pane fade show active" role="tabpanel">
                    <div className="about-items">
                        <div className="about-content">
                           <p className="wow fadeInUp" data-wow-delay=".3s" style={{visibility: 'visible', animationDelay: '0.3s', animationName: 'fadeInUp'}}>
                                The Xoloitzquintle Collection is the foundation for a bold vision to encourage travel and cultural connection within the XRPL community and beyond. Our long-term goal is to build a decentralized, trust-based platform for unique, wallet-to-wallet travel experiences on the XRP Ledger.
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </p>
                            <ul className="list-items wow fadeInUp" data-wow-delay=".5s" style={{visibility: 'visible', animationDelay: '0.5s', animationName: 'none'}}>
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="14" viewBox="0 0 22 14" fill="none">
                                        <path d="M11.3909 14C11.0558 14 10.8325 13.8667 10.6091 13.6L5.91878 8C5.47208 7.46667 5.47208 6.66667 5.91878 6.13333C6.36548 5.6 7.03553 5.6 7.48223 6.13333L11.3909 10.8L20.1015 0.4C20.5482 -0.133333 21.2183 -0.133333 21.665 0.4C22.1117 0.933333 22.1117 1.73333 21.665 2.26667L12.1726 13.6C12.0609 13.8667 11.7259 14 11.3909 14Z" fill="#EFFB53"></path>
                                        <path d="M5.80711 14C5.47208 14 5.24873 13.8667 5.02538 13.6L0.335025 8C-0.111675 7.46667 -0.111675 6.66667 0.335025 6.13333C0.781726 5.6 1.45178 5.6 1.89848 6.13333L6.58883 11.7333C7.03553 12.2667 7.03553 13.0667 6.58883 13.6C6.47716 13.8667 6.14213 14 5.80711 14ZM11.7259 7.06667C11.3909 7.06667 11.1675 6.93333 10.9442 6.66667C10.4975 6.13333 10.4975 5.33333 10.9442 4.8L14.5178 0.4C14.9645 -0.133333 15.6345 -0.133333 16.0812 0.4C16.5279 0.933333 16.5279 1.73333 16.0812 2.26667L12.5076 6.66667C12.2843 6.93333 12.0609 7.06667 11.7259 7.06667Z" fill="#EFFB53"></path>
                                    </svg>

                                    <span>Visiting a Xolo Host’s Dwelling</span>
                                </li>
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="14" viewBox="0 0 22 14" fill="none">
                                        <path d="M11.3909 14C11.0558 14 10.8325 13.8667 10.6091 13.6L5.91878 8C5.47208 7.46667 5.47208 6.66667 5.91878 6.13333C6.36548 5.6 7.03553 5.6 7.48223 6.13333L11.3909 10.8L20.1015 0.4C20.5482 -0.133333 21.2183 -0.133333 21.665 0.4C22.1117 0.933333 22.1117 1.73333 21.665 2.26667L12.1726 13.6C12.0609 13.8667 11.7259 14 11.3909 14Z" fill="#EFFB53"></path>
                                        <path d="M5.80711 14C5.47208 14 5.24873 13.8667 5.02538 13.6L0.335025 8C-0.111675 7.46667 -0.111675 6.66667 0.335025 6.13333C0.781726 5.6 1.45178 5.6 1.89848 6.13333L6.58883 11.7333C7.03553 12.2667 7.03553 13.0667 6.58883 13.6C6.47716 13.8667 6.14213 14 5.80711 14ZM11.7259 7.06667C11.3909 7.06667 11.1675 6.93333 10.9442 6.66667C10.4975 6.13333 10.4975 5.33333 10.9442 4.8L14.5178 0.4C14.9645 -0.133333 15.6345 -0.133333 16.0812 0.4C16.5279 0.933333 16.5279 1.73333 16.0812 2.26667L12.5076 6.66667C12.2843 6.93333 12.0609 7.06667 11.7259 7.06667Z" fill="#EFFB53"></path>
                                    </svg>

                                    <span>House or Dwelling Swaps</span>
                                </li>
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="14" viewBox="0 0 22 14" fill="none">
                                        <path d="M11.3909 14C11.0558 14 10.8325 13.8667 10.6091 13.6L5.91878 8C5.47208 7.46667 5.47208 6.66667 5.91878 6.13333C6.36548 5.6 7.03553 5.6 7.48223 6.13333L11.3909 10.8L20.1015 0.4C20.5482 -0.133333 21.2183 -0.133333 21.665 0.4C22.1117 0.933333 22.1117 1.73333 21.665 2.26667L12.1726 13.6C12.0609 13.8667 11.7259 14 11.3909 14Z" fill="#EFFB53"></path>
                                        <path d="M5.80711 14C5.47208 14 5.24873 13.8667 5.02538 13.6L0.335025 8C-0.111675 7.46667 -0.111675 6.66667 0.335025 6.13333C0.781726 5.6 1.45178 5.6 1.89848 6.13333L6.58883 11.7333C7.03553 12.2667 7.03553 13.0667 6.58883 13.6C6.47716 13.8667 6.14213 14 5.80711 14ZM11.7259 7.06667C11.3909 7.06667 11.1675 6.93333 10.9442 6.66667C10.4975 6.13333 10.4975 5.33333 10.9442 4.8L14.5178 0.4C14.9645 -0.133333 15.6345 -0.133333 16.0812 0.4C16.5279 0.933333 16.5279 1.73333 16.0812 2.26667L12.5076 6.66667C12.2843 6.93333 12.0609 7.06667 11.7259 7.06667Z" fill="#EFFB53"></path>
                                    </svg>

                                    <span>Peer-to-Peer Bed-and-Breakfast</span>
                                </li>
                            </ul>
                            <a className="theme-btn wow fadeInUp" data-wow-delay=".3s" href="/about" style={{visibility: 'visible', animationDelay: '0.3s', animationName: 'none'}}>explore now <i className="fa-sharp fa-regular fa-arrow-up-right"></i></a>
                        </div>
                        <div className="about-image wow fadeInUp" data-wow-delay=".3s" style={{visibility: 'visible', animationDelay: '0.3s', animationName: 'none'}}>
                            <img src="/01.png" alt="img" />
                        </div>
                    </div>
                </div>
                <div id="Feature" className="tab-pane fade" role="tabpanel">
                    <div className="about-items">
                        <div className="about-content">
                            <p>
                                The collection features **10,001 unique Xolo NFTs** built on the eco-friendly **XRP Ledger (XRPL)**. Each unique asset is crafted with deep cultural roots, honoring the Xoloitzquintle's legacy as a spiritual guide and symbol of loyalty in Mesoamerican traditions.
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </p>
                            <ul className="list-items">
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="14" viewBox="0 0 22 14" fill="none">
                                        <path d="M11.3909 14C11.0558 14 10.8325 13.8667 10.6091 13.6L5.91878 8C5.47208 7.46667 5.47208 6.66667 5.91878 6.13333C6.36548 5.6 7.03553 5.6 7.48223 6.13333L11.3909 10.8L20.1015 0.4C20.5482 -0.133333 21.2183 -0.133333 21.665 0.4C22.1117 0.933333 22.1117 1.73333 21.665 2.26667L12.1726 13.6C12.0609 13.8667 11.7259 14 11.3909 14Z" fill="#EFFB53"></path>
                                        <path d="M5.80711 14C5.47208 14 5.24873 13.8667 5.02538 13.6L0.335025 8C-0.111675 7.46667 -0.111675 6.66667 0.335025 6.13333C0.781726 5.6 1.45178 5.6 1.89848 6.13333L6.58883 11.7333C7.03553 12.2667 7.03553 13.0667 6.58883 13.6C6.47716 13.8667 6.14213 14 5.80711 14ZM11.7259 7.06667C11.3909 7.06667 11.1675 6.93333 10.9442 6.66667C10.4975 6.13333 10.4975 5.33333 10.9442 4.8L14.5178 0.4C14.9645 -0.133333 15.6345 -0.133333 16.0812 0.4C16.5279 0.933333 16.5279 1.73333 16.0812 2.26667L12.5076 6.66667C12.2843 6.93333 12.0609 7.06667 11.7259 7.06667Z" fill="#EFFB53"></path>
                                    </svg>

                                    <span>10,001 Unique Xolo NFTs</span>
                                </li>
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="14" viewBox="0 0 22 14" fill="none">
                                        <path d="M11.3909 14C11.0558 14 10.8325 13.8667 10.6091 13.6L5.91878 8C5.47208 7.46667 5.47208 6.66667 5.91878 6.13333C6.36548 5.6 7.03553 5.6 7.48223 6.13333L11.3909 10.8L20.1015 0.4C20.5482 -0.133333 21.2183 -0.133333 21.665 0.4C22.1117 0.933333 22.1117 1.73333 21.665 2.26667L12.1726 13.6C12.0609 13.8667 11.7259 14 11.3909 14Z" fill="#EFFB53"></path>
                                        <path d="M5.80711 14C5.47208 14 5.24873 13.8667 5.02538 13.6L0.335025 8C-0.111675 7.46667 -0.111675 6.66667 0.335025 6.13333C0.781726 5.6 1.45178 5.6 1.89848 6.13333L6.58883 11.7333C7.03553 12.2667 7.03553 13.0667 6.58883 13.6C6.47716 13.8667 6.14213 14 5.80711 14ZM11.7259 7.06667C11.3909 7.06667 11.1675 6.93333 10.9442 6.66667C10.4975 6.13333 10.4975 5.33333 10.9442 4.8L14.5178 0.4C14.9645 -0.133333 15.6345 -0.133333 16.0812 0.4C16.5279 0.933333 16.5279 1.73333 16.0812 2.26667L12.5076 6.66667C12.2843 6.93333 12.0609 7.06667 11.7259 7.06667Z" fill="#EFFB53"></path>
                                    </svg>

                                    <span>7 Distinct Traits &amp; 217 Sub-traits</span>
                                </li>
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="14" viewBox="0 0 22 14" fill="none">
                                        <path d="M11.3909 14C11.0558 14 10.8325 13.8667 10.6091 13.6L5.91878 8C5.47208 7.46667 5.47208 6.66667 5.91878 6.13333C6.36548 5.6 7.03553 5.6 7.48223 6.13333L11.3909 10.8L20.1015 0.4C20.5482 -0.133333 21.2183 -0.133333 21.665 0.4C22.1117 0.933333 22.1117 1.73333 21.665 2.26667L12.1726 13.6C12.0609 13.8667 11.7259 14 11.3909 14Z" fill="#EFFB53"></path>
                                        <path d="M5.80711 14C5.47208 14 5.24873 13.8667 5.02538 13.6L0.335025 8C-0.111675 7.46667 -0.111675 6.66667 0.335025 6.13333C0.781726 5.6 1.45178 5.6 1.89848 6.13333L6.58883 11.7333C7.03553 12.2667 7.03553 13.0667 6.58883 13.6C6.47716 13.8667 6.14213 14 5.80711 14ZM11.7259 7.06667C11.3909 7.06667 11.1675 6.93333 10.9442 6.66667C10.4975 6.13333 10.4975 5.33333 10.9442 4.8L14.5178 0.4C14.9645 -0.133333 15.6345 -0.133333 16.0812 0.4C16.5279 0.933333 16.5279 1.73333 16.0812 2.26667L12.5076 6.66667C12.2843 6.93333 12.0609 7.06667 11.7259 7.06667Z" fill="#EFFB53"></path>
                                    </svg>

                                    <span>Upcoming Mint on xrp.cafe</span>
                                </li>
                            </ul>
                            <a className="theme-btn" href="/about">explore now <i className="fa-sharp fa-regular fa-arrow-up-right"></i></a>
                        </div>
                        <div className="about-image">
                            <img src="/01.png" alt="img" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="counter-section section-padding pb-0">
        <div className="container">
            <div className="counter-wrapper">
                <div className="counter-items wow fadeInUp" data-wow-delay=".3s" style={{visibility: 'visible', animationDelay: '0.3s', animationName: 'none'}}>
                    <div className="icon">
                        <img src="/01.svg" alt="img" />
                    </div>
                    <div className="content">
                        <h2><span className="count">10001</span></h2>
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <p>Unique Xolo NFTs</p>
                    </div>
                </div>
                <div className="counter-items wow fadeInUp" data-wow-delay=".5s" style={{visibility: 'visible', animationDelay: '0.5s', animationName: 'none'}}>
                    <div className="icon">
                        <img src="/01.svg" alt="img" />
                    </div>
                    <div className="content">
                        <h2><span className="count">7</span></h2>
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <p>Distinct Traits</p>
                    </div>
                </div>
                <div className="counter-items wow fadeInUp" data-wow-delay=".7s" style={{visibility: 'visible', animationDelay: '0.7s', animationName: 'none'}}>
                    <div className="icon">
                        <img src="/01.svg" alt="img" />
                    </div>
                    <div className="content">
                        <h2><span className="count">333</span></h2>
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <p>Unique Traits</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<section className="service-section fix section-padding">
<div className="container">
    <div className="section-title text-center">
        <h6 className="wow fadeInUp" style={{visibility: 'visible', animationName: 'none'}}>
            <img src="star.png" alt="img" />
            The Xoloitzquintle Collection
        </h6>
        <h2 className="wow fadeInUp" data-wow-delay=".3s" style={{visibility: 'visible', animationDelay: '0.3s', animationName: 'none'}}>
            A Sacred Legacy of <br />
            <span>Art, Culture, &amp; **XRPL**</span>
        </h2>
    </div>
    <div className="row">
        <div className="col-xl-6 wow fadeInUp" data-wow-delay=".2s" style={{visibility: 'visible', animationDelay: '0.2s', animationName: 'none'}}>
            <div className="service-box-items">
                <div className="service-image">
                    <img src="/xolo-art.png" alt="Xolo NFT Art" />
                </div>
                <div className="service-content">
                    <h3>
                        10,001 Unique
                        NFT Masterpieces
                    </h3>
                    <p>
                        A meaningful collection featuring **10,001 unique Xolo NFTs** with a combination of 7 distinct traits, capturing the sacred canine's spirit.
                    </p>
                    <a className="link-btn" href="/service">view the traits <i className="fa-sharp fa-regular fa-arrow-up-right"></i></a>
                </div>
            </div>
        </div>
        <div className="col-xl-6 wow fadeInUp" data-wow-delay=".4s" style={{visibility: 'visible', animationDelay: '0.4s', animationName: 'none'}}>
            <div className="service-box-items">
                <div className="service-image">
                    <img src="/xrpl-blockchain.png" alt="XRPL Blockchain" />
                </div>
                <div className="service-content">
                    <h3>
                        Built on the
                        XRP Ledger (XRPL)
                    </h3>
                    <p>
                        Hosted on the **XRPL** for its high speed payments, low-cost transactions, and eco-friendly design. The visionary artist bringing the 10,001 Xolo NFT's to life.
                    </p>
                    <a className="link-btn" href="/service">learn about XRPL <i className="fa-sharp fa-regular fa-arrow-up-right"></i></a>
                </div>
            </div>
        </div>
        <div className="col-xl-6 wow fadeInUp" data-wow-delay=".6s" style={{visibility: 'visible', animationDelay: '0.6s', animationName: 'none'}}>
            <div className="service-box-items">
                <div className="service-image">
                    <img src="/xolo-travel.png" alt="Xolo Travel Vision" />
                </div>
                <div className="service-content">
                    <h3>
                        Decentralized Travel
                        Vision
                    </h3>
                    <p>
                        Our long-term goal: a platform for holders to explore the world through unique, **wallet-to-wallet** travel experiences on the XRPL.
                    </p>
                    <a className="link-btn" href="/service">read the roadmap <i className="fa-sharp fa-regular fa-arrow-up-right"></i></a>
                </div>
            </div>
        </div>
        <div className="col-xl-6 wow fadeInUp" data-wow-delay=".8s" style={{visibility: 'visible', animationDelay: '0.8s', animationName: 'none'}}>
            <div className="service-box-items mb-0">
                <div className="service-image">
                    <img src="/xrp-cafe-mint.png" alt="XRP Cafe Mint" />
                </div>
                <div className="service-content">
                    <h3>
                        Upcoming Mint on
                        xrp.cafe
                    </h3>
                    <p>
                        Prepare your **Joey Wallet** and **20 XRP minimum reserve** for the meaningful minting experience on the premier XRPL NFT marketplace.
                    </p>
                    <a className="link-btn" href="/service">get prepared <i className="fa-sharp fa-regular fa-arrow-up-right"></i></a>
                </div>
            </div>
        </div>
    </div>
</div>
</section>

<section className="project-section fix section-padding section-bg bg-cover" style={{backgroundImage: "url('/line-shape.png')"}}>
<div className="color-bg">
    <img src="/color-bg.png" alt="img" />
</div>
<div className="project-wrapper">
    <h2 className="project-title text-center wow fadeInUp" data-wow-delay=".3s" style={{visibility: 'visible', animationDelay: '0.3s', animationName: 'none'}}>
        The Xolo's <br /> <img src="/has.png" alt="img" /> <span>Legacy</span>
    </h2>
    <div className="row align-items-center">
        <div className="col-lg-6 wow fadeInUp" data-wow-delay=".3s" style={{visibility: 'visible', animationDelay: '0.3s', animationName: 'none'}}>
            <div className="project-image">
                <img src="/01.jpg" alt="Ancient Xolo Sculpture" />
            </div>
        </div>
        <div className="col-lg-6 wow fadeInUp" data-wow-delay=".5s" style={{visibility: 'visible', animationDelay: '0.5s', animationName: 'none'}}>
            <div className="project-content">
                <span>Ancient Mesoamerica</span>
                <h3>
                    <a href="project-details.html">
                        A Sacred <br />
                        Heritage
                    </a>
                </h3>
                <p>
                    Dating back over **3,000 years**, the Xolo is a living symbol of Mesoamerican heritage, revered as a spiritual guide to **Mictlan**, the Aztec afterlife.
                </p>
                <a href="project-details.html" className="theme-btn">learn history <i className="fa-sharp fa-regular fa-arrow-up-right"></i></a>
            </div>
        </div>

        <div className="col-lg-6 wow fadeInUp" data-wow-delay=".3s" style={{visibility: 'visible', animationDelay: '0.3s', animationName: 'none'}}>
            <div className="project-content">
                <span>The Team</span>
                <h3>
                    <a href="project-details.html">
                        RedShadow &amp; <br />
                        Cryptonite
                    </a>
                </h3>
                <p>
                    **Cryptonite**, the global explorer and XRPL enthusiast, partnered with **RedShadow**, the visionary artist, to bring the 10,001 Xolo NFTs to life.
                </p>
                <a href="project-details.html" className="theme-btn">meet the team <i className="fa-sharp fa-regular fa-arrow-up-right"></i></a>
            </div>
        </div>
        <div className="col-lg-6 wow fadeInUp" data-wow-delay=".5s" style={{visibility: 'visible', animationDelay: '0.5s', animationName: 'none'}}>
            <div className="project-image style-2">
                <img src="/02.jpg" alt="Artist and Creator" />
            </div>
        </div>
        <div className="col-lg-6 wow fadeInUp" data-wow-delay=".3s" style={{visibility: 'visible', animationDelay: '0.3s', animationName: 'none'}}>
            <div className="project-image">
                <img src="/03.jpg" alt="Map and travel icons" />
            </div>
        </div>
        <div className="col-lg-6 wow fadeInUp" data-wow-delay=".5s" style={{visibility: 'visible', animationDelay: '0.5s', animationName: 'none'}}>
            <div className="project-content">
                <span>Future Utility</span>
                <h3>
                    <a href="project-details.html">
                        Fostering Global <br />
                        Travel &amp; Connection
                    </a>
                </h3>
                <p>
                    The collection's long-term vision is to build a decentralized platform for Xolo NFT holders to enable unique **wallet-to-wallet** travel experiences on the XRPL.
                </p>
                <a href="project-details.html" className="theme-btn">view the vision <i className="fa-sharp fa-regular fa-arrow-up-right"></i></a>
            </div>
        </div>
    </div>
</div>
</section>

<section className="faq-section fix section-padding">
<div className="color-bg">
    <img src="/color-bg.png" alt="img" />
</div>
<div className="container">
    <div className="faq-wrapper">
        <div className="row g-4">
            <div className="col-lg-6">
                <div className="faq-image-items">
                    <div className="faq-image wow fadeInUp" data-wow-delay=".3s" style={{visibility: 'visible', animationDelay: '0.3s', animationName: 'none'}}>
                        <img src="/xolo-nft-showcase-01.png" alt="Xolo NFT Art" />
                    </div>
                    
                </div>
            </div>
            <div className="col-lg-6">
                <div className="faq-content">
                    <div className="section-title">
                        <h6>
                            <img src="star.png" alt="img" /> The Xoloitzquintle Collection
                        </h6>
                        <h2>
                            Key Questions About <br />
                            <span>The **NFT** Project</span>
                        </h2>
                    </div>
                    <div className="faq-accordion">
                        <div className="accordion" id="accordion">
                            <div className="accordion-item wow fadeInUp" data-wow-delay=".2s" style={{visibility: 'visible', animationDelay: '0.2s', animationName: 'none'}}>
                                <h5 className="accordion-header">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq2" aria-expanded="false" aria-controls="faq2">
                                        What is the Xoloitzquintle?
                                    </button>
                                </h5>
                                <div id="faq2" className="accordion-collapse collapse" data-bs-parent="#accordion">
                                    <div className="accordion-body">
                                        The **Xoloitzquintle** (*Shō Lō eats queent lay*) is an ancient dog breed, revered for **3,000 years** as a spiritual guide and companion in Mesoamerican cultures, particularly tied to the Aztec afterlife (Mictlan).
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item wow fadeInUp" data-wow-delay=".4s" style={{visibility: 'visible', animationDelay: '0.4s', animationName: 'none'}}>
                                <h5 className="accordion-header">
                                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#faq1" aria-expanded="true" aria-controls="faq1">
                                        when and where can I mint a Xolo NFT?
                                    </button>
                                </h5>
                                <div id="faq1" className="accordion-collapse show" data-bs-parent="#accordion">
                                    <div className="accordion-body">
                                        The mint is coming soon to **[xrp.cafe](https://xrp.cafe/)**, the premier marketplace for XRPL-based NFTs. The collection size is **10,001 unique Xolos**, built on the **XRP Ledger (XRPL)**.
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item wow fadeInUp" data-wow-delay=".6s" style={{visibility: 'visible', animationDelay: '0.6s', animationName: 'none'}}>
                                <h5 className="accordion-header">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq3" aria-expanded="false" aria-controls="faq3">
                                        What wallet and funds do I need to prepare?
                                    </button>
                                </h5>
                                <div id="faq3" className="accordion-collapse collapse" data-bs-parent="#accordion">
                                    <div className="accordion-body">
                                        You will need an XRPL-compatible wallet like **Joey Wallet**. Ensure your wallet is funded with a minimum of **20 XRP** to cover the XRPL's wallet reserve and transaction fees.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</section>


{/* Paralax Section Start */}
<div className="paralax-section fix section-padding pt-0">
    <div className="paralax-image">
        <img src="paralax-bg.png" alt="img" />
    </div>
</div>


{/* MAPBOX */}
    <div style={{width: '90%', height: '500px', borderRadius: '0%', overflow: 'visible', margin: '20px auto'}}>
        <iframe width="100%" height="100%" src="https://api.mapbox.com/styles/v1/danish44/cmhytc1wx002t01r0fiou0755.html?title=false&amp;access_token=pk.eyJ1IjoiZGFuaXNoNDQiLCJhIjoiY21oeXQ1ZHl5MDg0ajJpcXpoMHU4bDh3YyJ9.meXTImltU7jzZYdaeE5tsw&amp;zoomwheel=true#2/38/-34" title="Untitled" style={{border: 'none'}}>
        </iframe>
    </div>

<section className="message-section fix section-bg section-padding">
    <div className="bg-shape">
        <img src="/bg-shape.png" alt="shape-img"/>
    </div>
    <div className="container">
        <div className="message-items">
            <h2 className="wow fadeInUp" data-wow-delay=".3s" style={{visibility: 'visible', animationDelay: '0.3s', animationName: 'none'}}>
                  
                <span> Questions, Comments, <b>Concerns Message</b></span>
            </h2>
            <div className="circle-bg wow fadeInUp" data-wow-delay=".3s" style={{visibility: 'visible', animationDelay: '0.3s', animationName: 'none'}}>
                <img src="circle-bg.png" alt="img" />
            </div>
            <div className="lets-talk-items wow fadeInUp" data-wow-delay=".5s" style={{visibility: 'visible', animationDelay: '0.5s', animationName: 'none'}}>
                <a className="lets-circle" href="/contact">
                    <i className="fa-sharp fa-regular fa-arrow-up-right"></i> <br />
                    Let’s talk
                </a>
                <p>
                    Duise sagittis accumsan magna on adipiscing laoreet ultrices magna consectetuer eiaculis rutrum
                    morbie habitasse orci libero porttitor scelerisque acid vivamus molestie mollise
                </p>
            </div>
        </div>
    </div>
    <div className="brand-section section-padding pb-0">
        <div className="container">
            <div className="swiper brand-slider swiper-initialized swiper-horizontal swiper-pointer-events swiper-backface-hidden">
                <div className="swiper-wrapper" id="swiper-wrapper-ec779da8a244910fb" aria-live="off" style={{transitionDuration: '2000ms', transform: 'translate3d(-1780px, 0px, 0px)'}}><div className="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-active" role="group" aria-label="5 / 5" data-swiper-slide-index="4" style={{width: '326px', marginRight: '30px'}}>
                        <div className="brand-image text-center">
                            <img src="05.png" alt="img" />
                        </div>
                    </div>
                    <div className="swiper-slide swiper-slide-duplicate-next" role="group" aria-label="1 / 5" data-swiper-slide-index="0" style={{width: '326px', marginRight: '30px'}}>
                        <div className="brand-image text-center">
                            <img src="01.png" alt="img" />
                        </div>
                    </div>
                    <div className="swiper-slide" role="group" aria-label="2 / 5" data-swiper-slide-index="1" style={{width: '326px', marginRight: '30px'}}>
                        <div className="brand-image text-center">
                            <img src="02.png" alt="img" />
                        </div>
                    </div>
                    <div className="swiper-slide" role="group" aria-label="3 / 5" data-swiper-slide-index="2" style={{width: '326px', marginRight: '30px'}}>
                        <div className="brand-image text-center">
                            <img src="03.png" alt="img" />
                        </div>
                    </div>
                    <div className="swiper-slide swiper-slide-prev" role="group" aria-label="4 / 5" data-swiper-slide-index="3" style={{width: '326px', marginRight: '30px'}}>
                        <div className="brand-image text-center">
                            <img src="04.png" alt="img" />
                        </div>
                    </div>
                    <div className="swiper-slide swiper-slide-active" role="group" aria-label="5 / 5" data-swiper-slide-index="4" style={{width: '326px', marginRight: '30px'}}>
                        <div className="brand-image text-center">
                            <img src="05.png" alt="img" />
                        </div>
                    </div>
                <div className="swiper-slide swiper-slide-duplicate swiper-slide-next" role="group" aria-label="1 / 5" data-swiper-slide-index="0" style={{width: '326px', marginRight: '30px'}}>
                        <div className="brand-image text-center">
                            <img src="01.png" alt="img" />
                        </div>
                    </div></div>
            <span className="swiper-notification" aria-live="assertive" aria-atomic="true"></span></div>
        </div>
    </div>
</section>



<footer className="footer-section footer-bg">
<div className="container">
    <div className="footer-widgets-wrapper">
        <div className="row">
            <div className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".2s" style={{visibility: 'visible', animationDelay: '0.2s', animationName: 'none'}}>
                <div className="single-footer-widget">
                    <div className="footer-content">
                        <h3 className="mb-3">
                            Join the Xolo Dojo &amp;<br />
                            Stay Updated
                        </h3>
                        <p>Be the first to know about the mint and community news.</p>
                        <div className="footer-input">
                            <input type="email" id="email" placeholder="Enter email..." />
                            <button className="newsletter-btn" type="submit">
                                <img src="circle-check.png" alt="Subscribe Check Icon" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-xl-2 col-lg-4 col-md-6 ps-lg-5 wow fadeInUp" data-wow-delay=".4s" style={{visibility: 'visible', animationDelay: '0.4s', animationName: 'none'}}>
                <div className="single-footer-widget">
                    <div className="widget-head">
                        <h3>The Project</h3>
                    </div>
                    <ul className="list-items">
                        <li>
                            <a href="/about">
                                The Sacred Xolo
                            </a>
                        </li>
                        <li>
                            <a href="xolodojo.io">
                                Xolo Dojo (Community)
                            </a>
                        </li>
                        <li>
                            <a href="vision.html">
                                Decentralized Travel Vision
                            </a>
                        </li>
                        <li>
                            <a href="redshadow.html">
                                Meet the Artist
                            </a>
                        </li>
                        <li>
                            <a href="cryptonite.html">
                                Meet the Creator
                            </a>
                        </li>
                        <li>
                            <a href="terms.html">
                                Terms &amp; Conditions
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 ps-lg-5 wow fadeInUp" data-wow-delay=".6s" style={{visibility: 'visible', animationDelay: '0.6s', animationName: 'none'}}>
                <div className="single-footer-widget">
                    <div className="widget-head">
                        <h3>XRPL Resources</h3>
                    </div>
                    <ul className="list-items">
                        <li>
                            <a href="https://xrp.cafe/">
                                xrp.cafe Marketplace
                            </a>
                        </li>
                        <li>
                            <a href="https://joeywallet.app/">
                                Joey Wallet
                            </a>
                        </li>
                        <li>
                            <a href="https://xrpscan.com/">
                                XRPSCAN Explorer
                            </a>
                        </li>
                        <li>
                            <a href="https://www.xrptoolkit.com/">
                                XRP Toolkit
                            </a>
                        </li>
                        <li>
                            <a href="https://xrpl.org/">
                                Official XRPL Site
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 ps-lg-3 wow fadeInUp" data-wow-delay=".8s" style={{visibility: 'visible', animationDelay: '0.8s', animationName: 'none'}}>
                <div className="single-footer-widget">
                    <div className="widget-head">
                        <h3>Xolo Community Art</h3>
                    </div>
                    <div className="row g-3">
                        <div className="col-md-6 col-sm-4 col-4">
                            <div className="footer-thumb">
                                <img src="footer/gallery-1.jpg" alt="Xolo NFT Art 1" />
                                <a className="icon" href="/">
                                    <i className="fa-brands fa-instagram"></i>
                                </a>
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-4 col-4">
                            <div className="footer-thumb">
                                <img src="footer/gallery-2.jpg" alt="Xolo NFT Art 2" />
                                <a className="icon" href="/">
                                    <i className="fa-brands fa-instagram"></i>
                                </a>
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-4 col-4">
                            <div className="footer-thumb">
                                <img src="footer/gallery-3.jpg" alt="Xolo NFT Art 3" />
                                <a className="icon" href="/">
                                    <i className="fa-brands fa-instagram"></i>
                                </a>
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-4 col-4">
                            <div className="footer-thumb">
                                <img src="footer/gallery-4.jpg" alt="Xolo NFT Art 4" />
                                <a className="icon" href="/">
                                    <i className="fa-brands fa-instagram"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<div className="footer-bottom">
    <div className="container">
        <div className="footer-bottom-wrapper">
            <div className="logo-img wow fadeInUp" data-wow-delay=".3s" style={{visibility: 'visible', animationDelay: '0.3s', animationName: 'none'}}>
                <a href="/">
                    <img src="xolo-logo-white.svg" alt="The Xoloitzquintle Collection Logo" />
                </a>
            </div>
            <p className="wow fadeInUp" data-wow-delay=".5s" style={{visibility: 'visible', animationDelay: '0.5s', animationName: 'none'}}>The Xoloitzquintle Collection © 2024. All Rights Reserved.</p>
            <div className="social-icon wow fadeInUp" data-wow-delay=".7s" style={{visibility: 'visible', animationDelay: '0.7s', animationName: 'none'}}>
                <a href="#"><i className="fa-brands fa-x-twitter"></i></a>
                <a href="#"><i className="fa-brands fa-discord"></i></a>
                <a href="#"><i className="fa-brands fa-instagram"></i></a>
                <a href="#"><i className="fa-brands fa-reddit-alien"></i></a>
            </div>
        </div>
    </div>
</div>
</footer>

{/* <script src="assets/js/jquery-3.7.1.min.js"></script>
<script src="assets/js/viewport.jquery.js"></script>
<script src="assets/js/bootstrap.bundle.min.js"></script>
<script src="assets/js/jquery.nice-select.min.js"></script>
<script src="assets/js/jquery.waypoints.js"></script>
<script src="assets/js/jquery.counterup.min.js"></script>
<script src="assets/js/swiper-bundle.min.js"></script>
<script src="assets/js/jquery.meanmenu.min.js"></script>
<script src="assets/js/jquery.magnific-popup.min.js"></script>
<script src="assets/js/wow.min.js"></script>
<script src="assets/js/main.js"></script> */}


</>
  )
}

export default App
