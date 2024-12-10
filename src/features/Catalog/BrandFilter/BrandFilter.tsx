import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setSelectedBrand, fetchProductsRequest } from '../../../entities/Catalog/model/CatalogSlice';
import { RootState } from '../../../app/store';
import styles from './BrandFilter.module.scss';

const BrandFilter: React.FC = () => {
  const dispatch = useDispatch();
  const selectedBrand = useSelector((state: RootState) => state.catalog.selectedBrand);
  const brands = useSelector((state: RootState) => state.catalog.brands);

  const OnBrandChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedBrand = event.target.value;
    dispatch(setSelectedBrand(selectedBrand));
    dispatch(fetchProductsRequest(selectedBrand));
  };

  return (
    <div className={styles.filterSection}>
      <label htmlFor="brandFilter">Выберите бренд:</label>
      <select id="brandFilter" onChange={OnBrandChange} value={selectedBrand || ''}>
        <option value="">Все бренды</option>
        {brands.map((brand) => (
          <option key={brand} value={brand}>
            {brand}
          </option>
        ))}
      </select>
    </div>
  );
};

export default BrandFilter;
