import styles from './Spares.module.scss';
import partsImage from '../../vendor/images/PARTS.png';
import arrowImg from '../../vendor/images/buttons/button_back.png';
import { Link } from 'react-router-dom';

const Spares = () => {
  return (

    <section className={styles.spares}>
      <div className={styles['spares__content']}>
        <h1 className={styles['spares__title']}>
          заказать запчасти и расходники
        </h1>
        <Link to="/feedback-spares" className={styles['spares__link']}>
          Оформить заказ
          <img src={arrowImg} alt="Стрелка" className={styles['spares__arrow']} />
        </Link>
      </div>
      <div className={styles['spares__image']}>
        <img src={partsImage} alt="Запчасти" />
      </div>
    </section>
  );
};

export default Spares;