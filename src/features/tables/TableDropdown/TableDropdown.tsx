import { Table } from "../../../api/apiTypes";
import Dropdown from "../../../ui/Dropdown";
import DotsIcon from "../../../ui/icons/DotsIcon";
import styles from "./TableDropdown.module.scss";

interface TableDropdownProps {
  table: Table;
}

function TableDropdown({ table }: TableDropdownProps) {
  return (
    <Dropdown>
      <Dropdown.Trigger>
        <button className={styles.trigger}>
          <DotsIcon />
        </button>
      </Dropdown.Trigger>
    </Dropdown>
  );
}

export default TableDropdown;
