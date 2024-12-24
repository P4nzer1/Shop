import { FilterProps } from "../../../model/constants";
import Select from "../../../../../shared/ui/components/Select/Select";
import styles from "./ModelFilter.module.scss";

const ModelFilter = ({ options, selectedOption, onChange }: FilterProps) => {
  return (
    <div className={styles.filterItem}>
      <Select
        id="model"
        options={options}
        selectedOption={selectedOption}
        onChange={(e) => onChange(e.target.value)}
        label="Модель:"
        className={styles.select}
      />
    </div>
  );
};

export default ModelFilter;
