import { useState } from "react";
import styles from "./PriceFilter.module.scss";
import { PriceFilterProps } from "../../../model/constants";
import Input from "../../../../../shared/ui/components/Input/Input";
import Button from "../../../../../shared/ui/components/Button/Button";

const PriceFilter = ({ onChange, minLimit, maxLimit }: PriceFilterProps) => {
  const [localMinPrice, setLocalMinPrice] = useState<string>("");
  const [localMaxPrice, setLocalMaxPrice] = useState<string>("");

  const handleApply = () => {
    const min = localMinPrice ? Number(localMinPrice) : minLimit;
    const max = localMaxPrice ? Number(localMaxPrice) : maxLimit;
    onChange({ min, max });
  };

  return (
    <div className={styles.filterItem}>
      <Input
        id="minPrice"
        placeholder="От"
        type="number"
        value={localMinPrice}
        min={minLimit}
        max={localMaxPrice ? Number(localMaxPrice) : maxLimit}
        onChange={(e) => setLocalMinPrice(e.target.value)}
        className={styles.input}
      />
      <Input
        id="maxPrice"
        placeholder="До"
        type="number"
        value={localMaxPrice}
        min={localMinPrice ? Number(localMinPrice) : minLimit}
        max={maxLimit}
        onChange={(e) => setLocalMaxPrice(e.target.value)}
        className={styles.input}
      />
      <Button text="Применить" onClick={handleApply} className={styles.button} />
    </div>
  );
};

export default PriceFilter;





