import styles from './OrderPage.module.scss';
import stationXl from '../../vendor/images/carousel/xl.png';
import ArrowButton from '../ArrowButton/ArrowButton';

const OrderPage: React.FC = () => {
  return (
    <section className={styles['order-page']}>
      <div className={styles['order-page__container']}>
        <div className={styles['order-page__header']}>
          <h1 className={styles['order-page__title']}>XL</h1>
          <h2 className={styles['order-page__subtitle']}>Штукатурная станция</h2>
        </div>
        <div className={styles['order-page__image-container']}>
          <img
            className={styles['order-page__image']}
            src={stationXl}
            alt="Штукатурная станция XL"
          />
        </div>
        <div className={styles['order-page__details']}>
          <div className={styles['order-page__content']}>
            <p className={styles['order-page__description']}>
              PERSONIYA XL - штукатурная станция, предназначенная для качественного и быстрого
              нанесения сухих строительных смесей. Может работать от сети с трёхфазным током 380V,
              если это невозможно, подойдёт и 220V. Штукатурная станция справляется с ремонтными
              работами, как на частных объектах, так и на масштабных строительных площадках.
            </p>
            <div className={styles['order-page__specs']}>
              <h3 className={styles['order-page__specs-title']}>Характеристики:</h3>
              <ul className={styles['order-page__specs-list']}>
                <li className={styles['order-page__specs-item']}>Электропитание: 220/380 V</li>
                <li className={styles['order-page__specs-item']}>Дальность подачи: до 15 м</li>
                <li className={styles['order-page__specs-item']}>Высота подачи: 10 м</li>
                <li className={styles['order-page__specs-item']}>Вес: 246 кг</li>
                <li className={styles['order-page__specs-item']}>Число оборотов: 50-390 об/мин</li>
                <li className={styles['order-page__specs-item']}>Производительность: 8-20 л/мин</li>
                <li className={styles['order-page__specs-item']}>Объем приёмного бункера: 70 л</li>
              </ul>
            </div>
            <p className={styles['order-page__warranty']}>Гарантия: 14 месяцев</p>
          </div>
          <div className={styles['order-page__purchase']}>
            <span className={styles['order-page__price']}>600000 Р.</span>
            <ArrowButton direction='forward' onClick={() => {}} text='Купить'/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrderPage;