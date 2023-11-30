import Loader from "../../../ui/Loader/Loader";
import styles from "./CollectionHead.module.scss";
import CollectionHeadItem from "../CollectionHeadItem/CollectionHeadItem";
import { columnApi } from "../../../api/columnApi/columnApi";
interface CollectionHeadProps {
  collectionId: string;
}

function CollectionHead({ collectionId }: CollectionHeadProps) {
  const { data: columns } = columnApi.useGetColumnsQuery(collectionId);
  return (
    <thead className={styles.head}>
      <tr className={styles.columns}>
        {columns ? null : (
          <th>
            <Loader />
          </th>
        )}
        {columns
          ?.filter((column) => column.enabled)
          .map((column) => (
            <CollectionHeadItem key={column.id} column={column} />
          ))}
      </tr>
    </thead>
  );
}

export default CollectionHead;
