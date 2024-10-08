import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './Equipment.module.scss';
import backgroundVideo from '../../vendor/images/beton_120fps.mp4';

gsap.registerPlugin(ScrollTrigger);

const Equipment: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const hasPlayedRef = useRef<boolean>(false); // Добавлено: флаг для отслеживания воспроизведения

  useEffect(() => {
    const sectionElement = sectionRef.current;
    const textElement = textRef.current;
    const videoElement = videoRef.current;
    const scroller = document.querySelector('.scroll-container');

    if (sectionElement && textElement && scroller) {
      gsap.registerPlugin(ScrollTrigger);

      gsap.set(textElement, { xPercent: 100 });

      gsap.fromTo(
        textElement,
        { xPercent: 100 },
        {
          xPercent: 0,
          ease: 'power2.out',
          duration: 5,
          scrollTrigger: {
            trigger: sectionElement,
            scroller: scroller,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 3,
          },
        }
      );
    }

    if (videoElement && sectionElement && scroller) {
      // Используем Intersection Observer для воспроизведения видео
      const observerOptions = {
        root: scroller as Element,
        threshold: 0.5,
      };

      const observerCallback = (entries: IntersectionObserverEntry[]) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasPlayedRef.current) {
            videoElement.play();
            hasPlayedRef.current = true; // Устанавливаем флаг, что видео уже проиграно
          }
        });
      };

      const observer = new IntersectionObserver(observerCallback, observerOptions);
      observer.observe(sectionElement);

      return () => {
        observer.disconnect();
      };
    }
  }, []);

  return (
    <section className={styles.equipment} ref={sectionRef}>
      <video
        className={styles['equipment__video']}
        ref={videoRef}
        muted
        playsInline
        preload="auto"
        // Убедитесь, что атрибут loop не установлен
      >
        <source src={backgroundVideo} type="video/mp4" />
        Ваш браузер не поддерживает тег видео.
      </video>
      <div className={styles['equipment__overlay']}>
        <div className={styles['equipment__text']} ref={textRef}>
          ОБОРУДОВАНИЕ
        </div>
      </div>
    </section>
  );
};

export default Equipment;