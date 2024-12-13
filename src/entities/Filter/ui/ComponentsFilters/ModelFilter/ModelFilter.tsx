import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../../../app/store';
import { setModel } from '../../../model/FilterSlice';
import { MOCK_MODELS } from '../mocks';
import styles from './ModelFilter.module.scss'

const ModelFilter: React.FC = () => {
  const dispatch = useDispatch();
  const model = useSelector((state: RootState) => state.filters.model);
  

  return (
    <div className={styles.filter}>
      <label htmlFor="model" className={styles.label} >Модель:</label>
      <select 
        id="model"
        className={styles.select}
        value={model}  
        onChange={(e) => dispatch(setModel(e.target.value))}
      >
        <option value="">Все модели</option>
        {MOCK_MODELS.map((model) => (
          <option key={model} value={model}>
            {model}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ModelFilter;
