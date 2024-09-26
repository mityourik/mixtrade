import styles from './Footer.module.scss';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles['footer__content']}/>
      <p className={styles['footer__credit']}>design: Slava Egorov</p>
    </footer>
  );
};

export default Footer;