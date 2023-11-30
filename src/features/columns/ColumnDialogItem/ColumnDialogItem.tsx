import { Column } from "../../../api/apiTypes";
import ColumnDropdown from "../ColumnDropdown/ColumnDropdown";
import styles from "./ColumnDialogItem.module.scss";
interface ColumnDialogItemProps {
  column: Column;
  collectionId: string;
}

function ColumnDialogItem({ column, collectionId }: ColumnDialogItemProps) {
  return (
    <li className={styles.item} key={column.id}>
      <span>{column.name}</span>
      <ColumnDropdown column={column} collectionId={collectionId} />
    </li>
  );
}

export default ColumnDialogItem;
