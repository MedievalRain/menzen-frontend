import Loader from "../../../ui/Loader/Loader";
import styles from "./CollectionHead.module.scss";
import { useColumns } from "../../../hooks/useColumns";
import CollectionHeadItem from "../CollectionHeadItem/CollectionHeadItem";
interface CollectionHeadProps {
  collectionId: string;
}

function CollectionHead({ collectionId }: CollectionHeadProps) {
  const { columns } = useColumns(collectionId);
  return (
    <thead className={styles.head}>
      <tr className={styles.columns}>
        {columns ? (
          columns
            .filter((column) => column.enabled)
            .map((column) => (
              <CollectionHeadItem key={column.id} column={column} />
            ))
        ) : (
          <th>
            <td>
              <Loader />
            </td>
          </th>
        )}
      </tr>
    </thead>
  );
}

export default CollectionHead;
