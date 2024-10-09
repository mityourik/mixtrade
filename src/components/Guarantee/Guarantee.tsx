import React, { useRef, useEffect } from 'react';
import styles from './Guarantee.module.scss';
import guaranteeImg from '../../vendor/images/guarantee.png';
import arrowImg from '../../vendor/images/button_back.png';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Guarantee: React.FC = () => {
  const contentRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const contentElement = contentRef.current;
    const sectionElement = sectionRef.current;
    const scroller = document.querySelector('.scroll-container');

    if (contentElement && sectionElement && scroller) {
      gsap.set(contentElement, { yPercent: 100 });

      gsap.to(contentElement, {
        yPercent: -100,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionElement,
          scroller: scroller,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      });
    }
  }, []);

  return (
    <section className={styles.guarantee} ref={sectionRef}>
      <div className={styles['guarantee__content']} ref={contentRef}>
        <h1 className={styles['guarantee__title']}>14</h1>
        <p className={styles['guarantee__subtitle']}>Месяцев гарантия*</p>
        <a href="#" className={styles['guarantee__link']}>
          Гарантийные условия
          <img src={arrowImg} alt="Стрелка" className={styles['guarantee__arrow']} />
        </a>
      </div>
      <div className={styles['guarantee__image-container']}>
        <img
          src={guaranteeImg}
          alt="Guarantee"
          className={styles['guarantee__image']}
        />
      </div>
    </section>
  );
};

export default Guarantee;