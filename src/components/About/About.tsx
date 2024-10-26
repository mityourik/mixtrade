// import styles from './About.module.scss';
// import logoImage from '../../vendor/images/story.jpg';

// interface AboutProps {
//   isActive: boolean;
//   onClose: () => void;
// }

// const About: React.FC<AboutProps> = ({ isActive }) => {
//   return (
//     <div className={`${styles.about} ${isActive ? styles['about--active'] : ''}`}>
//       <div className={styles.about__content}>
//         <img className={styles.about__image} src={logoImage} alt="Personia Logo" />
//         <div className={styles.about__text}>
//           <h2 className={styles.about__title}>О компании</h2>
//           <p className={styles.about__description}>
//             Мы стремимся быть лидерами в индустрии штукатурного оборудования, предоставляя нашим
//             клиентам инновационные и надежные решения для достижения идеальных результатов в строительстве.
//             Наша цель - вдохновлять профессионалов с техникой, которая делает их работу более эффективной,
//             качественной и удобной.
//           </p>
//           <p className={styles.about__description}>
//             История PerSonia: В 2019 году группа энтузиастов и профессионалов в области строительства
//             объединились, чтобы создать бренд, который станет символом инноваций и качества в сфере
//             штукатурных станций. С каждым годом мы расширяем ассортимент и повышаем качество.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default About;

import React, { useEffect } from 'react';
import styles from './About.module.scss';
import logoImage from '../../vendor/images/story.jpg';

interface AboutProps {
  isActive: boolean;
  onClose: () => void;
}

const About: React.FC<AboutProps> = ({ isActive }) => {
  useEffect(() => {
    if (isActive) {
      // Отключаем прокрутку страницы при открытии About
      document.body.style.overflow = 'hidden';
    } else {
      // Включаем прокрутку страницы при закрытии About
      document.body.style.overflow = '';
    }

    // Очистка при размонтировании компонента
    return () => {
      document.body.style.overflow = '';
    };
  }, [isActive]);

  return (
    <div className={`${styles.about} ${isActive ? styles['about--active'] : ''}`}>
      <div className={styles.about__content}>
        <img className={styles.about__image} src={logoImage} alt="Personia Logo" />
        <div className={styles.about__text}>
          <h2 className={styles.about__title}>О компании</h2>
          <p className={styles.about__description}>
            Мы стремимся быть лидерами в индустрии штукатурного оборудования, предоставляя нашим
            клиентам инновационные и надежные решения для достижения идеальных результатов в строительстве.
            Наша цель - вдохновлять профессионалов с техникой, которая делает их работу более эффективной,
            качественной и удобной.
          </p>
          <p className={styles.about__description}>
            История PerSonia: В 2019 году группа энтузиастов и профессионалов в области строительства
            объединились, чтобы создать бренд, который станет символом инноваций и качества в сфере
            штукатурных станций. С каждым годом мы расширяем ассортимент и повышаем качество.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;