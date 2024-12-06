import styles from './FeedbackSpares.module.scss';

// рефакторинг тутс
export interface FeedbackSparesProps {
  title?: string;
  text?: string;
  placeholder?: string;
}

const FeedbackSpares: React.FC<FeedbackSparesProps> = ({
  title = 'Заказать запчасть',
  text = 'Здесь вы можете отправить запрос на получение запчасти.',
  placeholder = 'Необходимая деталь',
}) => {
  return (
    <section className={styles['feedback-spares']}>
      <div className={styles['feedback-spares__container']}>
        <div className={styles['feedback-spares__form']}>
          <h1 className={styles['feedback-spares__title']}>{title}</h1>
          <p className={styles['feedback-spares__description']}>{text}</p>
          <form>
            <input
              type="text"
              className={styles['feedback-spares__input']}
              placeholder="Имя"
            />
            <input
              type="email"
              className={styles['feedback-spares__input']}
              placeholder="E-mail"
            />
            <input
              type="tel"
              className={styles['feedback-spares__input']}
              placeholder="Телефон"
            />
            <div className={styles['feedback-spares__textareaWrapper']}>
              <textarea
                className={styles['feedback-spares__textarea']}
                placeholder={placeholder}
              ></textarea>
              <button className={styles['feedback-spares__submit']} type="submit">
                Отправить
              </button>
            </div>
          </form>
        </div>

        <div className={styles['feedback-spares__info']}>
          <p className={styles['feedback-spares__description']}>
            Чтобы не ждать ответа, звоните по телефону или переходите в удобный для Вас мессенджер.
          </p>
          <div className={styles['feedback-spares__contacts']}>
            <p className={styles['feedback-spares__phone']}>
              <a href="tel:+79620286161">+7 962 028-61-61</a> служба поддержки
            </p>
            <div className={styles['feedback-spares__icons']}>
            <a
              href="https://t.me/+l601BTBDSgNmODhi"
              className={`${styles['feedback-spares__icon']} ${styles['feedback-spares__icon__telegram']}`}
              target="_blank"
              rel="noopener noreferrer"
            ></a>
            <a
              href="https://vk.com/novoplastering"
              className={`${styles['feedback-spares__icon']} ${styles['feedback-spares__icon__vk']}`}
              target="_blank"
              rel="noopener noreferrer"
            ></a>
            <a
              href="tel:+79620286161"
              className={`${styles['feedback-spares__icon']} ${styles['feedback-spares__icon__phone']}`}
            ></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeedbackSpares;