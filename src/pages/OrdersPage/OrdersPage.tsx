import React from 'react';
import OrderList from '../../features/Orders/ui/OrdersList';
import Header from '../../widgets/Header/Header';
import Footer from '../../widgets/Footer/Footer';


const OrderPage: React.FC = () => {

  return (
    <div>
        <Header />
        <OrderList />
        <Footer />
    </div>
  );
};

export default OrderPage;
