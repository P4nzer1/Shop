import React from 'react';

import Header from '../../widgets/Header/Header';
import Footer from '../../widgets/Footer/Footer';
import MainCatalog from '../../widgets/Main/MainCatalog/MainCatalog';

const CatalogPage: React.FC = () => {
  return (
    <>
      <Header />
      <MainCatalog />
      <Footer />
    </>
  );
};

export default CatalogPage;

