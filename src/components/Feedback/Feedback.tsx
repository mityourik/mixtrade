import styles from './Feedback.module.scss';

// рефакторинг тутс
export interface FeedbackProps {
  title?: string;
  text?: string;
  placeholder?: string;
}

const Feedback: React.FC<FeedbackProps> = ({
  title = 'Обратная связь',
  text = 'Здесь вы можете задать интересующие Вас вопросы.',
  placeholder = 'Ваш вопрос',
}) => {
  return (
    <section className={styles.feedback}>
      <div className={styles.feedback__container}>
        <div className={styles.feedback__form}>
          <h1 className={styles.feedback__title}>{title}</h1>
          <p className={styles.feedback__description}>{text}</p>
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
            <div className={styles.feedback__textareaWrapper}>
              <textarea
                className={styles.feedback__textarea}
                placeholder={placeholder}
              ></textarea>
              <button className={styles.feedback__submit} type="submit">
                Отправить
              </button>
            </div>
          </form>
        </div>

        <div className={styles.feedback__info}>
          <p className={styles.feedback__description}>
            Чтобы не ждать ответа, звоните по телефону или переходите в удобный для Вас мессенджер.
          </p>
          <div className={styles.feedback__contacts}>
            <p className={styles.feedback__phone}>
              <a href="tel:+79620286161">+7 962 028-61-61</a> служба поддержки
            </p>
            <div className={styles.feedback__icons}>
            <a
              href="https://t.me/+l601BTBDSgNmODhi"
              className={`${styles.feedback__icon} ${styles['feedback__icon__telegram']}`}
              target="_blank"
              rel="noopener noreferrer"
            ></a>
            <a
              href="https://vk.com/novoplastering"
              className={`${styles.feedback__icon} ${styles['feedback__icon__vk']}`}
              target="_blank"
              rel="noopener noreferrer"
            ></a>
            <a
              href="tel:+79620286161"
              className={`${styles.feedback__icon} ${styles['feedback__icon__phone']}`}
            ></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feedback;