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

        // Function to check if element should be visible and trigger animation
        const checkAndTrigger = () => {
            const tabPane = element.closest('.tab-pane');
            const isInActiveTab = tabPane
                ? tabPane.classList.contains('active') &&
                  tabPane.classList.contains('show')
                : true;

            // If element is in a tab, only animate when tab is active
            if (tabPane && !isInActiveTab) {
                setIsVisible(false);
                return;
            }

            // For elements in active tabs, always trigger animation
            // (they're visible when tab is active, even if not scrolled into view)
            if (tabPane && isInActiveTab) {
                setIsVisible(true);
                return;
            }

            // For elements not in tabs, check if in viewport
            const rect = element.getBoundingClientRect();
            const isInViewport =
                rect.top < window.innerHeight &&
                rect.bottom > 0 &&
                rect.left < window.innerWidth &&
                rect.right > 0;

            if (isInViewport) {
                setIsVisible(true);
            }
        };

        // Initial check
        checkAndTrigger();

        // Intersection Observer for scroll-based detection
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        checkAndTrigger();
                    }
                });
            },
            {
                threshold,
                rootMargin,
            }
        );

        observer.observe(element);

        // MutationObserver to watch for tab changes
        const tabPane = element.closest('.tab-pane');
        let mutationObserver: MutationObserver | null = null;

        if (tabPane) {
            mutationObserver = new MutationObserver(() => {
                // Reset animation state when tab changes
                setIsVisible(false);
                // Small delay to ensure DOM is updated, then check again
                setTimeout(() => {
                    checkAndTrigger();
                }, 100);
            });

            mutationObserver.observe(tabPane, {
                attributes: true,
                attributeFilter: ['class'],
            });
        }

        // Also listen for Bootstrap tab shown event
        const handleTabShown = () => {
            setTimeout(() => {
                checkAndTrigger();
            }, 100);
        };

        // Listen on the tab pane itself if it exists
        if (tabPane) {
            tabPane.addEventListener('shown.bs.tab', handleTabShown);
        }
        // Also listen globally for any tab shown event
        document.addEventListener('shown.bs.tab', handleTabShown);

        return () => {
            observer.disconnect();
            if (mutationObserver) {
                mutationObserver.disconnect();
            }
            if (tabPane) {
                tabPane.removeEventListener('shown.bs.tab', handleTabShown);
            }
            document.removeEventListener('shown.bs.tab', handleTabShown);
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
