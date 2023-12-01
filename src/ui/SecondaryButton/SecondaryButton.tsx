import { ReactNode } from "react";
import styles from "./SecondaryButton.module.scss";
interface SecondaryButtonProps {
  children: ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset" | undefined;
  disabled?: boolean;
  className?: string;
}

function SecondaryButton({
  onClick,
  children,
  type,
  disabled,
  className,
}: SecondaryButtonProps) {
  return (
    <button
      type={type}
      disabled={disabled}
      className={`${styles.button} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default SecondaryButton;
