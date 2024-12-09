import styles from './Community.module.scss';
import imgBag from '../../vendor/images/bag.png';

const Community: React.FC = () => {
  return (
    // <section className={`${styles.community} scroll-section`}>

    <section className={styles.community}>
      <div className={styles['community__image']} style={{ backgroundImage: `url(${imgBag})` }}></div>
      <div className={styles['community__content']}>
        <div className={styles['community__container']}>
          <h1 className={styles['community__title']}>Вступайте в профессиональное сообщество</h1>
          <p className={styles['community__description']}>
            Присоединяйтесь к нашему сообществу единомышленников в социальных сетях, где мы делимся опытом, идеями и вдохновением в области штукатурных работ. Здесь вы найдете поддержку, новые знакомства и возможность обсудить самые актуальные темы с профессионалами отрасли. Присоединяйтесь к нам и вместе мы сможем создать что-то по-настоящему великолепное
          </p>
        </div>
        <div className={styles['community__icons']}>
          <div className={`${styles.community__icon} ${styles['community__icon__telegram']}`}></div>
          <div className={`${styles.community__icon} ${styles['community__icon__vk']}`}></div>
        </div>
      </div>
    </section>
  );
};

export default Community;