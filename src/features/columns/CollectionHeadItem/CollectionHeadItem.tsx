import { Column } from "../../../api/columnApi/columnApiTypes";
import { useAppDispatch, useAppSelector } from "../../../hooks/storeHooks";
import Input from "../../../ui/Input/Input";
import { search } from "../columnSlice";
import styles from "./CollectionHeadItem.module.scss";
interface CollectionHeadItemProps {
  column: Column;
}

function CollectionHeadItem({ column }: CollectionHeadItemProps) {
  const dispatch = useAppDispatch();
  const searchText =
    useAppSelector((state) => state.column.columns[column.id]) || "";

  return (
    <th>
      <div className={styles.item}>
        {column.name}
        <Input
          value={searchText}
          onChange={(e) =>
            dispatch(search({ columnId: column.id, value: e.target.value }))
          }
          className={styles.input}
          type="text"
          placeholder="Поиск..."
        />
      </div>
    </th>
  );
}

export default CollectionHeadItem;
