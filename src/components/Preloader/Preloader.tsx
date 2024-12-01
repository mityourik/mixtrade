import React from 'react';
import { Player } from '@lottiefiles/react-lottie-player';
import preloaderAnimation from '../../vendor/images/preloader/main-preloader.json';
import styles from './Preloader.module.scss';

const Preloader: React.FC = () => {
  return (
    <div className={styles.preloader}>
      <Player
        autoplay
        loop
        src={preloaderAnimation}
        style={{ height: '300px', width: '300px' }}
      />
    </div>
  );
};

export default Preloader;