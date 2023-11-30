import { ReactNode } from "react";
import styles from "./PrimaryButton.module.scss";
interface PrimaryButtonProps {
  children: ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset" | undefined;
  disabled?: boolean;
  className?: string;
}

function PrimaryButton({
  onClick,
  children,
  type,
  disabled,
  className,
}: PrimaryButtonProps) {
  return (
    <button
      type={type}
      disabled={disabled}
      className={`${styles["primary-button"]} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default PrimaryButton;
