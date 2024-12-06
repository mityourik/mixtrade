import { useRef } from 'react';
import styles from './ServiceCity.module.scss';
import arrowImg from '../../vendor/images/button_back.png';
import { useNavigate } from 'react-router-dom';

const ServiceCity: React.FC = () => {
  const contentRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const navigate = useNavigate();

  const handleArrowClick = (e: React.MouseEvent<HTMLAnchorElement | HTMLImageElement>) => {
    e.preventDefault();
    navigate(-1);
  };

  return (
    <section className={styles['service-city']} ref={sectionRef}>
      <div className={styles['service-city__arrow-container']}>
        <a href="#" className={styles['service-city__link']} onClick={handleArrowClick}>
          <img src={arrowImg} alt="Стрелка" className={styles['service-city__arrow']} />
        </a>
      </div>
      <div className={styles['service-city__content']} ref={contentRef}>
        <article className={styles['service-city__city']}>
          <h2 className={styles['service-city__city-title']}>ХАБАРОВСК</h2>
          <p className={styles['service-city__city-text']}>
            2. В случае если вышеупомянутое оборудование выйдет из строя не по вине Покупателя, в течение гарантийного срока,
            поставщик обязуется произвести ремонт или замену дефектного оборудования без дополнительной оплаты.
          </p>
        </article>

        <article className={styles['service-city__city']}>
          <h2 className={styles['service-city__city-title']}>КРАСНОДАР</h2>
          <p className={styles['service-city__city-text']}>
            3. Гарантийный ремонт и обслуживание производятся в течение 45 рабочих дней с момента принятия решения по
            рассмотрению заявки гарантийного ремонта в сервисном центре продавца товара, только при предъявлении
            настоящего гарантийного талона. Гарантийный срок продлевается на время проведения ремонта.
          </p>
        </article>

        <article className={styles['service-city__city']}>
          <h2 className={styles['service-city__city-title']}>СТАВРОПОЛЬ</h2>
          <p className={styles['service-city__city-text']}>
            4. Поставщик снимает с себя гарантийные обязательства в случаях:
          </p>
          <ul className={styles['service-city__list']}>
            <li className={styles['service-city__list-item']}>
              при наличии механических, химических, термических и иных повреждений оборудования;
            </li>
            <li className={styles['service-city__list-item']}>
              выхода из строя по причинам несоблюдения правил установки и эксплуатации оборудования;
            </li>
            <li className={styles['service-city__list-item']}>
              вскрытия, ремонта или модернизации техники неуполномоченными лицами;
            </li>
            <li className={styles['service-city__list-item']}>
              при ненадлежащем обслуживании оборудования.
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default ServiceCity;