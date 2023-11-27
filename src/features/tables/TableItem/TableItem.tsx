import { Table } from "../../../api/apiTypes";
import styles from "./TableItem.module.css";
interface TableItemProps {
  table: Table;
}

function TableItem({ table }: TableItemProps) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.item}>
        <p className={styles.count}>{table.count}</p>
        <div>{table.name}</div>
      </div>
    </div>
  );
}

export default TableItem;
