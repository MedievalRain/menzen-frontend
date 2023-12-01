import { Coin } from "../../../api/coinApi/coinApiTypes";
import styles from "./CollectionTableRow.module.scss";
interface CollectionTableRowProps {
  coin: Coin;
}

function CollectionTableRow({ coin }: CollectionTableRowProps) {
  return (
    <tr className={styles.row}>
      {coin.values.map((value) => (
        <td className={styles.cell} key={value.columnId}>
          {value.value || "-"}
        </td>
      ))}
    </tr>
  );
}

export default CollectionTableRow;
