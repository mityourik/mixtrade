// import styles from './Equip.module.scss';
// import BM670 from '../../vendor/images/carousel/mixcement.png';
// import bm670img from '../../vendor/images/buttons/button_bm670.png';
// import { Link } from 'react-router-dom';

// const Equip: React.FC = () => {
//   return (
//     <section className={styles.equip}>
//       <div className={styles['equip__grid']}>
//         <h1 className={styles['equip__title']}>bm-670</h1>
//         <h3 className={styles['equip__subtitle']}>бетоносмеситель</h3>
//         <p className={styles['equip__text']}>
//           Поддержка и консультации: Наши специалисты всегда готовы помочь вам с любыми вопросами и проблемами,
//           связанными с эксплуатацией и обслуживанием штукатурных станций Personiya.
//         </p>
//         <button className={styles['equip__button_back']}></button>
//         <div className={styles['equip__container-image']}>
//           <img className={styles['equip__image']} src={BM670} alt="equip" />
//         </div>
//         <button className={styles['equip__button_forward']}></button>
//         <Link to="/order-page" className={styles['equip__about-button']}>
//           <img className={styles['equip__about-image']} src={bm670img} alt="Подробнее о BM-670" />
//           Подробнее
//         </Link>
//       </div>
//     </section>
//   );
// };

// export default Equip;

import React, { useState } from 'react';
import styles from './Equip.module.scss';
import { Link } from 'react-router-dom';

// Импортируем изображения оборудования
import BM670 from '../../vendor/images/carousel/mixcement.png';
import XLStation from '../../vendor/images/xl.png';

// Импортируем изображения для кнопки "Подробнее"
import bm670img from '../../vendor/images/buttons/button_bm670.png';
import xlImg from '../../vendor/images/buttons/button_xl.png';

const equipmentItems = [
  {
    title: 'BM-670',
    subtitle: 'Бетоносмеситель',
    text: 'Поддержка и консультации: Наши специалисты всегда готовы помочь вам с любыми вопросами и проблемами, связанными с эксплуатацией и обслуживанием штукатурных станций Personiya.',
    image: BM670,
    detailImage: bm670img,
    link: '/order-page',
    orderData: {
      title: 'BM-670',
      subtitle: 'Бетоносмеситель',
      description: 'Описание BM-670...',
      specs: [
        'Электропитание: 220V',
        'Мощность: 5 кВт',
        // Добавьте другие характеристики
      ],
      warranty: '12 месяцев',
      price: '400000 Р.',
      image: BM670,
    },
  },
  {
    title: 'XL',
    subtitle: 'Штукатурная станция',
    text: 'PERSONIYA XL - штукатурная станция, предназначенная для качественного и быстрого нанесения сухих строительных смесей.',
    image: XLStation,
    detailImage: xlImg,
    link: '/order-page',
    orderData: {
      title: 'XL',
      subtitle: 'Штукатурная станция',
      description: 'PERSONIYA XL - штукатурная станция, предназначенная для качественного и быстрого нанесения сухих строительных смесей...',
      specs: [
        'Электропитание: 220/380 V',
        'Дальность подачи: до 15 м',
        // Добавьте другие характеристики
      ],
      warranty: '14 месяцев',
      price: '600000 Р.',
      image: XLStation,
    },
  },
  // Добавьте другие элементы оборудования по необходимости
];

const Equip: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % equipmentItems.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (currentIndex - 1 + equipmentItems.length) % equipmentItems.length
    );
  };

  const currentItem = equipmentItems[currentIndex];

  return (
    <section className={styles.equip}>
      <div className={styles['equip__grid']}>
        <h1 className={styles['equip__title']}>{currentItem.title}</h1>
        <h3 className={styles['equip__subtitle']}>{currentItem.subtitle}</h3>
        <p className={styles['equip__text']}>{currentItem.text}</p>
        <button
          className={styles['equip__button_back']}
          onClick={handlePrev}
        ></button>
        <div className={styles['equip__container-image']}>
          <img
            className={styles['equip__image']}
            src={currentItem.image}
            alt={currentItem.title}
          />
        </div>
        <button
          className={styles['equip__button_forward']}
          onClick={handleNext}
        ></button>
        <Link
          to={{
            pathname: currentItem.link,
          }}
          state={currentItem.orderData}
          className={styles['equip__about-button']}
        >
          <img
            className={styles['equip__about-image']}
            src={currentItem.detailImage}
            alt={`Подробнее о ${currentItem.title}`}
          />
          Подробнее
        </Link>
      </div>
    </section>
  );
};

export default Equip;