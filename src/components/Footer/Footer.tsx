import styles from './Footer.module.scss';
import footerLogo from '../../vendor/images/bottom.png';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <img src={footerLogo} alt="logo" className={styles['footer__logo']}/>
      <div className={styles['footer__credit-container']}>
        <p className={styles['footer__credit']}>design: Slava Egorov</p>
      </div>
    </footer>
  );
};

export default Footer;