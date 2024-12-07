import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.content}>
        <nav>
          <a className={styles.a} href="https://t.me/kwls13" target="_blank"  rel="noopener noreferrer">Еблан</a>
          <a className={styles.a} href="https://t.me/P4NZ3RKAWASAKI" target="_blank"  rel="noopener noreferrer">Кореш Еблана</a>
          <a className={styles.a} href="https://t.me/P4NZ3RKAWASAKI" target="_blank"  rel="noopener noreferrer">Кореш Еблана</a>
          <a className={styles.a} href="https://t.me/P4NZ3RKAWASAKI" target="_blank"  rel="noopener noreferrer">Кореш Еблана</a>
        </nav>
        <h1 className={styles.h1}>Магазин</h1>
      </div>
    </div>
  );
};

export default Footer;
