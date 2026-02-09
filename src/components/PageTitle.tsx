import { useFadeInUp } from '../hooks/useFadeInUp';

interface PageTitleProps {
    title: string;
    className?: string;
    alt?: string;
    animate?: boolean;
    delay?: number;
}

function PageTitle({
    title,
    className = '',
    alt = 'img',
    animate = false,
    delay = 0,
}: PageTitleProps) {
    const animation = animate ? useFadeInUp<HTMLHeadingElement>({ delay }) : null;

    return (
        <h6
            ref={animation?.ref}
            className={`${className} ${animation?.className || ''}`}
            style={animation?.style}
        >
            <img src="/star.png" alt={alt} /> {title}
        </h6>
    );
}

export default PageTitle;
