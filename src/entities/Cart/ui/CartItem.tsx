import React from 'react';
import { useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from '../model/cartSlice';

const CartItem = ({ id, name, price, quantity, image }: any) => {
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeItem(id));
  };

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newQuantity = parseInt(e.target.value, 10);
    dispatch(updateQuantity({ id, quantity: newQuantity }));
  };

  return (
    <div>
      <img src={image} alt={name} />
      <div>
        <p>{name}</p>
        <p>Цена: {price} ₽</p>
        <input type="number" value={quantity} onChange={handleQuantityChange} min="1" />
        <button onClick={handleRemove}>Удалить</button>
      </div>
    </div>
  );
};

export default CartItem;
