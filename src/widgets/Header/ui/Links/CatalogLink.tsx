import { Link } from 'react-router-dom';
import styles from './CatalogLink.module.scss'

const CatalogLink = () => {
  return (
    <Link to="/catalog" className={styles.link}>Каталог</Link>
  );
};
export default CatalogLink;
