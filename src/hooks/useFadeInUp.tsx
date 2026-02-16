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
    const hasAnimatedRef = useRef(false);
    const currentTabIdRef = useRef<string | null>(null);
    const triggerTimeoutRef = useRef<number | null>(null);

    useEffect(() => {
        const element = elementRef.current;
        if (!element) return;

        // Get unique identifier for the current tab (if in a tab)
        const getTabId = () => {
            const tabPane = element.closest('.tab-pane');
            if (!tabPane) return null;
            const tabId = tabPane.id || tabPane.getAttribute('id') ||
                Array.from(document.querySelectorAll('.tab-pane')).indexOf(tabPane).toString();
            return tabId;
        };

        // Function to check if element should be visible and trigger animation
        const checkAndTrigger = () => {
            const tabPane = element.closest('.tab-pane');
            const isInActiveTab = tabPane
                ? tabPane.classList.contains('active') &&
                tabPane.classList.contains('show')
                : true;

            const tabId = getTabId();

            // If element is in a tab
            if (tabPane) {
                // If tab is not active, reset state
                if (!isInActiveTab) {
                    setIsVisible(false);
                    hasAnimatedRef.current = false;
                    currentTabIdRef.current = null;
                    return;
                }

                // If tab is active, check if we've already animated for this tab
                if (isInActiveTab) {
                    // If this is a different tab than last time, reset animation state
                    if (currentTabIdRef.current !== tabId) {
                        setIsVisible(false);
                        hasAnimatedRef.current = false;
                        currentTabIdRef.current = tabId;
                    }

                    // Trigger animation if we haven't animated yet for this tab
                    if (!hasAnimatedRef.current) {
                        // Use requestAnimationFrame to ensure DOM is ready
                        requestAnimationFrame(() => {
                            setIsVisible(true);
                            hasAnimatedRef.current = true;
                        });
                    }
                    return;
                }
            }

            // For elements not in tabs, check if in viewport
            if (!tabPane) {
                const rect = element.getBoundingClientRect();
                const isInViewport =
                    rect.top < window.innerHeight &&
                    rect.bottom > 0 &&
                    rect.left < window.innerWidth &&
                    rect.right > 0;

                if (isInViewport && !hasAnimatedRef.current) {
                    setIsVisible(true);
                    hasAnimatedRef.current = true;
                }
            }
        };

        // Initial check
        checkAndTrigger();

        // Intersection Observer for scroll-based detection (only for non-tab elements)
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    const tabPane = entry.target.closest('.tab-pane');
                    // Only use intersection observer for elements not in tabs
                    if (!tabPane && entry.isIntersecting) {
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
                // Clear any pending timeouts
                if (triggerTimeoutRef.current) {
                    clearTimeout(triggerTimeoutRef.current);
                }

                // Debounce the check to avoid multiple rapid calls
                triggerTimeoutRef.current = window.setTimeout(() => {
                    checkAndTrigger();
                }, 10);
            });

            mutationObserver.observe(tabPane, {
                attributes: true,
                attributeFilter: ['class'],
            });
        }

        // Listen for Bootstrap tab shown event
        const handleTabShown = () => {
            // Clear any pending timeouts
            if (triggerTimeoutRef.current) {
                clearTimeout(triggerTimeoutRef.current);
            }

            // Small delay to ensure DOM is updated
            triggerTimeoutRef.current = window.setTimeout(() => {
                checkAndTrigger();
            }, 10);
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
            if (triggerTimeoutRef.current) {
                clearTimeout(triggerTimeoutRef.current);
            }
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
