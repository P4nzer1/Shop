import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.content}>
        <nav>
          <a className={styles.a} href="#link1">Контакт</a>
        </nav>
        <h1>Footer Title</h1>
      </div>
    </div>
  );
};

export default Footer;
