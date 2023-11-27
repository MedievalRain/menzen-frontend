import { Table } from "../../../api/apiTypes";
import TableItem from "../TableItem/TableItem";
import styles from "./TablesGrid.module.css";
interface TablesGridProps {
  tables: Table[];
}

function TablesGrid({ tables }: TablesGridProps) {
  return (
    <div className={styles.grid}>
      {tables.map((table) => (
        <TableItem table={table} key={table.id} />
      ))}
    </div>
  );
}

export default TablesGrid;
