import { useRef, useEffect, useState } from 'react';
import styles from './Guarantee.module.scss';
import guaranteeImage from '../../vendor/images/guarantee.png';
import forwardArrowImage from '../../vendor/images/button_forward.png';
import backwardArrowImage from '../../vendor/images/button_back.png';
import { gsap } from 'gsap';

const Guarantee: React.FC = () => {
  const imageReference = useRef<HTMLImageElement>(null);
  const textReference = useRef<HTMLDivElement>(null);

  const [isTextVisible, setIsTextVisible] = useState(false);
  const isInitialMount = useRef(true);
  const animationInProgress = useRef(false);
  const timelineReference = useRef<gsap.core.Timeline>();
  const [isAnimationCompleted, setIsAnimationCompleted] = useState(false);

  useEffect(() => {
    const imageElement = imageReference.current;
    const textElement = textReference.current;

    if (imageElement && textElement) {
      gsap.set(imageElement, { xPercent: 0 });
      gsap.set(textElement, { autoAlpha: 0 });
    }
  }, []);

  useEffect(() => {
    const imageElement = imageReference.current;
    const textElement = textReference.current;

    if (isInitialMount.current) {
      isInitialMount.current = false;
      return;
    }

    if (animationInProgress.current) {
      timelineReference.current?.kill();
    }

    animationInProgress.current = true;

    if (imageElement && textElement) {
      const timeline = gsap.timeline({
        onComplete: () => {
          animationInProgress.current = false;
          setIsAnimationCompleted(isTextVisible);
        },
      });

      timelineReference.current = timeline;

      if (isTextVisible) {
        timeline
          .to(imageElement, {
            xPercent: 60,
            duration: 1,
            ease: 'power2.inOut',
          })
          .to(
            textElement,
            {
              autoAlpha: 1,
              duration: 0.5,
              ease: 'power2.inOut',
            },
            '-=0.5'
          );
      } else {
        timeline
          .to(textElement, {
            autoAlpha: 0,
            duration: 0.3,
            ease: 'power2.inOut',
          })
          .to(
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
  }, [isTextVisible]);

  const handleArrowClick = (
    event: React.MouseEvent<HTMLAnchorElement | HTMLImageElement>
  ) => {
    event.preventDefault();
    if (animationInProgress.current) return;
    setIsTextVisible(!isTextVisible);
  };

  return (
    <section className={styles.guarantee}>
      <div className={styles.guarantee__content}>
        <h1 className={styles.guarantee__title}>14</h1>
        <p className={styles.guarantee__subtitle}>Месяцев гарантия*</p>
        <div className={styles.guarantee__arrow_container}>
          {!isTextVisible && (
            <a
              href="#"
              className={styles.guarantee__link}
              onClick={handleArrowClick}
            >
              Гарантийные условия
              <img
                src={forwardArrowImage}
                alt="Стрелка вперед"
                className={styles.guarantee__arrow}
              />
            </a>
          )}
          {isAnimationCompleted && isTextVisible && (
            <a
              href="#"
              className={styles.guarantee__back_link}
              onClick={handleArrowClick}
            >
              <img
                src={backwardArrowImage}
                alt="Стрелка назад"
                className={styles.guarantee__arrow}
              />
            </a>
          )}
        </div>
      </div>
      <div className={styles.guarantee__image_container}>
        <img
          src={guaranteeImage}
          alt="Гарантия"
          className={styles.guarantee__image}
          ref={imageReference}
        />
        <div
          className={`${styles.guarantee__text} ${
            isTextVisible ? styles.guarantee__text__visible : ''
          }`}
          ref={textReference}
        >
          <p className={styles.guarantee__text__paragraph}>
            1. Срок гарантии исчисляется со дня выдачи товара Покупателю.
          </p>
          <p className={styles.guarantee__text__paragraph}>
            2. В случае если вышеупомянутое оборудование выйдет из строя не по
            вине Покупателя, в течение гарантийного срока, поставщик обязуется
            произвести ремонт или замену дефектного оборудования без
            дополнительной оплаты.
          </p>
          <p className={styles.guarantee__text__paragraph}>
            3. Гарантийный ремонт и обслуживание производятся в течение 45
            рабочих дней с момента принятия решения по рассмотрению заявки
            гарантийного ремонта в сервисном центре продавца товара, только при
            предъявлении настоящего гарантийного талона. Гарантийный срок
            продлевается на время проведения ремонта.
          </p>
          <p className={styles.guarantee__text__paragraph}>
            4. Поставщик снимает с себя гарантийные обязательства в случаях: при
            наличии механических, химических, термических и иных повреждений
            оборудования, выхода из строя по причинам несоблюдения правил
            установки и эксплуатации оборудования, вскрытия, ремонта или
            модернизации техники не уполномоченными лицами, при ненадлежащем
            обслуживании оборудования.
          </p>
          <p className={styles.guarantee__text__paragraph}>
            5. Гарантия не распространяется на расходные материалы и другие
            узлы, имеющие естественный ограниченный период эксплуатации
            (героторная пара, шнековая пара, компрессорное масло, фильтр
            компрессора и фильтр блока управления).
          </p>
          <p className={styles.guarantee__text__paragraph}>
            6. В случае выхода из строя электрических узлов управления со
            следами термического, механического внутреннего повреждения
            производится платный ремонт неисправного оборудования.
          </p>
          <p className={styles.guarantee__text__paragraph}>
            7. При обращении с претензиями по поводу работы приобретенной
            техники, вызванными некомпетентностью покупателя, продавец имеет
            право взимать плату за проведение консультаций.
          </p>
          <p className={styles.guarantee__text__paragraph}>
            8. На период гарантийного ремонта аналогичное исправное оборудование
            не выдается.
          </p>
          <p className={styles.guarantee__text__paragraph}>
            9. Недополученная в связи с поломкой оборудования прибыль и другие
            косвенные расходы не подлежат возмещению.
          </p>
          <p className={styles.guarantee__text__paragraph}>
            10. Гарантия не распространяется на ущерб, причиненный другому
            оборудованию.
          </p>
          <p className={styles.guarantee__text__paragraph}>
            11. Все транспортные расходы производятся за счет покупателя и не
            подлежат возмещению.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Guarantee;