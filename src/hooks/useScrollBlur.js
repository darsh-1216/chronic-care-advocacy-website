import { useEffect, useState, useRef } from 'react';

/**
 * Custom hook to calculate scroll reveal states (blur-to-focus transition)
 * based on element visibility in the viewport.
 */
export function useScrollBlur(threshold = 0.2) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold }
    );

    observer.observe(element);

    const handleScroll = () => {
      if (!element) return;
      const rect = element.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate progress from 0 (below screen) to 1 (center screen)
      const progress = Math.min(
        Math.max((windowHeight - rect.top) / (windowHeight * 0.7), 0),
        1
      );
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, [threshold]);

  // Interpolated inline styles for smooth blur-to-clear transition
  const blurAmount = Math.max(0, (1 - scrollProgress) * 6); // 6px down to 0px
  const opacityAmount = Math.min(1, 0.25 + scrollProgress * 0.75); // 0.25 up to 1
  const translateY = Math.max(0, (1 - scrollProgress) * 20); // 20px down to 0px

  const animatedStyle = {
    filter: `blur(${blurAmount.toFixed(1)}px)`,
    opacity: opacityAmount.toFixed(2),
    transform: `translateY(${translateY.toFixed(1)}px)`,
    transition: 'filter 0.5s ease-out, opacity 0.5s ease-out, transform 0.5s ease-out',
  };

  return { ref, isVisible, scrollProgress, animatedStyle };
}
