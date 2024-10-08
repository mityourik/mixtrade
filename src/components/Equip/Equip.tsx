import styles from './Equip.module.scss';
import mixer from '../../vendor/images/mixcement.png';
import bm670img from '../../vendor/images/buttons/button_bm670.png';

const Equip: React.FC = () => {
  return (
    // <section className={`${styles.equip} scroll-section`}>
    <section className={styles.equip}>
      <div className={styles['equip__grid']}>
        <h1 className={styles['equip__title']}>bm-670</h1>
        <h3 className={styles['equip__subtitle']}>бетоносмеситель</h3>
        <p className={styles['equip__text']}>Поддержка и консультации: Наши специалисты всегда готовы помочь вам с любыми вопросами и проблемами, связанными с эксплуатацией и обслуживанием штукатурных станций Personiya</p>
        <button className={styles['equip__button_back']}></button>
        <div className={styles['equip__container-image']}>
          <img className={styles['equip__image']} src={mixer} alt="equip"/>
        </div>
        <button className={styles['equip__button_forward']}></button>
        <button className={styles['equip__about-button']}><img className={styles['equip__about-image']} src={bm670img} alt="mixer bm670 image"/>Подробнее</button>
      </div>
    </section>
  )
}

export default Equip;
