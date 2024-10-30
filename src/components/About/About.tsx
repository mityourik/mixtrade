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
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isActive]);

  return (
    <div className={`${styles.about} ${isActive ? styles['about--active'] : ''}`}>
      <div className={styles.about__content}>
        <div className={styles.about__column}>
          <div className={styles['about__image-container']}>
            <img className={styles.about__image} src={logoImage} alt="Logo Personia" />
          </div>
          <h2 className={styles.about__title}>О компании</h2>
          <p className={styles.about__description}>
            Мы стремимся быть лидерами в индустрии штукатурного оборудования, предоставляя нашим
            клиентам инновационные и надежные решения для достижения идеальных результатов в строительстве.
            Наша цель — вдохновлять профессионалов с техникой, которая делает их работу более эффективной,
            качественной и удобной.
          </p>
        </div>
        <div className={styles.about__column}>
          <p className={styles.about__description}>
            История PerSonia:
            В 2019 году группа энтузиастов и профессионалов в области строительства объединились,
            чтобы создать бренд, который станет символом инноваций и качества в сфере штукатурных
            станций. Именно в этот год была основана компания PerSonia с ясной миссией - разработать 
            и предложить рынку штукатурное оборудование нового поколения.
            С первого дня основания PerSonia уделяла особое внимание исследованиям и разработкам, 
            стремясь к созданию продуктов, которые сочетают в себе высокую производительность, 
            надежность и инновационные технологии. Благодаря усилиям нашей команды инженеров и 
            дизайнеров, мы представили на рынке штукатурное оборудование, которое стало незаменимым 
            инструментом для многих строительных проектов.
            С каждым годом PerSonia продолжает развиваться, расширяя ассортимент продукции и улучшая 
            качество предоставляемых услуг. Мы гордимся тем, что наша продукция помогает профессионалам 
            строительной отрасли достигать выдающихся результатов, и мы стремимся быть надежным партнером 
            для всех, кто ценит качество и надежность в своей работе.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;