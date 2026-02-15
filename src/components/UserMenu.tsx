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
                className="bg-transparent border border-white/30 text-white px-4 py-2 rounded cursor-pointer text-sm transition-all duration-300 ease-in-out hover:border-white/60 hover:bg-white/10"
            >
                Login
            </button>
        );
    }

    return (
        <div ref={dropdownRef} className="relative">
            <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="w-10 h-10 rounded-full border-2 border-white/30 bg-gradient-to-br from-indigo-500 to-purple-600 text-white text-lg font-bold cursor-pointer flex items-center justify-center transition-all duration-300 ease-in-out p-0 hover:border-white/60 hover:scale-105"
                aria-label="User menu"
            >
                {user?.picture ? (
                    <img
                        src={user.picture}
                        alt={user.name || 'User'}
                        className="w-full h-full rounded-full object-cover"
                    />
                ) : (
                    getUserInitial()
                )}
            </button>

            {isDropdownOpen && (
                <div className="absolute top-full mt-2 right-0 bg-[#1a1a1a] border border-white/10 rounded-lg min-w-[200px] shadow-lg z-[1000] overflow-hidden">
                    <div className="px-4 py-3 border-b border-white/10">
                        <div className="text-white text-sm font-medium mb-1">
                            {user?.name || 'User'}
                        </div>
                        {/* <div className="text-white/60 text-xs">
                            {user?.email}
                        </div> */}
                    </div>
                    <Link
                        to="/profile"
                        onClick={() => setIsDropdownOpen(false)}
                        className="flex items-center gap-3 px-4 py-3 text-white no-underline text-sm transition-colors duration-200 hover:bg-white/10"
                    >
                        <FontAwesomeIcon icon={faUser} />
                        <span>Profile</span>
                    </Link>
                    <button
                        onClick={handleLogout}
                        className="flex items-center gap-3 w-full px-4 py-3 bg-transparent border-0 border-t border-white/10 text-white text-left cursor-pointer text-sm transition-colors duration-200 hover:bg-white/10"
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
