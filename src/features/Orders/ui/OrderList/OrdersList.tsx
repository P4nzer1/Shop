import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchOrdersRequest } from '../../model/ordersSlice';
import { RootState } from '../../../../app/store';
import OrderDetails from '../OrderDetails/OrdersDetails';
import { Spinner } from '../../../../shared/ui/components/Spinner';
import styles from './OrdersList.module.scss'; 

const OrderList = () => {
  const dispatch = useDispatch();
  const { orders, loading, error } = useSelector((state: RootState) => state.order);

  useEffect(() => {
    dispatch(fetchOrdersRequest());
  }, [dispatch]);

  // Заглушка
  const fakeOrders = [
    {
      id: '12345',
      items: [{ name: 'Товар 1', quantity: 1, price: 80500 }],
      total: 4,
      status: 'Выполнен',
    },
    {
      id: '67890',
      items: [{ name: 'Товар 2', quantity: 2, price: 98300 }],
      total: 2,
      status: 'В обработке',
    },
  ];

  const ordersToDisplay = orders.length > 0 ? orders : fakeOrders;


  if (loading) return <Spinner/>; 
  //if (error) return <p>Ошибка: {error}</p>;
  if (!ordersToDisplay.length) return <p>У вас нет заказов.</p>;

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
