import { useState } from 'react';
import styles from './Equip.module.scss';
import { Link } from 'react-router-dom';

// Импортируем изображения оборудования
import BM670 from '../../vendor/images/carousel/mixcement.png';
import XLStation from '../../vendor/images/carousel/xl.png';
import VStation from '../../vendor/images/carousel/v-series.png';
import pumpMinStation from '../../vendor/images/carousel/pumpmin.png';

// Импортируем изображения для кнопки "Подробнее"
import bm670img from '../../vendor/images/buttons/button_bm670.png';
import xlImg from '../../vendor/images/buttons/button_xl.png';
import vImg from '../../vendor/images/buttons/button_v-series.png';
import pumpMinImg from '../../vendor/images/buttons/button_rm-l.png';

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
        // другие характеристики
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
        // другие характеристики
      ],
      warranty: '14 месяцев',
      price: '600000 Р.',
      image: XLStation,
    },
  },
  {
    title: 'VS',
    subtitle: 'Штукатурная станция',
    text: 'PERSONIYA V-Seria - штукатурная станция, предназначенная для качественного и быстрого нанесения сухих строительных смесей.',
    image: VStation,
    detailImage: vImg,
    link: '/order-page',
    orderData: {
      title: 'VS', // Исправлено с 'XL' на 'VS'
      subtitle: 'Штукатурная станция',
      description: 'PERSONIYA V-Seria - штукатурная станция, предназначенная для качественного и быстрого нанесения сухих строительных смесей...',
      specs: [
        'Электропитание: 220/380 V',
        'Дальность подачи: до 20 м',
        // другие характеристики специфичные для VS
      ],
      warranty: '14 месяцев',
      price: '650000 Р.',
      image: VStation,
    },
  },
  {
    title: 'PumpMin',
    subtitle: 'Штукатурная станция',
    text: 'PERSONIYA PumpMin - компактная штукатурная станция для небольших объектов.',
    image: pumpMinStation,
    detailImage: pumpMinImg,
    link: '/order-page',
    orderData: {
      title: 'PumpMin',
      subtitle: 'Штукатурная станция',
      description: 'PERSONIYA PumpMin - компактная штукатурная станция для небольших объектов...',
      specs: [
        'Электропитание: 220V',
        'Дальность подачи: до 10 м',
        // другие характеристики специфичные для PumpMin
      ],
      warranty: '12 месяцев',
      price: '550000 Р.',
      image: pumpMinStation,
    },
  },
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
          to={currentItem.link}
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