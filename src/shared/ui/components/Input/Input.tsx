import classNames from "classnames";
import styles from "./Input.module.scss";


interface InputProps {
    type: string;
    className?: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder: string;
    value: string;
}

const Input = ({ type, onChange, placeholder, className, value }: InputProps) => {
    const inputClass = classNames(styles.input, className)
    return (
        <input
            type={type}
            className={inputClass}
            placeholder={placeholder}
            onChange={onChange}
            value={value}
        />
    );
};

export default Input;
