import React from 'react'; 
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../../../app/store';
import { setAvailability } from '../../../model/FilterSlice';
import { MOCK_AVAILABILITY } from '../mocks'; 
import styles from './AvailabilityFilter.module.scss';

const AvailabilityFilter: React.FC = () => {
  const dispatch = useDispatch();
  const availability = useSelector((state: RootState) => state.filters.availability);

  return (
    <div className={styles.filter}>
      <label htmlFor="availability" className={styles.label}>Наличие:</label>
      <select
        id="availability"
        className={styles.select}
        value={availability}
        onChange={(e) => dispatch(setAvailability(e.target.value))}
      >
        <option value="">Все</option>
        {MOCK_AVAILABILITY.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default AvailabilityFilter;
