import Loader from "../../../ui/Loader/Loader";
import styles from "./CollectionHead.module.scss";
import CollectionHeadItem from "../CollectionHeadItem/CollectionHeadItem";
import CollectionHeadSpecialItem from "../CollectionHeadSpecialItem/CollectionHeadSpecialItem";
import { Column } from "../../../api/columnApi/columnApiTypes";
interface CollectionHeadProps {
  columns: Column[] | undefined;
}

function CollectionHead({ columns }: CollectionHeadProps) {
  return (
    <thead className={styles.head}>
      <tr className={styles.columns}>
        {columns ? (
          columns
            .filter((column) => column.enabled)
            .map((column) =>
              column.type === "regular" ? (
                <CollectionHeadItem key={column.id} column={column} />
              ) : (
                <CollectionHeadSpecialItem key={column.id} column={column} />
              )
            )
        ) : (
          <th>
            <Loader />
          </th>
        )}
      </tr>
    </thead>
  );
}

export default CollectionHead;
