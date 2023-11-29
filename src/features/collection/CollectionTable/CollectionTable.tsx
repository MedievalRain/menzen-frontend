import CollectionHead from "../../columns/CollectionHead/CollectionHead";
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
        <tbody>
          <tr>
            <td>cell1_1</td>
            <td>cell2_1</td>
            <td>cell3_1</td>
          </tr>
          <tr>
            <td>cell1_2</td>
            <td>cell2_2</td>
            <td>cell3_2</td>
          </tr>
          <tr>
            <td>cell1_3</td>
            <td>cell2_3</td>
            <td>cell3_3</td>
          </tr>
          <tr>
            <td>cell1_4</td>
            <td>cell2_4</td>
            <td>cell3_4</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default CollectionTable;
