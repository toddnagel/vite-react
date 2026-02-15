import { useState, useRef, useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

function UserMenu() {
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
        loginWithRedirect();
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
                className="user-menu-login-btn"
            >
                Login
            </button>
        );
    }

    return (
        <div ref={dropdownRef} className="relative">
            <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="user-menu-avatar"
                aria-label="User menu"
            >
                {user?.picture ? (
                    <img
                        src={user.picture}
                        alt={user.name || 'User'}
                    />
                ) : (
                    getUserInitial()
                )}
            </button>

            {isDropdownOpen && (
                <div className="user-menu-dropdown">
                    <div>
                        <div>
                            {user?.name || 'User'}
                        </div>
                        <div>
                            {user?.email}
                        </div>
                    </div>
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
