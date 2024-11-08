import React from 'react';
import styles from './LoadingSpinner.module.scss';

const LoadingSpinner: React.FC = () => (
  <div className={styles['loading-spinner']}>
    <div className={styles['spinner']}></div>
  </div>
);

export default LoadingSpinner;