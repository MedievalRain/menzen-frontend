import ColumnsDialog from "../../columns/ColumnsDialog/ColumnsDialog";
import styles from "./TableControls.module.scss";
import NewCoinDialog from "../../coin/NewCoinForm/NewCoinDialog";
import PaginationControls from "../PaginationControls/PaginationControls";

interface TableControlsProps {
  collectionId: string;
}

function TableControls({ collectionId }: TableControlsProps) {
  return (
    <div className={styles.wrapper}>
      <ColumnsDialog collectionId={collectionId} />
      <PaginationControls />
      <NewCoinDialog collectionId={collectionId} />
    </div>
  );
}

export default TableControls;
