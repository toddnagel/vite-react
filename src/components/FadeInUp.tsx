import { ReactNode, ElementType } from 'react';
import { useFadeInUp } from '../hooks/useFadeInUp';

interface FadeInUpProps {
    children: ReactNode;
    delay?: number;
    className?: string;
    as?: ElementType; // Supports: 'div', 'p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'span', etc.
}

function FadeInUp({
    children,
    delay = 0,
    className = '',
    as: Component = 'div',
}: FadeInUpProps) {
    const animation = useFadeInUp<HTMLElement>({ delay });
    const combinedClassName = `${className} ${animation.className}`.trim();

    // Type assertion allows any HTML element type (h1-h6, p, div, span, etc.)
    const ComponentWithRef = Component as any;

    return (
        <ComponentWithRef
            ref={animation.ref}
            className={combinedClassName}
            style={animation.style}
        >
            {children}
        </ComponentWithRef>
    );
}

export default FadeInUp;
