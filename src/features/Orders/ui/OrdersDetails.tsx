import React from 'react';

interface OrderDetailsProps {
  order: {
    id: string;
    items: any[];
    total: number;
    status: string;
  };
}

const OrderDetails: React.FC<OrderDetailsProps> = ({ order }) => {
  return (
    <div>
      <h3>Заказ #{order.id}</h3>
      <p>Статус: {order.status}</p>
      <p>Сумма: {order.total} руб.</p>
      <ul>
        {order.items.length > 0 ? (
          order.items.map((item, index) => (
            <li key={index}>{item.name} — {item.quantity} шт.</li>
          ))
        ) : (
          <li>Нет товаров в заказе</li>
        )}
      </ul>
    </div>
  );
};

export default OrderDetails;
