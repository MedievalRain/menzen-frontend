import CollectionHead from "../../columns/CollectionHead/CollectionHead";
import CollectionTableBody from "../CollectionTableBody/CollectionTableBody";
import TableControls from "../TableControls/TableControls";
import styles from "./CollectionTable.module.scss";

interface CollectionTableProps {
  collectionId: string;
}

function CollectionTable({ collectionId }: CollectionTableProps) {
  return (
    <div className={styles.wrapper}>
      <TableControls collectionId={collectionId} />
      <table className={styles.table}>
        <CollectionHead collectionId={collectionId} />
        <CollectionTableBody collectionId={collectionId} />
      </table>
    </div>
  );
}

export default CollectionTable;
