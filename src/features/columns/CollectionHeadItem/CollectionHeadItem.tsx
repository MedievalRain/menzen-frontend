import { Column } from "../../../api/apiTypes";
import Input from "../../../ui/Input/Input";
import styles from "./CollectionHeadItem.module.scss";
interface CollectionHeadItemProps {
  column: Column;
}

function CollectionHeadItem({ column }: CollectionHeadItemProps) {
  return (
    <th className={styles.item} key={column.id}>
      <div>{column.name}</div>
      <Input className={styles.input} type="text" />
    </th>
  );
}

export default CollectionHeadItem;
