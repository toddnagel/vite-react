import { ReactNode } from 'react';
import { useFadeInUp } from '../hooks/useFadeInUp';

interface FadeInUpProps {
    children: ReactNode;
    delay?: number;
    className?: string;
    as?: keyof JSX.IntrinsicElements;
}

function FadeInUp({
    children,
    delay = 0,
    className = '',
    as: Component = 'div',
}: FadeInUpProps) {
    const animation = useFadeInUp<HTMLElement>({ delay });
    const combinedClassName = `${className} ${animation.className}`.trim();

    return (
        <Component
            ref={animation.ref}
            className={combinedClassName}
            style={animation.style}
        >
            {children}
        </Component>
    );
}

export default FadeInUp;
