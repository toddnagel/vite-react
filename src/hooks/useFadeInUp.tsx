import { useEffect, useRef, useState, RefObject } from 'react';

interface UseFadeInUpOptions {
    delay?: number; // in seconds (e.g., 0.3 for 300ms)
    threshold?: number; // intersection observer threshold (0-1)
    rootMargin?: string; // e.g., "0px" or "100px"
}

export function useFadeInUp<T extends HTMLElement = HTMLElement>(
    options: UseFadeInUpOptions = {}
) {
    const { delay = 0, threshold = 0.1, rootMargin = '0px' } = options;
    const [isVisible, setIsVisible] = useState(false);
    const elementRef = useRef<T>(null);

    useEffect(() => {
        const element = elementRef.current;
        if (!element) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                        // Optionally disconnect after first trigger
                        observer.disconnect();
                    }
                });
            },
            {
                threshold,
                rootMargin,
            }
        );

        observer.observe(element);

        return () => {
            observer.disconnect();
        };
    }, [threshold, rootMargin]);

    return {
        ref: elementRef as RefObject<T>,
        className: isVisible ? 'fade-in-up-visible' : 'fade-in-up',
        style: {
            animationDelay: `${delay}s`,
        },
    };
}
