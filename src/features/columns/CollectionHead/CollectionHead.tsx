import { api } from "../../../api/api";
import Loader from "../../../ui/Loader/Loader";
import styles from "./CollectionHead.module.scss";
import CollectionHeadItem from "../CollectionHeadItem/CollectionHeadItem";
interface CollectionHeadProps {
  collectionId: string;
}

function CollectionHead({ collectionId }: CollectionHeadProps) {
  const { data: columns } = api.useGetColumnsQuery(collectionId);
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
