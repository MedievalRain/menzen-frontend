import { Column } from "../../../api/columnApi/columnApiTypes";
import Input from "../../../ui/Input/Input";
import styles from "./CollectionHeadItem.module.scss";
interface CollectionHeadItemProps {
  column: Column;
}

function CollectionHeadItem({ column }: CollectionHeadItemProps) {
  return (
    <th>
      <div className={styles.item}>
        {column.name}
        <Input className={styles.input} type="text" placeholder="Поиск..." />
      </div>
    </th>
  );
}

export default CollectionHeadItem;
