import { Link } from 'react-router-dom';
import styles from './OrderLink.module.scss'

const Order = () => {
  return (
    <Link to="/order" className={styles.link}>Мои заказы</Link>
  );
};
export default Order;
