import React, { useRef, useEffect } from 'react';
import styles from './Equip.module.scss';
import mixer from '../../vendor/images/mixcement.png';
import bm670img from '../../vendor/images/buttons/button_bm670.png';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Equip: React.FC = () => {
  const gridRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const gridElement = gridRef.current;
    const sectionElement = sectionRef.current;
    const scroller = document.querySelector('.scroll-container');

    if (gridElement && sectionElement && scroller) {
      gsap.set(gridElement, { yPercent: 100 });

      gsap.to(gridElement, {
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
    <section className={styles.equip} ref={sectionRef}>
      <div className={styles['equip__grid']} ref={gridRef}>
        <h1 className={styles['equip__title']}>bm-670</h1>
        <h3 className={styles['equip__subtitle']}>бетоносмеситель</h3>
        <p className={styles['equip__text']}>
          Поддержка и консультации: Наши специалисты всегда готовы помочь вам с любыми вопросами и проблемами,
          связанными с эксплуатацией и обслуживанием штукатурных станций Personiya
        </p>
        <button className={styles['equip__button_back']}></button>
        <div className={styles['equip__container-image']}>
          <img className={styles['equip__image']} src={mixer} alt="equip" />
        </div>
        <button className={styles['equip__button_forward']}></button>
        <button className={styles['equip__about-button']}>
          <img className={styles['equip__about-image']} src={bm670img} alt="mixer bm670 image" />
          Подробнее
        </button>
      </div>
    </section>
  );
};

export default Equip;