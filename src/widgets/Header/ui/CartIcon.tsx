import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FaShoppingCart } from 'react-icons/fa'; // React Icons
import styles from './CartIcon.module.scss';

const CartIcon = () => {
  const cartItemsCount = useSelector((state: any) =>
    state.cart.items.reduce((total: number, item: any) => total + item.quantity, 0)
  );

  return (
    <Link to="/cart" className={styles.link}>
      <div className={styles.cartIcon}>
        <FaShoppingCart className={styles.icon} aria-label="Cart" />
        {cartItemsCount > 0 && (<span className={styles.count}>{cartItemsCount}</span>)}
      </div>
    </Link>
  );
};

export default CartIcon;

