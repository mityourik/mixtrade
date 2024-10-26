import React, { useState } from 'react';
import styles from './Header.module.scss';
import whiteLogo from '../../vendor/images/personiya-white.svg';
import About from '../About/About';

const Header: React.FC = () => {
  const [isAboutActive, setIsAboutActive] = useState(false);

  const toggleAbout = () => {
    setIsAboutActive(!isAboutActive);
  };

  return (
    <>
      <header className={styles.header}>
        <img className={styles.header__logo} src={whiteLogo} alt="Logo" />
      </header>
      <About isActive={isAboutActive} onClose={toggleAbout} />
      <div
        className={`${styles.header__burger} ${
          isAboutActive ? styles.header__burger_active : ''
        }`}
        onClick={toggleAbout}
      >
        <span className={styles.header__burger_line} />
        <span className={styles.header__burger_line} />
      </div>
    </>
  );
};

export default Header;