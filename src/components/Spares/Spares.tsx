import styles from './Spares.module.scss';
import partsImage from '../../vendor/images/PARTS.png';
import arrowImg from '../../vendor/images/buttons/button_back.png';

const Spares = () => {
  return (
    // <section className={`${styles.spares} scroll-section`}>

    <section className={styles.spares}>
      <div className={styles['spares__content']}>
        <h1 className={styles['spares__title']}>
          заказать запчасти и расходники
        </h1>
        <a href="#" className={styles['spares__link']}>
          Оформить заказ
          <img src={arrowImg} alt="Стрелка" className={styles['spares__arrow']} />
        </a>
      </div>
      <div className={styles['spares__image']}>
        <img src={partsImage} alt="Запчасти" />
      </div>
    </section>
  );
};

export default Spares;