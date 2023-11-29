import { useParams } from "react-router-dom";
import { api } from "../../../api/api";
import Loader from "../../../ui/Loader/Loader";
import styles from "./CollectionHead.module.scss";
import CollectionHeadItem from "../CollectionHeadItem/CollectionHeadItem";

function CollectionHead() {
  const { collectionId } = useParams();
  const { data: columns } = api.useGetColumnsQuery(collectionId as string);
  return (
    <thead className={styles.head}>
      <tr className={styles.columns}>
        {columns ? null : (
          <th>
            <Loader />
          </th>
        )}
        {columns?.map((column) => (
          <CollectionHeadItem key={column.id} column={column} />
        ))}
      </tr>
    </thead>
  );
}

export default CollectionHead;
