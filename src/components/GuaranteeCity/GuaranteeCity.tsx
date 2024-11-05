import { useRef, useState } from 'react';
import styles from './GuaranteeCity.module.scss';
import arrowImg from '../../vendor/images/button_back.png';

const GuaranteeCity: React.FC = () => {
  const contentRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  const [showText, setShowText] = useState(false);

  const handleArrowClick = (e: React.MouseEvent<HTMLAnchorElement | HTMLImageElement>) => {
    e.preventDefault();
    setShowText(!showText);
  };

  return (
    <section className={styles.guarantee} ref={sectionRef}>
      <div className={styles['guarantee__content']} ref={contentRef}>
        <div className={styles['guarantee__city']}>
          <h2 className={styles['guarantee__city-title']}>ХАБАРОВСК</h2>
          <p className={styles['guarantee__city-text']}>
            2. В случае если вышеупомянутое оборудование выйдет из строя не по вине Покупателя, в течение гарантийного срока,
            поставщик обязуется произвести ремонт или замену дефектного оборудования без дополнительной оплаты.
          </p>
        </div>
        <div className={styles['guarantee__city']}>
          <h2 className={styles['guarantee__city-title']}>КРАСНОДАР</h2>
          <p className={styles['guarantee__city-text']}>
            3. Гарантийный ремонт и обслуживание производятся в течение 45 рабочих дней с момента принятия решения по
            рассмотрению заявки гарантийного ремонта в сервисном центре продавца товара, только при предъявлении
            настоящего гарантийного талона. Гарантийный срок продлевается на время проведения ремонта.
          </p>
        </div>
        <div className={styles['guarantee__city']}>
          <h2 className={styles['guarantee__city-title']}>СТАВРОПОЛЬ</h2>
          <p className={styles['guarantee__city-text']}>
            4. Поставщик снимает с себя гарантийные обязательства в случаях:
            <br />- при наличии механических, химических, термических и иных повреждений оборудования,
            <br />- выхода из строя по причинам несоблюдения правил установки и эксплуатации оборудования,
            <br />- вскрытия, ремонта или модернизации техники не уполномоченными лицами,
            <br />- при ненадлежащем обслуживании оборудования.
          </p>
        </div>
        <div className={styles['guarantee__arrow-container']}>
          <a href="#" className={styles['guarantee__link']} onClick={handleArrowClick}>
            <img src={arrowImg} alt="Стрелка" className={styles['guarantee__arrow']} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default GuaranteeCity;