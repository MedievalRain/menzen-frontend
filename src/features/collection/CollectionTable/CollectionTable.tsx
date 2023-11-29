import CollectionHead from "../../columns/CollectionHead/CollectionHead";
import styles from "./CollectionTable.module.scss";
function CollectionTable() {
  return (
    <table className={styles.table}>
      <CollectionHead />
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
  );
}

export default CollectionTable;
