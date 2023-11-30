import ColumnsDialog from "../../columns/ColumnsDialog/ColumnsDialog";
import styles from "./TableControls.module.scss";
import NewCoinDialog from "../../coin/NewCoinForm/NewCoinDialog";

interface TableControlsProps {
  collectionId: string;
}

function TableControls({ collectionId }: TableControlsProps) {
  return (
    <div className={styles.wrapper}>
      <ColumnsDialog collectionId={collectionId} />
      <div></div>
      <NewCoinDialog collectionId={collectionId} />
    </div>
  );
}

export default TableControls;
