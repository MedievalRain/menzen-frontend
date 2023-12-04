import { ReactNode, memo } from "react";
import styles from "./StyledDropdownItem.module.scss";

interface StyledDropdownItemProps {
  onClick?: () => void;
  children: ReactNode;
}

const StyledDropdownItem = memo(function StyledDropdownItem({
  onClick,
  children,
}: StyledDropdownItemProps) {
  return (
    <button onClick={onClick} className={styles.button}>
      {children}
    </button>
  );
});

export default StyledDropdownItem;
