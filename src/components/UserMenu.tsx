import { useState, useRef, useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

interface UserMenuProps {
    isSticky?: boolean;
}

function UserMenu({ isSticky = false }: UserMenuProps) {
    const { isAuthenticated, isLoading, user, loginWithRedirect, logout } = useAuth0();
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsDropdownOpen(false);
            }
        };

        if (isDropdownOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isDropdownOpen]);

    const handleLogin = () => {
        // Store returnTo in sessionStorage for redirect after login
        sessionStorage.setItem('auth0_app_state', JSON.stringify({ returnTo: '/profile' }));
        loginWithRedirect({
            appState: {
                returnTo: '/profile',
            },
        });
    };

    const handleLogout = () => {
        logout({
            logoutParams: {
                returnTo: window.location.origin,
            },
        });
        setIsDropdownOpen(false);
    };

    const getUserInitial = () => {
        if (user?.name) {
            return user.name.charAt(0).toUpperCase();
        }
        if (user?.email) {
            return user.email.charAt(0).toUpperCase();
        }
        return 'U';
    };

    if (isLoading) {
        return null;
    }

    if (!isAuthenticated) {
        return (
            <button
                onClick={handleLogin}
                className="px-4 py-2 rounded-md bg-[#1d1d21] text-white border border-[#cfd0d4] hover:bg-black/40 transition-all duration-200"
            >
                Login
            </button>
        );
    }

    return (
        <div ref={dropdownRef} className="relative">
            <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className={`user-menu-avatar transition-all duration-300 flex items-center justify-center rounded-full overflow-hidden ${isSticky ? 'h-12 w-12 text-sm' : 'h-12 w-12 md:h-24 md:w-24 text-base md:text-xl'}`}
                aria-label="User menu"
            >
                {user?.picture ? (
                    <img
                        src={user.picture}
                        alt={user.name || 'User'}
                        className="w-full h-full rounded-full object-cover"
                    />
                ) : (
                    <span className="text-white font-semibold">{getUserInitial()}</span>
                )}
            </button>

            {isDropdownOpen && (
                <div className="user-menu-dropdown">
                    <Link
                        to="/profile"
                        onClick={() => setIsDropdownOpen(false)}
                    >
                        <FontAwesomeIcon icon={faUser} />
                        <span>Profile</span>
                    </Link>
                    <button
                        onClick={handleLogout}
                    >
                        <FontAwesomeIcon icon={faSignOutAlt} />
                        <span>Logout</span>
                    </button>
                </div>
            )}
        </div>
    );
}

export default UserMenu;
