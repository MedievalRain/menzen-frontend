import Dropdown from "../../../ui/Dropdown";
import AccountIcon from "../../../ui/icons/AccountIcon";
import DeleteAccountDialog from "../DeleteAccountDialog/DeleteAccountDialog";
import LogoutDialog from "../LogoutDialog/LogoutDialog";
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
            <LogoutDialog />
            <DeleteAccountDialog />
          </div>
        </Dropdown.List>
      </Dropdown>
    </div>
  );
}

export default AccountDropdown;
