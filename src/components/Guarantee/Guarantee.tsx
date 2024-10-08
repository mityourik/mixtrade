import styles from './Guarantee.module.scss';
import guaranteeImg from '../../vendor/images/guarantee.png';
import arrowImg from '../../vendor/images/button_back.png';

const Guarantee: React.FC = () => {

  return (
    // <section className={`${styles.guarantee} scroll-section`}>

    <section className={styles.guarantee}>
      <div className={styles['guarantee__content']}>
        <h1 className={styles['guarantee__title']}>14</h1>
        <p className={styles['guarantee__subtitle']}>Месяцев гарантия*</p>
        <a href="#" className={styles['guarantee__link']}>
          Гарантийные условия
          <img src={arrowImg} alt="Стрелка" className={styles['guarantee__arrow']} />
        </a>
      </div>
      <div className={styles['guarantee__image-container']}>
        <img
          src={guaranteeImg}
          alt="Guarantee"
          className={styles['guarantee__image']}
        />
      </div>
    </section>
  );
};

export default Guarantee;