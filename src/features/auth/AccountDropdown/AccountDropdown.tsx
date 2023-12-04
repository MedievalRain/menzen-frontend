import Dropdown from "../../../ui/Dropdown";
import StyledDropdownItem from "../../../ui/StyledDropdownItem/StyledDropdownItem";
import AccountIcon from "../../../ui/icons/AccountIcon";
import styles from "./AccountDropdown.module.scss";
function AccountDropdown() {
  return (
    <div className={styles.wrapper}>
      <Dropdown>
        <Dropdown.Trigger>
          <button className={styles.trigger}>
            <AccountIcon />
          </button>
        </Dropdown.Trigger>

        <Dropdown.List>
          <div className={styles.list}>
            <StyledDropdownItem>Выйти</StyledDropdownItem>
            <StyledDropdownItem>Удалить аккаунт</StyledDropdownItem>
          </div>
        </Dropdown.List>
      </Dropdown>
    </div>
  );
}

export default AccountDropdown;
