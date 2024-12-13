import { Link } from 'react-router-dom';

import { FaShoppingCart } from 'react-icons/fa'; 
import styles from './CartLink.module.scss';

const Cart = () => {
  

  return (
    <Link to="/cart" className={styles.link}>
        <FaShoppingCart className={styles.icon} aria-label="Cart" />
    </Link>
  );
};

export default Cart;

