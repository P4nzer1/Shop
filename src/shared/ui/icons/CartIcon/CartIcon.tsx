import { Link } from 'react-router-dom';

import { FaShoppingCart } from 'react-icons/fa'; 
import styles from './CartIcon.module.scss';

const CartIcon = () => {
  

  return (
    <Link to="/cart" className={styles.link}>
        <FaShoppingCart className={styles.icon} aria-label="Cart" />
    </Link>
  );
};

export default CartIcon;

