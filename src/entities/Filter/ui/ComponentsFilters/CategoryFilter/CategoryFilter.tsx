import { FilterProps } from "../../../model/constants";
import Select from "../../../../../shared/ui/components/Select/Select";
import styles from "./CategoryFilter.module.scss";

const CategoryFilter = ({ options, selectedOption, onChange }: FilterProps) => {
  return (
    <div className={styles.filterItem}>
      <Select
        id="category"
        options={options}
        selectedOption={selectedOption}
        onChange={(e) => onChange(e.target.value)}
        label="Категория:"
        className={styles.select}
      />
    </div>
  );
};

export default CategoryFilter;
