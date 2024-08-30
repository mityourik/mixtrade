import React from 'react';
import styles from './HeroSection.module.scss';
import heroVideo from '../../vendor/images/Top.mp4';

const HeroSection: React.FC = () => {
  return (
    <section className={styles.hero}>
      <div className={styles['hero__video-wrapper']}>
        <video className={styles['hero__video']} src={heroVideo} muted autoPlay playsInline></video>
      </div>
      <h2 className={styles['hero__content']}>Hero section content</h2>
    </section>
  );
};

export default HeroSection;