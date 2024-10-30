import { useRef, useEffect, useState } from 'react';
import styles from './Guarantee.module.scss';
import guaranteeImg from '../../vendor/images/guarantee.png';
import arrowImg from '../../vendor/images/button_back.png';
import backArrowImg from '../../vendor/images/button_forward.png';
import { gsap } from 'gsap';

const Guarantee: React.FC = () => {
  const contentRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  const [showText, setShowText] = useState(false);
  const isInitialMount = useRef(true);
  const animationInProgress = useRef(false);
  const tlRef = useRef<gsap.core.Timeline>();
  const [animationCompleted, setAnimationCompleted] = useState(false);

  useEffect(() => {
    const contentElement = contentRef.current;
    const sectionElement = sectionRef.current;
    const imageElement = imageRef.current;
    const textElement = textRef.current;

    if (imageElement && textElement) {
      gsap.set(imageElement, { xPercent: 0 });
      gsap.set(textElement, { autoAlpha: 0 });
    }

    if (contentElement && sectionElement) {
      gsap.set(contentElement, { yPercent: 100 });

      gsap.to(contentElement, {
        yPercent: -100,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionElement,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      });
    }
  }, []);

  useEffect(() => {
    const imageElement = imageRef.current;
    const textElement = textRef.current;

    if (isInitialMount.current) {
      isInitialMount.current = false;
      return;
    }

    if (animationInProgress.current) {
      tlRef.current?.kill();
    }

    animationInProgress.current = true;

    if (imageElement && textElement) {
      const tl = gsap.timeline({
        onComplete: () => {
          animationInProgress.current = false;
          setAnimationCompleted(showText);
        },
      });

      tlRef.current = tl;

      if (showText) {
        tl.to(imageElement, {
          xPercent: 40,
          duration: 1,
          ease: 'power2.inOut',
        }).to(
          textElement,
          {
            autoAlpha: 1,
            duration: 0.5,
            ease: 'power2.inOut',
          },
          '-=0.5'
        );
      } else {
        tl.to(textElement, {
          autoAlpha: 0,
          duration: 0.3,
          ease: 'power2.inOut',
        }).to(
          imageElement,
          {
            xPercent: 0,
            duration: 1,
            ease: 'power2.inOut',
          },
          '-=0.3'
        );
      }
    }
  }, [showText]);

  const handleArrowClick = (e: React.MouseEvent<HTMLAnchorElement | HTMLImageElement>) => {
    e.preventDefault();
    if (animationInProgress.current) return;
    setShowText(!showText);
  };

  return (
    <section className={styles.guarantee} ref={sectionRef}>
      <div className={styles['guarantee__content']} ref={contentRef}>
        <h1 className={styles['guarantee__title']}>14</h1>
        <p className={styles['guarantee__subtitle']}>Месяцев гарантия*</p>
        <div className={styles['guarantee__arrow-container']}>
          {!showText && (
            <a href="#" className={styles['guarantee__link']} onClick={handleArrowClick}>
              Гарантийные условия
              <img
                src={arrowImg}
                alt="Стрелка"
                className={styles['guarantee__arrow']}
              />
            </a>
          )}
          {animationCompleted && showText && (
            <a
              href="#"
              className={styles['guarantee__back-link']}
              onClick={handleArrowClick}
            >
              <img
                src={backArrowImg}
                alt="Назад"
                className={styles['guarantee__arrow']}
              />
            </a>
          )}
        </div>
      </div>
      <div className={styles['guarantee__image-container']}>
        <img
          src={guaranteeImg}
          alt="Guarantee"
          className={styles['guarantee__image']}
          ref={imageRef}
        />
        <div className={styles['guarantee__text']} ref={textRef}>
          {/* Ваш текст */}
          <p>1. Срок гарантии исчисляется со дня выдачи товара Покупателю.</p>
          <p>
            2. В случае если вышеупомянутое оборудование выйдет из строя не по вине Покупателя, в
            течение гарантийного срока, поставщик обязуется произвести ремонт или замену дефектного
            оборудования без дополнительной оплаты.
          </p>
          {/* остальные пункты текста здесь */}
        </div>
      </div>
    </section>
  );
};

export default Guarantee;