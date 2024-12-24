import { StockFilterProps } from "../../../model/constants";
import Input from "../../../../../shared/ui/components/Input/Input";
import styles from "./StockFilter.module.scss";

const StockFilter = ({ selectedOption, onChange }: StockFilterProps) => {
  return (
    <div className={styles.filterItem}>
      <label>
        <Input
          type="checkbox"
          checked={selectedOption}
          onChange={(e) => onChange(e.target.checked)}
          className={styles.checkbox}
        />
        В наличии
      </label>
    </div>
  );
};

export default StockFilter;
