import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../app/store'; 

const CartTotal = () => {
  const total = useSelector((state: RootState) =>
    state.cart.items.reduce(
      (sum: number, item: any) => sum + item.price * item.quantity,
      0
    )
  );

  const itemCount = useSelector((state: RootState) =>
    state.cart.items.reduce((count: number, item: any) => count + item.quantity, 0)
  );

  return (
    <div>
      <h3>Итоговая стоимость</h3>
      <p>
        <strong>Количество товаров:</strong> {itemCount}
      </p>
      <p>
        <strong>Общая сумма:</strong> {total} ₽
      </p>
      <button>
        Оформить заказ
      </button>
    </div>
  );
};

export default CartTotal;
