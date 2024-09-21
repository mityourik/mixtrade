import React, { useEffect, useRef } from 'react';
import styles from './Support.module.scss';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Support: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const phoneImageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
  
    const section = sectionRef.current;
    const phoneImage = phoneImageRef.current;
    const content = contentRef.current;
  
    if (section && phoneImage && content) {
      gsap.set(content, { opacity: 0 });
  
      gsap.fromTo(
        phoneImage,
        { xPercent: 100 },
        {
          xPercent: -13,
          ease: 'power2.out',
          duration: 5,
          scrollTrigger: {
            trigger: section,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 3,
          },
        }
      );
  
      gsap.fromTo(
        content,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            trigger: section,
            start: 'top 10%',
            end: 'top top',
            scrub: true,
            markers: true, // отладка
          },
        }
      );
    }
  }, []);
  
  return (
    <section className={styles.support} ref={sectionRef}>
      <div className={styles['support__phone-image']} ref={phoneImageRef}></div>
      <div className={styles['support__content']} ref={contentRef}>
        <div className={styles['support__container']}>
            <h1 className={styles['support__title']}>сломались?</h1>
            <p className={styles['support__description']}>
            Поддержка и консультации: Наши специалисты всегда готовы помочь вам с любыми вопросами и проблемами,
            связанными с эксплуатацией и обслуживанием штукатурных станций PerSoniya.
            </p>
        </div>
        <div className={styles['support__icons']}>
          <div className={`${styles.support__icon} ${styles['support__icon__phone']}`}></div>
          <div className={`${styles.support__icon} ${styles['support__icon__telegram']}`}></div>
        </div>
      </div>
    </section>
  );
};

export default Support;