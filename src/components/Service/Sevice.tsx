// import styles from './Service.module.scss';
// import serviceImg from '../../vendor/images/servis.png';
// import arrowImg from '../../vendor/images/buttons/button_back.png';

// const Service: React.FC = () => {
//   return (
//     // <section className={`${styles.service} scroll-section`}>

//     <section className={styles.service}>
//       <div className={styles['service__content']}>
//         <h1 className={styles['service__title']}>сервисное обслуживание</h1>
//         <p className={styles['service__text']}>
//             Профессиональный подход: Наши сервисные центры обслуживаются опытными специалистами, 
//             обладающими глубокими знаниями и навыками в области ремонта и технического обслуживания штукатурных станций.
//         </p>
//         <p className={styles['service__text']}>
//             Качество и надежность: Мы гарантируем использование только оригинальных запчастей и материалов при ремонте вашего оборудования, чтобы обеспечить его долгий срок службы и безупречную работу.
//         </p>
//         <p className={styles['service__text']}>
//             Быстрота и эффективность: Мы ценим ваше время, поэтому наши сервисные центры работают оперативно и эффективно, чтобы ваше оборудование было отремонтировано в кратчайшие сроки.
//         </p>
//         <p className={styles['service__text']}>
//             Поддержка и консультации: Наши специалисты всегда готовы помочь вам с любыми вопросами и проблемами, связанными с эксплуатацией и обслуживанием штукатурных станций PerSoniya.
//         </p>
//         <a href="#" className={styles['service__link']}>
//           Сервисные центры
//           <img src={arrowImg} alt="Стрелка" className={styles['service__arrow']} />
//         </a>
//       </div>
//       <div className={styles['service__image-container']}>
//         <img
//           src={serviceImg}
//           alt="Service Equipment"
//           className={styles['service__image']}
//         />
//       </div>
//     </section>
//   );
// };

// export default Service;

import { Link } from 'react-router-dom';
import styles from './Service.module.scss';
import serviceImg from '../../vendor/images/servis.png';
import arrowImg from '../../vendor/images/buttons/button_back.png';

const Service: React.FC = () => {
  return (
    <section className={styles.service}>
      <div className={styles['service__content']}>
        <h1 className={styles['service__title']}>сервисное обслуживание</h1>
        <p className={styles['service__text']}>
            Профессиональный подход: Наши сервисные центры обслуживаются опытными специалистами, 
            обладающими глубокими знаниями и навыками в области ремонта и технического обслуживания штукатурных станций.
        </p>
        <p className={styles['service__text']}>
            Качество и надежность: Мы гарантируем использование только оригинальных запчастей и материалов при ремонте вашего оборудования, чтобы обеспечить его долгий срок службы и безупречную работу.
        </p>
        <p className={styles['service__text']}>
            Быстрота и эффективность: Мы ценим ваше время, поэтому наши сервисные центры работают оперативно и эффективно, чтобы ваше оборудование было отремонтировано в кратчайшие сроки.
        </p>
        <p className={styles['service__text']}>
            Поддержка и консультации: Наши специалисты всегда готовы помочь вам с любыми вопросами и проблемами, связанными с эксплуатацией и обслуживанием штукатурных станций PerSoniya.
        </p>
        <Link to="/guarantee" className={styles['service__link']}>
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