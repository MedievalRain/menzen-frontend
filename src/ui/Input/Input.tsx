import { ChangeEvent, memo } from "react";
import styles from "./Input.module.css";
interface InputProps {
  value?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  className?: string;
  type: string;
  name?: string;
}

const Input = memo(function Input({ value, onChange, placeholder, type, name }: InputProps) {
  return <input name={name} type={type} className={styles.input} placeholder={placeholder} value={value} onChange={onChange} />;
});

export default Input;
