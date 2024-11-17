import React, { useRef, useState, useEffect } from 'react';
import styles from './HeroSection.module.scss';
import heroVideo from '../../vendor/images/video/xl_web_60fps.mp4';

const HeroSection: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVideoPlaying, setIsVideoPlaying] = useState<boolean>(false);
  const [showMainText, setShowMainText] = useState<boolean>(false);

  const handlePlayVideo = () => {
    if (videoRef.current) {
      videoRef.current.muted = true; // Убедимся, что видео без звука
      const playPromise = videoRef.current.play();

      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsVideoPlaying(true);
          })
          .catch((error) => {
            console.error('Ошибка при попытке воспроизвести видео:', error);
          });
      }
    }
  };

  useEffect(() => {
    const video = videoRef.current;
    if (video && isVideoPlaying) {
      const handleTimeUpdate = () => {
        if (video.currentTime >= video.duration / 2) {
          setShowMainText(true);
          video.removeEventListener('timeupdate', handleTimeUpdate);
        }
      };

      video.addEventListener('timeupdate', handleTimeUpdate);

      return () => {
        video.removeEventListener('timeupdate', handleTimeUpdate);
      };
    }
  }, [isVideoPlaying]);

  return (
    <section className={styles.hero}>
      {!isVideoPlaying && (
        <button
          type="button"
          className={styles.hero__button}
          onClick={handlePlayVideo}
        >
          Увидеть
        </button>
      )}
      <div
        className={`${styles.hero__container} ${
          showMainText ? styles.visible : ''
        }`}
      >
        <h1 className={styles.hero__title}>штукатурные бизнес решения</h1>
        <p className={styles.hero__subtitle}>
          Хотите добиться идеального баланса в своем бизнесе?
          С штукатурным оборудованием от Personiya вы сможете точно настроить
          свой бизнес-процесс на путь к успеху! Отличное оборудование —
          залог качественных результатов!
        </p>
        <h2 className={styles['hero__hero-title']}>
          персония хл от 600 000 р
        </h2>
      </div>
      <video
        className={styles.hero__video}
        src={heroVideo}
        muted
        playsInline
        ref={videoRef}
        // Удалили атрибут autoPlay
      ></video>
    </section>
  );
};

export default HeroSection;