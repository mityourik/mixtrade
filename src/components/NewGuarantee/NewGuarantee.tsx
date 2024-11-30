import { useRef, useState } from 'react';
import { gsap } from 'gsap';
import styles from './NewGuarantee.module.scss';
import guaranteeImg from '../../vendor/images/guarantee.png';
import ArrowButton from '../ArrowButton/ArrowButton';

const NewGuarantee = () => {
  const [isTermsVisible, setIsTermsVisible] = useState(false);
  const backgroundRef = useRef(null);
  const contentRef = useRef(null);
  const termsRef = useRef(null);

  const handleArrowClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
  
    if (!isTermsVisible) {
      gsap.to(backgroundRef.current, {
        x: '50%',
        duration: 1,
        ease: 'power2.out',
      });
  
      gsap.to(contentRef.current, {
        opacity: 1,
        x: 0,
        duration: 0.2,
        ease: 'power2.out',
        delay: 0.2,
      });
  
      gsap.to(termsRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.3,
        ease: 'power2.out',
        delay: 0.3,
        onComplete: () => setIsTermsVisible(true),
      });
    } else {
      gsap.to(backgroundRef.current, {
        x: '0%',
        duration: 0.5,
        ease: 'power2.out',
      });
  
      gsap.to(contentRef.current, {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: 'power2.out',
        delay: 0.2,
      });
  
      gsap.to(termsRef.current, {
        opacity: 0,
        y: 50,
        duration: 0.2,
        ease: 'power2.out',
        delay: 0,
        onComplete: () => setIsTermsVisible(false),
      });
    }
  };

  return (
    <section className={styles.guarantee}>
      <div
        className={styles.guarantee__background}
        ref={backgroundRef}
      >
        <img
          className={styles['guarantee__background-image']}
          src={guaranteeImg}
          alt="Фоновое изображение"
        />
      </div>
      <div className={styles.guarantee__content} ref={contentRef}>
        <div className={styles.guarantee__column}>
          <h1 className={styles.guarantee__title}>
            <span className={styles.guarantee__highlight__years}>14</span>
            <span className={styles.guarantee__highlight}>месяцев</span>
            <span className={styles.guarantee__highlight}>гарантия*</span>
          </h1>
          <p className={styles.guarantee__text}>
            Полное описание гарантийных условий появится здесь.
          </p>
          <div className={styles.guarantee__footer}>
            <ArrowButton
              onClick={handleArrowClick}
              direction={isTermsVisible ? 'backward' : 'forward'}
              text={isTermsVisible ? 'Назад' : 'Гарантийные условия'}
            />
          </div>
        </div>
      </div>
      <div className={styles.guarantee__terms} ref={termsRef}>
        <ol className={styles['guarantee__terms-list']}>
          <li className={styles['guarantee__terms-item']}>
            Срок гарантии исчисляется со дня выдачи товара Покупателю.
          </li>
          <li className={styles['guarantee__terms-item']}>
            В случае если вышеупомянутое оборудование выйдет из строя не по вине
            Покупателя, в течение гарантийного срока, поставщик обязуется произвести
            ремонт или замену дефектного оборудования без дополнительной оплаты.
          </li>
          <li className={styles['guarantee__terms-item']}>
            Гарантийный ремонт и обслуживание производятся в течение 45 рабочих дней с
            момента принятия решения по рассмотрению заявки гарантийного ремонта в
            сервисном центре продавца товара, только при предъявлении настоящего
            гарантийного талона. Гарантийный срок продлевается на время проведения
            ремонта.
          </li>
          <li className={styles['guarantee__terms-item']}>
            Поставщик снимает с себя гарантийные обязательства в случаях: при наличии
            механических, химических, термических и иных повреждений оборудования,
            выхода из строя по причинам несоблюдения правил установки и эксплуатации
            оборудования, вскрытия, ремонта или модернизации техники не
            уполномоченными лицами, при ненадлежащем обслуживании оборудования.
          </li>
          <li className={styles['guarantee__terms-item']}>
            Гарантия не распространяется на расходные материалы и другие узлы, имеющие
            естественный ограниченный период эксплуатации (героторная пара, шнековая
            пара, компрессорное масло, фильтр компрессора и фильтр блока управления).
          </li>
          <li className={styles['guarantee__terms-item']}>
            В случае выхода из строя электрических узлов управления со следами
            термического, механического внутреннего повреждения производится платный
            ремонт неисправного оборудования.
          </li>
          <li className={styles['guarantee__terms-item']}>
            При обращении с претензиями по поводу работы приобретенной техники,
            вызванными некомпетентностью покупателя, продавец имеет право взимать плату
            за проведение консультаций.
          </li>
          <li className={styles['guarantee__terms-item']}>
            На период гарантийного ремонта аналогичное исправное оборудование не
            выдается.
          </li>
          <li className={styles['guarantee__terms-item']}>
            Недополученная в связи с поломкой оборудования прибыль и другие косвенные
            расходы не подлежат возмещению.
          </li>
          <li className={styles['guarantee__terms-item']}>
            Гарантия не распространяется на ущерб, причиненный другому оборудованию.
          </li>
          <li className={styles['guarantee__terms-item']}>
            Все транспортные расходы производятся за счет покупателя и не подлежат
            возмещению.
          </li>
        </ol>
      </div>
    </section>
  );
};

export default NewGuarantee;