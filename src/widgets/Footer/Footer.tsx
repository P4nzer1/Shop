import { linksFooter } from '../constants';
import styles from './Footer.module.scss';

const Footer = () => {

  return (
    <div className={styles.footer}>
      <div className={styles.content}>
        <nav className={styles.nav}>
          {linksFooter.map((LinkComponent, index) => (
            <LinkComponent key={index} />
          ))}
        </nav>
      </div>
    </div>
  );
};

export default Footer;
