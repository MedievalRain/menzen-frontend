import { Table } from "../../../api/apiTypes";
import NewTableDialog from "../NewTableDialog/NewTableDialog";
import TableItem from "../TableItem/TableItem";
import styles from "./TablesGrid.module.scss";
interface TablesGridProps {
  tables: Table[];
}

function TablesGrid({ tables }: TablesGridProps) {
  return (
    <div className={styles.grid}>
      {tables.map((table) => (
        <TableItem table={table} key={table.id} />
      ))}
      <NewTableDialog />
    </div>
  );
}

export default TablesGrid;
