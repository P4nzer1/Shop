import React from 'react';
import { useSelector } from 'react-redux';
import CartItem from '../../entities/Cart/ui/CartItem';
import CartTotal from '../../entities/Cart/ui/CartTotal';

const CartPage = () => {
  const cartItems = useSelector((state: any) => state.cart.items);

  return (
    <div>
      <h1>Ваша корзина</h1>
      {cartItems.length === 0 ? (
        <p>Ваша корзина пуста</p>
      ) : (
        <div>
          {cartItems.map((item: any) => (
            <CartItem key={item.id} {...item} />
          ))}
          <CartTotal />
        </div>
      )}
    </div>
  );
};

export default CartPage;
