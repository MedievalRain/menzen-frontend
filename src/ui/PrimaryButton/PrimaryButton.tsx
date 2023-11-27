import { ReactNode } from "react";
import styles from "./PrimaryButton.module.scss";
interface PrimaryButtonProps {
  children: ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset" | undefined;
  disabled?: boolean;
}

function PrimaryButton({
  onClick,
  children,
  type,
  disabled,
}: PrimaryButtonProps) {
  return (
    <button
      type={type}
      disabled={disabled}
      className={styles["primary-button"]}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default PrimaryButton;
