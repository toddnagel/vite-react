import { ReactNode, ElementType } from 'react';
import { useFadeInUp } from '../hooks/useFadeInUp';

interface FadeInUpProps {
    children: ReactNode;
    delay?: number;
    className?: string;
    as?: ElementType;
}

function FadeInUp({
    children,
    delay = 0,
    className = '',
    as: Component = 'div',
}: FadeInUpProps) {
    const animation = useFadeInUp<HTMLElement>({ delay });
    const combinedClassName = `${className} ${animation.className}`.trim();

    // Type assertion needed because Component could be any element type
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
