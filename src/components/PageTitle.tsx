import { useFadeInUp } from '../hooks/useFadeInUp';

interface PageTitleProps {
    title: string;
    className?: string;
    alt?: string;
    animate?: boolean;
    delay?: number;
    iconType?: 'star' | 'asterisk' | 'none';
    iconCount?: number; // Number of star icons (default: 1, for asterisk always 1)
    centered?: boolean; // Whether text should be centered
    inlineIcon?: boolean; // For asterisk, whether it should be inline with text
}

function PageTitle({
    title,
    className = '',
    alt = 'img',
    animate = false,
    delay = 0,
    iconType = 'star',
    iconCount = 1,
    centered = false,
    inlineIcon = false,
}: PageTitleProps) {
    const animation = animate ? useFadeInUp<HTMLHeadingElement>({ delay }) : null;

    // For inline asterisk, split the title and insert the icon
    if (inlineIcon && iconType === 'asterisk') {
        const parts = title.split('*');
        if (parts.length === 2) {
            return (
                <h6
                    ref={animation?.ref}
                    className={`${className} ${animation?.className || ''} text-sm md:text-base font-medium text-gray-300 uppercase tracking-wider mb-2 ${centered ? 'text-center' : ''}`}
                    style={animation?.style}
                >
                    <span className="inline-flex items-center gap-1">
                        {parts[0]}
                        <img src="/has.png" alt={alt} className="inline-block w-4 h-4 md:w-5 md:h-5" />
                        {parts[1]}
                    </span>
                </h6>
            );
        }
    }

    // For star icons above/left of text
    if (iconType === 'star' && iconCount > 0) {
        const stars = Array.from({ length: iconCount }, (_, i) => (
            <img 
                key={i} 
                src="/star.png" 
                alt={alt} 
                className="w-3 h-3 md:w-4 md:h-4"
            />
        ));

        return (
            <h6
                ref={animation?.ref}
                className={`${className} ${animation?.className || ''} text-sm md:text-base font-medium text-gray-300 uppercase tracking-wider mb-2 ${centered ? 'justify-center' : 'justify-start'} flex items-center gap-2 flex-wrap`}
                style={animation?.style}
            >
                <span className="flex items-center gap-1">
                    {stars}
                </span>
                <span>{title}</span>
            </h6>
        );
    }

    // For asterisk to the left (not inline)
    if (iconType === 'asterisk') {
        return (
            <h6
                ref={animation?.ref}
                className={`${className} ${animation?.className || ''} text-sm md:text-base font-medium text-gray-300 uppercase tracking-wider mb-2 ${centered ? 'justify-center' : 'justify-start'} flex items-center gap-2 flex-wrap`}
                style={animation?.style}
            >
                <img src="/has.png" alt={alt} className="w-4 h-4 md:w-5 md:h-5" />
                <span>{title}</span>
            </h6>
        );
    }

    // No icon
    return (
        <h6
            ref={animation?.ref}
            className={`${className} ${animation?.className || ''} text-sm md:text-base font-medium text-gray-300 uppercase tracking-wider mb-2 ${centered ? 'text-center' : ''}`}
            style={animation?.style}
        >
            {title}
        </h6>
    );
}

export default PageTitle;
