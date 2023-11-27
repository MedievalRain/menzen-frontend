import { Table } from "../../../api/apiTypes";
import Dropdown from "../../../ui/Dropdown";
import DotsIcon from "../../../ui/icons/DotsIcon";
import DeleteTableDialog from "../DeleteTableDialog/DeleteTableDialog";
import styles from "./TableDropdown.module.scss";

interface TableDropdownProps {
  table: Table;
}

function TableDropdown({ table }: TableDropdownProps) {
  return (
    <Dropdown>
      <div className={styles.wrapper}>
        <Dropdown.Trigger>
          <button className={styles.trigger}>
            <DotsIcon />
          </button>
        </Dropdown.Trigger>
        <Dropdown.List>
          <div className={`${styles.list} ${styles["slide-in-bottom"]}`}>
            <Dropdown.Item>
              <button className={styles.item}>Переименовать</button>
            </Dropdown.Item>
            <Dropdown.Item>
              <DeleteTableDialog table={table} />
            </Dropdown.Item>
          </div>
        </Dropdown.List>
      </div>
    </Dropdown>
  );
}

export default TableDropdown;
