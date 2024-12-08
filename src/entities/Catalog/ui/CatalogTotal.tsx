import React from 'react';

interface CatalogTotalProps {
  total: number;
}

const CatalogTotal: React.FC<CatalogTotalProps> = ({ total }) => {
  return <h2>Всего товаров: {total}</h2>;
};

export default CatalogTotal;
