import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../../../app/store';
import { setPriceRange } from '../../../model/FilterSlice';
import { MOCK_PRICE_RANGES } from '../mocks'; 
import styles from './PriceFilter.module.scss'

const PriceFilter: React.FC = () => {
  const dispatch = useDispatch();
  const priceRange = useSelector((state: RootState) => state.filters.priceRange);

  return (
    <div className={styles.filter}>
      <label htmlFor="price" className={styles.label} >Цена:</label>
      <select 
        id="price"
        className={styles.select}
        value={priceRange} 
        onChange={(e) => dispatch(setPriceRange(e.target.value))}>
        <option value="">Все цены</option>
        {MOCK_PRICE_RANGES.map((range) => (
          <option key={range} value={range}>
            {range} руб.
          </option>
        ))}
      </select>
    </div>
  );
};

export default PriceFilter;
