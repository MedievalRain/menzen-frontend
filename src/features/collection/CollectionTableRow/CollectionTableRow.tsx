import { useNavigate } from "react-router-dom";
import styles from "./CollectionTableRow.module.scss";
import { TableCoin } from "../../../types";
import CollectionTableImageCell from "../CollectionTableImageCell/CollectionTableImageCell";
interface CollectionTableRowProps {
  coin: TableCoin;
}

function CollectionTableRow({ coin }: CollectionTableRowProps) {
  const navigate = useNavigate();
  return (
    <tr
      onClick={() => navigate(`coin/${coin.id}`)}
      role="link"
      className={styles.row}
    >
      {coin.values.map((value) =>
        value.type === "images" ? (
          <CollectionTableImageCell
            key={value.columnId}
            imageIds={coin.imageIds}
          />
        ) : (
          <td className={styles.cell} key={value.columnId}>
            {value.value || "-"}
          </td>
        )
      )}
    </tr>
  );
}

export default CollectionTableRow;
