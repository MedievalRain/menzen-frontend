import ColumnsDialog from "../../columns/ColumnsDialog/ColumnsDialog";
import styles from "./TableControls.module.scss";
import NewCoinDialog from "../../coin/NewCoinForm/NewCoinDialog";
import { TableCoin } from "../slice/collectionSliceTypes";
import PaginationControls from "../PaginationControls/PaginationControls";

interface TableControlsProps {
  collectionId: string;
  formattedCoins: TableCoin[];
}

function TableControls({ collectionId, formattedCoins }: TableControlsProps) {
  return (
    <div className={styles.wrapper}>
      <ColumnsDialog collectionId={collectionId} />
      <PaginationControls formattedCoins={formattedCoins} />
      <NewCoinDialog collectionId={collectionId} />
    </div>
  );
}

export default TableControls;
