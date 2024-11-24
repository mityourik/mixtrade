import styles from './OrderPage.module.scss';
import { useLocation } from 'react-router-dom';
import ArrowButton from '../ArrowButton/ArrowButton';

const OrderPage: React.FC = () => {
  const location = useLocation();
  const data = location.state;

  if (!data) {
    return <div>Данные не найдены</div>;
  }

  return (
    <section className={styles['order-page']}>
      <div className={styles['order-page__container']}>
        <div className={styles['order-page__header']}>
          <h1 className={styles['order-page__title']}>{data.title}</h1>
          <h2 className={styles['order-page__subtitle']}>{data.subtitle}</h2>
        </div>
        <div className={styles['order-page__image-container']}>
          <img
            className={styles['order-page__image']}
            src={data.image}
            alt={data.title}
          />
        </div>
        <div className={styles['order-page__details']}>
          <div className={styles['order-page__content']}>
            <p className={styles['order-page__description']}>{data.description}</p>
            <div className={styles['order-page__specs']}>
              <h3 className={styles['order-page__specs-title']}>Характеристики:</h3>
              <ul className={styles['order-page__specs-list']}>
                {data.specs.map((spec: string, index: number) => (
                  <li key={index} className={styles['order-page__specs-item']}>
                    {spec}
                  </li>
                ))}
              </ul>
            </div>
            <p className={styles['order-page__warranty']}>Гарантия: {data.warranty}</p>
          </div>
          <div className={styles['order-page__purchase']}>
            <span className={styles['order-page__price']}>{data.price}</span>
            <ArrowButton direction='forward' onClick={() => {}} text='Купить' />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrderPage;