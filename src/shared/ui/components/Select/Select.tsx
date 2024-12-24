import classNames from "classnames";
import styles from "./Select.module.scss";
import { SelectHTMLAttributes } from "react";

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  id: string;
  options: string[];
  selectedOption: string;
  label?: string;
  className?: string;
}

const Select = ({
  id,
  options,
  selectedOption,
  onChange,
  label,
  className,
  ...props
}: SelectProps) => {

  return (
    <div className={classNames(styles.select, className)}>
      {label && <label htmlFor={id}>{label}</label>}
      <select id={id} value={selectedOption} onChange={onChange} {...props}>
        <option value="">Все</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
