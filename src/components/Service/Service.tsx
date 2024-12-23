// import { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import styles from './Service.module.scss';
// import serviceImg from '../../vendor/images/servis.png';
// import serviceImgMobile from '../../vendor/images/service-mob.png';
// import arrowImg from '../../vendor/images/button_forward.png';

// const Service: React.FC = () => {
//   const [imageSrc, setImageSrc] = useState(serviceImg);

//   const handleResize = () => {
//     if (window.innerWidth <= 550) {
//       setImageSrc(serviceImgMobile);
//     } else {
//       setImageSrc(serviceImg);
//     }
//   };

//   useEffect(() => {
//     handleResize();
//     window.addEventListener('resize', handleResize);

//     return () => {
//       window.removeEventListener('resize', handleResize);
//     };
//   }, []);

//   return (
//     <section className={styles.service}>
//       <div className={styles['service__content']}>
//         <h1 className={styles['service__title']}>сервисное обслуживание</h1>
//         <ul className={styles['service__list']}>
//           <li className={styles['service__item']}>
//             Профессиональный подход: Наши сервисные центры обслуживаются опытными специалистами,
//             обладающими глубокими знаниями и навыками в области ремонта и технического обслуживания штукатурных станций.
//           </li>
//           <li className={styles['service__item']}>
//             Качество и надежность: Мы гарантируем использование только оригинальных запчастей и материалов при ремонте вашего оборудования, чтобы обеспечить его долгий срок службы и безупречную работу.
//           </li>
//           <li className={styles['service__item']}>
//             Быстрота и эффективность: Мы ценим ваше время, поэтому наши сервисные центры работают оперативно и эффективно, чтобы ваше оборудование было отремонтировано в кратчайшие сроки.
//           </li>
//           <li className={styles['service__item']}>
//             Поддержка и консультации: Наши специалисты всегда готовы помочь вам с любыми вопросами и проблемами, связанными с эксплуатацией и обслуживанием штукатурных станций PerSoniya.
//           </li>
//         </ul>
//         <Link to="/service-city" className={styles['service__link']}>
//           Сервисные центры
//           <img src={arrowImg} alt="Стрелка" className={styles['service__arrow']} />
//         </Link>
//       </div>
//       <div className={styles['service__image-container']}>
//         <img
//           src={imageSrc}
//           alt="Изображение станка для ремонта"
//           className={styles['service__image']}
//         />
//       </div>
//     </section>
//   );
// };

// export default Service;

import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './Service.module.scss';
import serviceImg from '../../vendor/images/servis.png';
import serviceImgMobile from '../../vendor/images/service-mob.png';
import arrowImg from '../../vendor/images/button_forward.png';

const Service: React.FC = () => {
  // Отслеживаем: мобильное устройство (≤ 550px) или нет
  const [isMobile, setIsMobile] = useState<boolean>(false);
  // Храним текущий src для картинки
  const [imageSrc, setImageSrc] = useState<string>(serviceImg);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= 550;
      setIsMobile(mobile);
      setImageSrc(mobile ? serviceImgMobile : serviceImg);
    };

    // Вызовем при монтировании и подпишемся на изменение размера
    handleResize();
    window.addEventListener('resize', handleResize);

    // Очистка при размонтировании
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section className={styles.service}>
      {/* Если мобильный экран — переставляем заголовок внутрь контейнера изображения */}
      {isMobile ? (
        <>
          <div className={styles['service__image-container']}>
            <h1 className={styles['service__title']}>сервисное обслуживание</h1>
            <img
              src={imageSrc}
              alt="Изображение станка для ремонта"
              className={styles['service__image']}
            />
          </div>

          <div className={styles['service__content']}>
            <ul className={styles['service__list']}>
              <li className={styles['service__item']}>
                Профессиональный подход: Наши сервисные центры обслуживаются опытными специалистами,
                обладающими глубокими знаниями и навыками в области ремонта и технического обслуживания
                штукатурных станций.
              </li>
              <li className={styles['service__item']}>
                Качество и надежность: Мы гарантируем использование только оригинальных запчастей и
                материалов при ремонте вашего оборудования, чтобы обеспечить его долгий срок службы
                и безупречную работу.
              </li>
              <li className={styles['service__item']}>
                Быстрота и эффективность: Мы ценим ваше время, поэтому наши сервисные центры работают
                оперативно и эффективно, чтобы ваше оборудование было отремонтировано в кратчайшие сроки.
              </li>
              <li className={styles['service__item']}>
                Поддержка и консультации: Наши специалисты всегда готовы помочь вам с любыми вопросами
                и проблемами, связанными с эксплуатацией и обслуживанием штукатурных станций PerSoniya.
              </li>
            </ul>
            <Link to="/service-city" className={styles['service__link']}>
              Сервисные центры
              <img src={arrowImg} alt="Стрелка" className={styles['service__arrow']} />
            </Link>
          </div>
        </>
      ) : (
        // Иначе (если НЕ мобильный) — оставляем «старую» верстку
        <>
          <div className={styles['service__content']}>
            <h1 className={styles['service__title']}>сервисное обслуживание</h1>
            <ul className={styles['service__list']}>
              <li className={styles['service__item']}>
                Профессиональный подход: Наши сервисные центры обслуживаются опытными специалистами,
                обладающими глубокими знаниями и навыками в области ремонта и технического обслуживания
                штукатурных станций.
              </li>
              <li className={styles['service__item']}>
                Качество и надежность: Мы гарантируем использование только оригинальных запчастей и
                материалов при ремонте вашего оборудования, чтобы обеспечить его долгий срок службы
                и безупречную работу.
              </li>
              <li className={styles['service__item']}>
                Быстрота и эффективность: Мы ценим ваше время, поэтому наши сервисные центры работают
                оперативно и эффективно, чтобы ваше оборудование было отремонтировано в кратчайшие сроки.
              </li>
              <li className={styles['service__item']}>
                Поддержка и консультации: Наши специалисты всегда готовы помочь вам с любыми вопросами
                и проблемами, связанными с эксплуатацией и обслуживанием штукатурных станций PerSoniya.
              </li>
            </ul>
            <Link to="/service-city" className={styles['service__link']}>
              Сервисные центры
              <img src={arrowImg} alt="Стрелка" className={styles['service__arrow']} />
            </Link>
          </div>

          <div className={styles['service__image-container']}>
            <img
              src={imageSrc}
              alt="Изображение станка для ремонта"
              className={styles['service__image']}
            />
          </div>
        </>
      )}
    </section>
  );
};

export default Service;