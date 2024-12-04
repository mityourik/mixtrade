import { Link } from 'react-router-dom';
import styles from './Service.module.scss';
import serviceImg from '../../vendor/images/servis.png';
import arrowImg from '../../vendor/images/button_forward.png';

const Service: React.FC = () => {
  return (
    <section className={styles.service}>
      <div className={styles['service__content']}>
        <h1 className={styles['service__title']}>сервисное обслуживание</h1>
        <ul className={styles['service__list']}>
          <li className={styles['service__item']}>
            Профессиональный подход: Наши сервисные центры обслуживаются опытными специалистами,
            обладающими глубокими знаниями и навыками в области ремонта и технического обслуживания штукатурных станций.
          </li>
          <li className={styles['service__item']}>
            Качество и надежность: Мы гарантируем использование только оригинальных запчастей и материалов при ремонте вашего оборудования, чтобы обеспечить его долгий срок службы и безупречную работу.
          </li>
          <li className={styles['service__item']}>
            Быстрота и эффективность: Мы ценим ваше время, поэтому наши сервисные центры работают оперативно и эффективно, чтобы ваше оборудование было отремонтировано в кратчайшие сроки.
          </li>
          <li className={styles['service__item']}>
            Поддержка и консультации: Наши специалисты всегда готовы помочь вам с любыми вопросами и проблемами, связанными с эксплуатацией и обслуживанием штукатурных станций PerSoniya.
          </li>
        </ul>
        <Link to="/guarantee-city" className={styles['service__link']}>
          Сервисные центры
          <img src={arrowImg} alt="Стрелка" className={styles['service__arrow']} />
        </Link>
      </div>
      <div className={styles['service__image-container']}>
        <img
          src={serviceImg}
          alt="Service Equipment"
          className={styles['service__image']}
        />
      </div>
    </section>
  );
};

export default Service;