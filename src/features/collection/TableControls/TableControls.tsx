import { Link } from "react-router-dom";
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
      <Link to={"new"}>
        <PrimaryButton>Добавить монету</PrimaryButton>
      </Link>
    </div>
  );
}

export default TableControls;
