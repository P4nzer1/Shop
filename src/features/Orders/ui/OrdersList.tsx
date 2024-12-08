import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchOrdersRequest } from '../model/ordersSlice';
import { RootState } from '../../../app/store';
import OrderDetails from './OrdersDetails';
import styles from './OrdersList.module.scss'; 

const OrderList: React.FC = () => {
  const dispatch = useDispatch();
  const { orders, loading, error } = useSelector((state: RootState) => state.order);

  useEffect(() => {
    dispatch(fetchOrdersRequest());
  }, [dispatch]);

  // Заглушки данных для демонстрации
  const fakeOrders = [
    {
      id: '12345',
      items: [{ name: 'Товар 1', quantity: 1, price: 500 }],
      total: 500,
      status: 'Выполнен',
    },
    {
      id: '67890',
      items: [{ name: 'Товар 2', quantity: 2, price: 300 }],
      total: 600,
      status: 'В обработке',
    },
  ];

  const ordersToDisplay = orders.length > 0 ? orders : fakeOrders;

  if (loading) return <p>Загрузка заказов...</p>;
  //if (error) return <p>Ошибка: {error}</p>;
  if (ordersToDisplay.length === 0) return <p>У вас нет заказов.</p>;

  return (
    <div className={styles.list}>
      <h1>Мои заказы</h1>
      {ordersToDisplay.map((order) => (
        <OrderDetails key={order.id} order={order} />
      ))}
    </div>
  );
};

export default OrderList;
