import { ReactNode } from "react";
import styles from "./SecondaryButton.module.scss";
interface SecondaryButtonProps {
  children: ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset" | undefined;
  disabled?: boolean;
}

function SecondaryButton({
  onClick,
  children,
  type,
  disabled,
}: SecondaryButtonProps) {
  return (
    <button
      type={type}
      disabled={disabled}
      className={styles.button}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default SecondaryButton;
