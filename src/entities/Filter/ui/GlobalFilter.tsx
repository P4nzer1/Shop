import React from 'react';
import BrandFilter from './ComponentsFilters/BrandFilter/BrandFilter';
import PriceFilter from './ComponentsFilters/PriceFilter/PriceFilter';
import ModelFilter from './ComponentsFilters/ModelFilter/ModelFilter';
import AvailabilityFilter from './ComponentsFilters/AvailabilityFilter/AvailabilityFilter';
import styles from './GlobalFilter.module.scss'

const GlobalFilter: React.FC = () => {
  return (
    <div className={styles.conteiner}>
      <div className={styles.filter}>
         <BrandFilter />
         <PriceFilter />
         <ModelFilter />
         <AvailabilityFilter />
      </div>
    </div>
  );
};

export default GlobalFilter;
