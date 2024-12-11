import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../../../app/store';
import { setBrand } from '../../../model/FilterSlice';
import { MOCK_BRANDS } from '../mocks';
import styles from './BrandFilter.module.scss'

const BrandFilter: React.FC = () => {
  const dispatch = useDispatch();
  const brand = useSelector((state: RootState) => state.filters.brand);


  return (
    <div className={styles.filter}>
      <label htmlFor="brand" className={styles.label} >Бренд:</label>
      <select 
        id="brand"
        className={styles.select}
        value={brand} 
        onChange={(e) => dispatch(setBrand(e.target.value))}
      >
        <option value="">Все бренды</option>
        {MOCK_BRANDS.map((brand) => (
          <option key={brand} value={brand}>
            {brand}
          </option>
        ))}
      </select>
    </div>
  );
};

export default BrandFilter;
