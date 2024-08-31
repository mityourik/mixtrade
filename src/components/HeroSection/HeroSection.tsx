import React from 'react';
import styles from './HeroSection.module.scss';
import heroVideo from '../../vendor/images/Top.mp4';

const HeroSection: React.FC = () => {
  return (
    <section className={styles.hero}>
      <h1 className={styles.hero__title}>штукатурные бизнес решения</h1>
      <p className={styles.hero__subtitle}>Хотите добиться идеального баланса в своем бизнесе? 
        С штукатурным оборудованием от Personiya вы сможете точно настроить свой бизнес процесс 
        на путь к успеху! Отличное оборудование - залог качественных результатов!
      </p>
      <h2 className={styles['hero__hero-title']}>персония хл от 600 000 р</h2>
      <video className={styles['hero__video']} src={heroVideo} muted autoPlay playsInline loop></video>
    </section>
  );
};

export default HeroSection;