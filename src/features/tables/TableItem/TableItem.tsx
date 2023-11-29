import { Link } from "react-router-dom";
import { Table } from "../../../api/apiTypes";
import styles from "./TableItem.module.scss";
import TableDropdown from "../TableDropdown/TableDropdown";
interface TableItemProps {
  table: Table;
}

function TableItem({ table }: TableItemProps) {
  return (
    <div className={styles.item}>
      <TableDropdown table={table} />
      <Link className={styles.link} to={`/app/collections/${table.id}`}>
        <p className={styles.count}>{table.count}</p>
        <p className={styles.name}>{table.name}</p>
      </Link>
    </div>
  );
}

export default TableItem;
