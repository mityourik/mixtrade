import { useRef } from 'react';
import styles from './GuaranteeDetails.module.scss';
import arrowImg from '../../vendor/images/button_back.png';
import { useNavigate } from 'react-router-dom';

const GuaranteeDetails: React.FC = () => {
  const contentRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const handleArrowClick = (e: React.MouseEvent<HTMLAnchorElement | HTMLImageElement>) => {
    e.preventDefault();
    navigate('/mixtrade#guarantee');
  };

  return (
    <div className={styles['guarantee-details']} ref={contentRef}>
      <h2 className={styles['guarantee-details__title']}>ГАРАНТИЙНЫЕ ОБЯЗАТЕЛЬСТВА:</h2>
      
      <ol className={styles['guarantee-details__list']}>
        <li className={styles['guarantee-details__list-item']}>
          Срок гарантии исчисляется со дня выдачи товара Покупателю.
        </li>
        <li className={styles['guarantee-details__list-item']}>
          В случае если вышеупомянутое оборудование выйдет из строя не по вине Покупателя, 
          в течение гарантийного срока, поставщик обязуется произвести ремонт или замену дефектного оборудования без дополнительной оплаты.
        </li>
        <li className={styles['guarantee-details__list-item']}>
          Гарантийный ремонт и обслуживание производятся в течение 45 рабочих дней 
          с момента принятия решения по рассмотрению заявки гарантийного ремонта в сервисном центре продавца товара, 
          только при предъявлении настоящего гарантийного талона. Гарантийный срок продлевается на время проведения ремонта.
        </li>
        <li className={styles['guarantee-details__list-item']}>
          Поставщик снимает с себя гарантийные обязательства в случаях:
          <ul className={styles['guarantee-details__sub-list']}>
            <li>при наличии механических, химических, термических и иных повреждениях оборудования;</li>
            <li>выхода из строя по причинам несоблюдения правил установки и эксплуатации оборудования;</li>
            <li>вскрытия, ремонта или модернизации техники не уполномоченными лицами;</li>
            <li>при ненадлежащем обслуживании оборудования.</li>
          </ul>
        </li>
        <li className={styles['guarantee-details__list-item']}>
          Гарантия не распространяется на расходные материалы и другие узлы, имеющие естественный 
          ограниченный период эксплуатации (героторная пара (шнековая пара), компрессорное масло, 
          фильтр компрессора и фильтр блока управления),
        </li>
        <li className={styles['guarantee-details__list-item']}>
          В случае выхода из строя электрических узлов управления со следами термического, 
          механического внутреннего повреждения производится платный ремонт неисправного оборудования.
        </li>
        <li className={styles['guarantee-details__list-item']}>
          При обращении с претензиями по поводу работы приобретенной техники, 
          вызванными некомпетентностью покупателя, продавец имеет право взимать плату за проведение консультаций.
        </li>
        <li className={styles['guarantee-details__list-item']}>
          На период гарантийного ремонта аналогичное исправное оборудование не выдается.
        </li>
        <li className={styles['guarantee-details__list-item']}>
          Недополученная в связи с появлением неисправности прибыль и другие косвенные расходы 
          не подлежат возмещению.
        </li>
        <li className={styles['guarantee-details__list-item']}>
          Гарантия не распространяется на ущерб, причиненный другому оборудованию.
        </li>
        <li className={styles['guarantee-details__list-item']}>
          Все транспортные расходы производятся за счет покупателя и не подлежат возмещению.
        </li>
      </ol>
      
      <div className={styles['guarantee-details__arrow-bottom']}>
        <a href="#" className={styles['guarantee-details__link']} onClick={handleArrowClick}>
          <img src={arrowImg} alt="Стрелка назад" className={styles['guarantee-details__arrow-image']} />
        </a>
      </div>
    </div>
  );
};

export default GuaranteeDetails;