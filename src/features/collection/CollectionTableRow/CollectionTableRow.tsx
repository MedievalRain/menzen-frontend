import { useNavigate } from "react-router-dom";
import { Coin } from "../../../api/coinApi/coinApiTypes";
import styles from "./CollectionTableRow.module.scss";
interface CollectionTableRowProps {
  coin: Coin;
}

function CollectionTableRow({ coin }: CollectionTableRowProps) {
  const navigate = useNavigate();
  return (
    <tr role="link" className={styles.row}>
      {coin.values.map((value) => (
        <td
          className={styles.cell}
          onClick={() => navigate(`coin/${coin.id}`)}
          key={value.columnId}
        >
          {value.value || "-"}
        </td>
      ))}
    </tr>
  );
}

export default CollectionTableRow;
