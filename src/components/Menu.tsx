import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

interface MenuProps {
    onLinkClick?: () => void;
    variant?: 'desktop' | 'mobile-toggle';
    isMobileMenuOpen?: boolean;
    setIsMobileMenuOpen?: React.Dispatch<React.SetStateAction<boolean>>;
}

function Menu({
    onLinkClick,
    variant = 'desktop',
    isMobileMenuOpen: externalIsOpen,
    setIsMobileMenuOpen: externalSetOpen,
}: MenuProps) {
    const [internalIsOpen, setInternalIsOpen] = useState(false);
    const location = useLocation();

    const isMobileMenuOpen =
        externalIsOpen !== undefined ? externalIsOpen : internalIsOpen;
    const setIsMobileMenuOpen =
        externalSetOpen !== undefined ? externalSetOpen : setInternalIsOpen;

    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [location.pathname]);

    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [isMobileMenuOpen]);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
        onLinkClick?.();
    };

    const menuItems = [
        { path: '/', label: 'Home' },
        { path: '/about', label: 'About Us' },
        { path: '/faq', label: 'FAQ' },
        { path: '/contact', label: 'Contact' },
    ];

    if (variant === 'mobile-toggle') {
        return (
            <div className="header__hamburger" style={{ display: 'block' }}>
                <style>{`
                    @media (min-width: 768px) {
                        .header__hamburger {
                            display: none !important;
                        }
                    }
                `}</style>
                <button
                    onClick={toggleMobileMenu}
                    aria-label="Toggle mobile menu"
                    style={{ color: 'var(--white)' }}
                >
                    <FontAwesomeIcon icon={isMobileMenuOpen ? faTimes : faBars} />
                </button>
            </div>
        );
    }

    // Desktop menu variant
    return (
        <>
            {/* Desktop Menu - Only show on desktop screens */}
            <nav className="main-menu desktop-menu-wrapper">
                <ul>
                    {menuItems.map((item) => (
                        <li key={item.path}>
                            <NavLink
                                to={item.path}
                                className={({ isActive }) =>
                                    `inline-block text-lg font-medium py-5 capitalize transition-all duration-400 ease-in-out no-underline ${isActive ? 'active' : ''
                                    }`
                                }
                                style={{ color: 'var(--white)' }}
                            >
                                {item.label}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </nav>


            {variant === 'desktop' && (
                <>
                    {isMobileMenuOpen && (
                        <div
                            className="mobile-menu-overlay d-md-none"
                            onClick={closeMobileMenu}
                            aria-hidden="true"
                        />
                    )}

                    <div
                        className={`mobile-menu-drawer d-md-none ${isMobileMenuOpen ? 'mobile-menu-open' : ''}`}
                    >
                        <div className="mobile-menu-drawer-inner">
                            <div className="mobile-menu-header">
                                <NavLink to="/" onClick={closeMobileMenu}>
                                    <img
                                        src="/white-logo.png"
                                        alt="logo-img"
                                        className="mobile-menu-logo"
                                    />
                                </NavLink>
                                <button
                                    onClick={closeMobileMenu}
                                    className="mobile-menu-close-btn"
                                    aria-label="Close menu"
                                >
                                    <FontAwesomeIcon icon={faTimes} />
                                </button>
                            </div>

                            {/* Mobile Menu Items */}
                            <nav className="mobile-menu-nav">
                                <ul>
                                    {menuItems.map((item) => (
                                        <li key={item.path}>
                                            <NavLink
                                                to={item.path}
                                                onClick={closeMobileMenu}
                                                className={({ isActive }) =>
                                                    isActive ? 'active' : ''
                                                }
                                            >
                                                {item.label}
                                            </NavLink>
                                        </li>
                                    ))}
                                </ul>
                            </nav>
                        </div>
                    </div>
                </>
            )}
        </>
    );
}

export default Menu;
