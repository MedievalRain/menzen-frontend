import { Column } from "../../../api/columnApi/columnApiTypes";
import styles from "./CollectionHeadSpecialItem.module.scss";
interface CollectionHeadSpecialItemProps {
  column: Column;
}

function CollectionHeadSpecialItem({ column }: CollectionHeadSpecialItemProps) {
  return (
    <th className={styles.item}>
      <p className={styles.text}>{column.name}</p>
      <div className={styles.container}></div>
    </th>
  );
}

export default CollectionHeadSpecialItem;
