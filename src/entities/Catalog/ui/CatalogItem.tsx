import React from 'react';
interface CatalogItemProps {
  id: string;
  name: string;
  price: number;
}

const CatalogItem: React.FC<CatalogItemProps> = ({ name, price }) => {
  return (
    <div>
      <h3>{name}</h3>
      <p>Цена: {price} руб.</p>
    </div>
  );
};

export default CatalogItem;
