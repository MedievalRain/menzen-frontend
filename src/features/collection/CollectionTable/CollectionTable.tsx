import { useTableCoins } from "../../../hooks/useTableCoins";
import CollectionHead from "../../columns/CollectionHead/CollectionHead";
import CollectionTableBody from "../CollectionTableBody/CollectionTableBody";
import TableControls from "../TableControls/TableControls";
import styles from "./CollectionTable.module.scss";

interface CollectionTableProps {
  collectionId: string;
}

function CollectionTable({ collectionId }: CollectionTableProps) {
  const { coins, formattedCoins, columns } = useTableCoins(collectionId);
  return (
    <div className={styles.wrapper}>
      <TableControls
        collectionId={collectionId}
        formattedCoins={formattedCoins}
      />
      <table className={styles.table}>
        <CollectionHead columns={columns} />
        <CollectionTableBody
          collectionId={collectionId}
          coins={coins}
          formattedCoins={formattedCoins}
        />
      </table>
    </div>
  );
}

export default CollectionTable;
