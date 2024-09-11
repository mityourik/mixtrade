import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const useParallaxEffect = () => {
  useEffect(() => {
    gsap.to('.guarantee__image', {
      yPercent: 20,
      ease: 'none',
      scrollTrigger: {
        trigger: '.guarantee',
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
    });

    gsap.to('.guarantee', {
      backgroundPosition: '50% 100px',
      ease: 'none',
      scrollTrigger: {
        trigger: '.guarantee',
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
    });
  }, []);
};

export default useParallaxEffect;