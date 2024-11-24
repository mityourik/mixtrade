import React from 'react';
import forwardArrowImage from '../../vendor/images/button_forward.png';
import backwardArrowImage from '../../vendor/images/button_back.png';
import styles from './ArrowButton.module.scss';

interface ArrowButtonProps {
  direction: 'forward' | 'backward';
  onClick: (event: React.MouseEvent<HTMLAnchorElement | HTMLImageElement>) => void;
  text?: string;
}

const ArrowButton: React.FC<ArrowButtonProps> = ({ direction, onClick, text }) => {
  const isForward = direction === 'forward';
  const arrowImage = isForward ? forwardArrowImage : backwardArrowImage;
  const linkClassName = isForward
    ? styles.arrowButton__link
    : styles.arrowButton__back_link;

  return (
    <a href="#" className={linkClassName} onClick={onClick}>
      {isForward && text}
      <img
        src={arrowImage}
        alt={isForward ? 'Стрелка вперед' : 'Стрелка назад'}
        className={styles.arrowButton__image}
      />
    </a>
  );
};

export default ArrowButton;