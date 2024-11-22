import styles from './OrderPage.module.scss';
import stationXl from '../../vendor/images/BM-670.png';

const OrderPage: React.FC = () => {
  return (
    <section className={styles['order-page']}>
      <div className={styles['order-page__container']}>
        <div className={styles['order-page__image-wrapper']}>
          <img className={styles['order-page__image']} src={stationXl} alt="Штукатурная станция XL" />
        </div>
        <div className={styles['order-page__content']}>
          <h1 className={styles['order-page__title']}>BM 670</h1>
          <p className={styles['order-page__text']}>
            Бетоносмеситель PERSONIYA БМ 670 служит для замешивания растворов известки и штукатурки, бетонных смесей и сухих материалов при выполнении строительных и ремонтных работ. Оснащена надежной, съемной колесной базой. Бетоносмеситель укомплектован съемным лотком для удобной выгрузки готовой продукции, что значительно упрощает ее эксплуатацию.
          </p>
          <div className={styles['order-page__specs']}>
            <h4 className={styles['order-page__spec-title']}>Характеристики:</h4>
            <ul className={styles['order-page__spec-list']}>
              <li>Электропитание - 220V</li>
              <li>Мощность - 3 кВт</li>
              <li>Вес - 140 кг</li>
              <li>Число оборотов - 378-400 об/мин.</li>
              <li>Производительность - 1 м³/ч.</li>
              <li>Объем бака - 80 л.</li>
            </ul>
          </div>
          <p className={styles['order-page__warranty']}>Гарантия: 14 месяцев</p>
          <p className={styles['order-page__price']}>105000 Р.</p>
          <button className={styles['order-page__buy-button']}>Купить</button>
        </div>
      </div>
    </section>
  );
};

export default OrderPage;