import styles from './Feedback.module.scss';

const Feedback: React.FC = () => {
  return (
    // <section className={`${styles.feedback} scroll-section`}>
    <section className={styles.feedback}>
      <div className={styles.feedback__container}>
        <div className={styles.feedback__form}>
          <h1 className={styles.feedback__title}>обратная связь</h1>
          <p className={styles.feedback__description}>
            Здесь вы можете задать интересующие Вас вопросы.
          </p>
          <form>
            <input
              type="text"
              className={styles.feedback__input}
              placeholder="Имя"
            />
            <input
              type="email"
              className={styles.feedback__input}
              placeholder="E-mail"
            />
            <input
              type="tel"
              className={styles.feedback__input}
              placeholder="Телефон"
            />
            <textarea
              className={styles.feedback__textarea}
              placeholder="Ваш вопрос"
            ></textarea>
            <button className={styles.feedback__submit} type="submit">
              Отправить
            </button>
          </form>
        </div>

        <div className={styles.feedback__info}>
          <p className={styles.feedback__text}>
            Чтобы не ждать ответа, звоните по телефону или переходите в удобный
            для Вас мессенджер.
          </p>
          <div className={styles.feedback__icons}>
            <div
              className={`${styles.feedback__icon} ${styles['feedback__icon__telegram']}`}
            ></div>
            <div
              className={`${styles.feedback__icon} ${styles['feedback__icon__whatsapp']}`}
            ></div>
            <div
              className={`${styles.feedback__icon} ${styles['feedback__icon__phone']}`}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feedback;