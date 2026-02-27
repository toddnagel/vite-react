import { ReactNode } from 'react';

interface ButtonProps {
    title?: string;
    children: ReactNode;
    onClick?: () => void;
    disabled?: boolean;
    type?: 'button' | 'submit' | 'reset';
    icon?: ReactNode;
    className?: string;
}

export default function Button({
    title = '',
    children,
    onClick,
    disabled = false,
    type = 'button',
    icon,
    className = '',
}: ButtonProps) {
    // Base classes that always apply
    const baseClasses = 'px-6 py-2 text-white rounded-lg transition-colors font-medium cursor-pointer flex items-center justify-center gap-2 disabled:cursor-not-allowed';

    // Check if className has custom background colors
    const hasCustomBg = className.includes('bg-');

    // Default styles (only if no custom bg in className)
    const defaultStyle = !hasCustomBg ? {
        backgroundColor: '#573583',
    } : {};

    const defaultBgClasses = !hasCustomBg ? 'hover:bg-[#6d4a9f] active:bg-[#4a2d6b] disabled:bg-gray-500' : '';

    // Combine all classes
    const allClasses = `${baseClasses} ${defaultBgClasses} ${className}`.trim().replace(/\s+/g, ' ');

    return (
        <button
            title={title}
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={allClasses}
            style={defaultStyle}
            onMouseEnter={(e) => {
                if (!hasCustomBg && !disabled) {
                    e.currentTarget.style.backgroundColor = '#6d4a9f';
                }
            }}
            onMouseLeave={(e) => {
                if (!hasCustomBg && !disabled) {
                    e.currentTarget.style.backgroundColor = '#573583';
                }
            }}
            onMouseDown={(e) => {
                if (!hasCustomBg && !disabled) {
                    e.currentTarget.style.backgroundColor = '#4a2d6b';
                }
            }}
            onMouseUp={(e) => {
                if (!hasCustomBg && !disabled) {
                    e.currentTarget.style.backgroundColor = '#573583';
                }
            }}
        >
            {icon && <span className="flex items-center">{icon}</span>}
            <span>{children}</span>
        </button>
    );
}
