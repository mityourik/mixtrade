import { useEffect, useRef } from 'react';
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
      gsap.fromTo(
        phoneImage,
        { xPercent: 150 },
        {
          xPercent: 0,
          ease: 'power2.out',
          duration: 8,
          scrollTrigger: {
            trigger: section,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 5,
          },
        }
      );

      gsap.fromTo(
        content,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 3,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: section,
            scroller: '.scroll-container',
            start: 'top 80%',
            toggleActions: 'play none none none',
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
          <a
            href="tel:+79620286161"
            className={`${styles.support__icon} ${styles['support__icon__phone']}`}
          ></a>
          <a
            href="https://t.me/+l601BTBDSgNmODhi"
            className={`${styles.support__icon} ${styles['support__icon__telegram']}`}
            target="_blank"
            rel="noopener noreferrer"
          ></a>
        </div>
      </div>
    </section>
  );
};

export default Support;