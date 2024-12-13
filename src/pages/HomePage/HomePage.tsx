import React from 'react';

import Header from '../../widgets/Header/Header';
import Footer from '../../widgets/Footer/Footer';
import MainHome from '../../widgets/Main/MainHome/MainHome';

const HomePage: React.FC = () => {
  

  return (
    <>
      <Header/>
      <MainHome/>
      <Footer />
    </>
  );
};

export default HomePage;
