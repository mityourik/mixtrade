import styles from './Guarantee.module.scss';
import useParallaxEffect from '../../utlis/useParallax/useParallaxEffect';
import guaranteeImg from '../../vendor/images/guarantee.png';

const Guarantee: React.FC = () => {
  useParallaxEffect();

  return (
    <section className={styles.guarantee}>
      <div className={styles['guarantee__content']}>
        <h1 className={styles['guarantee__title']}>14</h1>
        <p className={styles['guarantee__subtitle']}>Месяцев гарантия*</p>
        <a href="#" className={styles['guarantee__link']}>
          Гарантийные условия →
        </a>
      </div>
      <div className={styles['guarantee__image-container']}>
        <img src={guaranteeImg} alt="Guarantee" className={styles['guarantee__image']} />
      </div>
    </section>
  );
};

export default Guarantee;