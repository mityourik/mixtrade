import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.scss';
import whiteLogo from '../../vendor/images/personiya-white.svg';
import About from '../About/About';

const Header: React.FC = () => {
  const [isAboutActive, setIsAboutActive] = useState(false);

  const toggleAbout = () => {
    setIsAboutActive(!isAboutActive);
  };

  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsAboutActive(false);
  };

  return (
    <>
      <header className={styles.header}>
        <Link
          to="/mixtrade"
          className={styles['header__logo-link']}
          onClick={handleLogoClick}
        >
          <img className={styles.header__logo} src={whiteLogo} alt="Logo" />
        </Link>
        <div
          className={`${styles.header__burger} ${
            isAboutActive ? styles.header__burger_active : ''
          }`}
          onClick={toggleAbout}
        >
          <span className={styles.header__burger_line} />
          <span className={styles.header__burger_line} />
        </div>
      </header>
      <About isActive={isAboutActive} onClose={toggleAbout} />
    </>
  );
};

export default Header;