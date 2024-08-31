import React, { useState } from 'react';
import styles from './Header.module.scss';
import whiteLogo from '../../vendor/images/personiya-white.svg';

const Header: React.FC = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleBurger = () => {
    setIsActive(!isActive);
  };

  return (
    <header className={styles.header}>
      <img className={styles.header__logo} src={whiteLogo} alt="Logo" />
      <div
        className={`${styles.header__burger} ${
          isActive ? styles['header__burger__active'] : ''
        }`}
        onClick={toggleBurger}
      >
        <span className={styles['header__burger-line']}/>
        <span className={styles['header__burger-line']}/>
      </div>
    </header>
  );
};

export default Header;