import styles from './Equipment.module.scss';
import mixer from '../../vendor/images/mixcement.png';
import bm670img from '../../vendor/images/buttons/button_bm670.png';

const Equipment: React.FC = () => {
  return (
    <section className={styles.equipment}>
      <div className={styles['equipment__three-columns']}>
        <div className={styles['equipment__column-first']}>
          <h1 className={styles['equipment__title']}>bm-670</h1>
          <h3 className={styles['equipment__subtitle']}>бетоносмеситель</h3>
          <p className={styles['equipment__text']}>Поддержка и консультации: Наши специалисты всегда готовы помочь вам с любыми вопросами и проблемами, связанными с эксплуатацией и обслуживанием штукатурных станций Personiya</p>
          <button className={styles['equipment__button']}><span className={styles['equipment__button_back']}/></button>
        </div>
        <div className={styles['equipment__column-second']}>
          <img className={styles['equipment__image']} src={mixer} alt="equipment"/>
        </div>
        <div className={styles['equipment__column-third']}>
          <button className={styles['equipment__button']}><span className={styles['equipment__button_forward']}/></button>
          <button className={styles['equipment__about-button']}><img className={styles['equipment__about-image']} src={bm670img} alt="mixer bm670 image"/>Подробнее</button>
        </div>
      </div>
    </section>
  )
}

export default Equipment
