import { Column } from "../../../api/columnApi/columnApiTypes";
import { useAppDispatch, useAppSelector } from "../../../hooks/storeHooks";
import Input from "../../../ui/Input/Input";
import SortDownIcon from "../../../ui/icons/SortDownIcon";
import SortUpIcon from "../../../ui/icons/SortUpIcon";
import { setFilter, setSorting } from "../../collection/slice/collectionSlice";
import styles from "./CollectionHeadItem.module.scss";
interface CollectionHeadItemProps {
  column: Column;
}

function CollectionHeadItem({ column }: CollectionHeadItemProps) {
  const dispatch = useAppDispatch();
  const searchText = useAppSelector(
    (state) => state.collection.filters[column.id]
  );
  const sorting = useAppSelector((state) => state.collection.sorting);

  return (
    <th>
      <div className={styles.item}>
        <button
          onClick={() => dispatch(setSorting(column.id))}
          className={`${styles["name-wrapper"]} ${
            sorting.id === column.id ? styles.selected : ""
          }`}
        >
          <p className={styles.name}>{column.name}</p>

          {sorting.id === column.id && (
            <div className={styles["icon-wrapper"]}>
              {sorting.type === "DESC" && <SortUpIcon />}
              {sorting.type === "ASC" && <SortDownIcon />}
            </div>
          )}
        </button>
        <Input
          value={searchText}
          onChange={(e) =>
            dispatch(setFilter({ id: column.id, value: e.target.value }))
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
