import PrimaryButton from "../../../ui/PrimaryButton/PrimaryButton";
import ColumnsDialog from "../../columns/ColumnsDialog/ColumnsDialog";
import styles from "./TableControls.module.scss";

interface TableControlsProps {
  collectionId: string;
}

function TableControls({ collectionId }: TableControlsProps) {
  return (
    <div className={styles.wrapper}>
      <ColumnsDialog collectionId={collectionId} />
      <div></div>
      <PrimaryButton>Добавить монету</PrimaryButton>
    </div>
  );
}

export default TableControls;
