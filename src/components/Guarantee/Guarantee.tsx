import { useRef, useEffect, useState } from 'react';
import styles from './Guarantee.module.scss';
import guaranteeImg from '../../vendor/images/guarantee.png';
import frontArrowImg from '../../vendor/images/button_forward.png';
import backArrowImg from '../../vendor/images/button_back.png';
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
          xPercent: 60,
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
                src={frontArrowImg}
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
          <p>1. Срок гарантии исчисляется со дня выдачи товара Покупателю.</p>
          <p>2. В случае если вышеупомянутое оборудование выйдет из строя не по вине Покупателя, в течение гарантийного срока, поставщик обязуется произвести ремонт или замену дефектного оборудования без дополнительной оплаты.</p>
          <p>3. Гарантийный ремонт и обслуживание производятся в течение 45 рабочих дней с момента принятия решения по рассмотрению заявки гарантийного ремонта в сервисном центре продавца товара, только при предъявлении настоящего гарантийного талона. Гарантийный срок продлевается на время проведения ремонта.</p>
          <p>4. Поставщик снимает с себя гарантийные обязательства в случаях: при наличии механических, химических, термических и иных повреждений оборудования, выхода из строя по причинам несоблюдения правил установки и эксплуатации оборудования, вскрытия, ремонта или модернизации техники не уполномоченными лицами, при ненадлежащем обслуживании оборудования.</p>
          <p>5. Гарантия не распространяется на расходные материалы и другие узлы, имеющие естественный ограниченный период эксплуатации (героторная пара, шнековая пара, компрессорное масло, фильтр компрессора и фильтр блока управления).</p>
          <p>6. В случае выхода из строя электрических узлов управления со следами термического, механического внутреннего повреждения производится платный ремонт неисправного оборудования.</p>
          <p>7. При обращении с претензиями по поводу работы приобретенной техники, вызванными некомпетентностью покупателя, продавец имеет право взимать плату за проведение консультаций.</p>
          <p>8. На период гарантийного ремонта аналогичное исправное оборудование не выдается.</p>
          <p>9. Недополученная в связи с поломкой оборудования прибыль и другие косвенные расходы не подлежат возмещению.</p>
          <p>10. Гарантия не распространяется на ущерб, причиненный другому оборудованию.</p>
          <p>11. Все транспортные расходы производятся за счет покупателя и не подлежат возмещению.</p>
        </div>
      </div>
    </section>
  );
};

export default Guarantee;