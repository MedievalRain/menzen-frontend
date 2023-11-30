import { ChangeEvent, memo } from "react";
import styles from "./Input.module.css";
interface InputProps {
  value?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  className?: string;
  type: string;
  name?: string;
  id?: string;
}

const Input = memo(function Input({
  value,
  onChange,
  placeholder,
  type,
  name,
  className,
  id,
}: InputProps) {
  return (
    <input
      id={id}
      name={name}
      type={type}
      className={`${styles.input} ${className}`}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
});

export default Input;
