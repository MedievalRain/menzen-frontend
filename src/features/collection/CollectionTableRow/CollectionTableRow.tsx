import { useNavigate } from "react-router-dom";
import styles from "./CollectionTableRow.module.scss";

import CollectionTableImageCell from "../CollectionTableImageCell/CollectionTableImageCell";
import { TableCoin } from "../slice/collectionSliceTypes";
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
        value.type === "images" && coin.imageIds.length !== 0 ? (
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
