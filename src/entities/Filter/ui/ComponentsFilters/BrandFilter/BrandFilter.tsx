import { FilterProps } from "../../../model/constants";
import Select from "../../../../../shared/ui/components/Select/Select";
import styles from "./BrandFilter.module.scss";

const BrandFilter = ({ options, selectedOption, onChange }: FilterProps) => {
  return (
    <div className={styles.filterItem}>
      <Select
        id="brand"
        options={options}
        selectedOption={selectedOption}
        onChange={(e) => onChange(e.target.value)}
        label="Бренд:"
        className={styles.select}
      />
    </div>
  );
};

export default BrandFilter;
