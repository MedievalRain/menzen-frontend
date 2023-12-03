import { useTableCoins } from "../../../hooks/useTableCoins";
import CollectionHead from "../../columns/CollectionHead/CollectionHead";
import CollectionTableBody from "../CollectionTableBody/CollectionTableBody";
import TableControls from "../TableControls/TableControls";
import styles from "./CollectionTable.module.scss";

interface CollectionTableProps {
  collectionId: string;
}

function CollectionTable({ collectionId }: CollectionTableProps) {
  const { coins, columns } = useTableCoins(collectionId);
  return (
    <div className={styles.wrapper}>
      <TableControls collectionId={collectionId} />
      <table className={styles.table}>
        <CollectionHead columns={columns} />
        <CollectionTableBody collectionId={collectionId} coins={coins} />
      </table>
    </div>
  );
}

export default CollectionTable;
