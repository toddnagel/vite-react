import { useEffect, useRef, useState } from 'react';

export function useSectionParallaxOffsets() {
  const sectionRef = useRef<HTMLElement>(null);
  const [bgShapeOffset, setBgShapeOffset] = useState(0);
  const [colorBgOffset, setColorBgOffset] = useState(0);
  const [colorBg2Offset, setColorBg2Offset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (rect.top <= windowHeight && rect.bottom >= 0) {
        const sectionTop = rect.top;
        const sectionHeight = rect.height;
        const scrollProgress = Math.max(
          0,
          (windowHeight - sectionTop) / (windowHeight + sectionHeight)
        );

        setBgShapeOffset(scrollProgress * sectionHeight * 0.2);
        setColorBgOffset(scrollProgress * sectionHeight * 0.3);
        setColorBg2Offset(scrollProgress * sectionHeight * 0.4);
      } else {
        setBgShapeOffset(0);
        setColorBgOffset(0);
        setColorBg2Offset(0);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return {
    sectionRef,
    bgShapeOffset,
    colorBgOffset,
    colorBg2Offset,
  };
}
