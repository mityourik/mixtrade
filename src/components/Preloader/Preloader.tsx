// import React from 'react';
// import { Player } from '@lottiefiles/react-lottie-player';
// import preloaderAnimation from '../../vendor/images/preloader/main-preloader.json';
// import styles from './Preloader.module.scss';

// const Preloader: React.FC = () => {
//   return (
//     <div className={styles.preloader}>
//       <Player
//         autoplay
//         loop
//         src={preloaderAnimation}
//         style={{ height: '300px', width: '300px' }}
//       />
//     </div>
//   );
// };

// export default Preloader;

import React, { useContext } from 'react';
import { LoadingContext } from '../../contexts/LoadingContext';

const Preloader: React.FC = () => {
  const { progress } = useContext(LoadingContext);

  return (
    <div style={{
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center', 
      height: '100vh'
    }}>
      <p>Загружается сайт... {progress}%</p>
      <div style={{width: '200px', height: '10px', background: '#ccc'}}>
        <div style={{
          width: `${progress}%`, 
          height: '100%', 
          background: 'green', 
          transition: 'width 0.3s'
        }}></div>
      </div>
    </div>
  );
};

export default Preloader;