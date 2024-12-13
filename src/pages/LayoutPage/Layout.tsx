import React from 'react';
import Header from '../../widgets/Header/Header';
import Footer from '../../widgets/Footer/Footer';
import { Outlet } from 'react-router-dom';



const Layout: React.FC = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
