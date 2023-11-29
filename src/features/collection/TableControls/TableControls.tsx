import PrimaryButton from "../../../ui/PrimaryButton/PrimaryButton";
import styles from "./TableControls.module.scss";

interface TableControlsProps {
  collectionId: string;
}

function TableControls({ collectionId }: TableControlsProps) {
  return (
    <div className={styles.wrapper}>
      <PrimaryButton>Редактировать</PrimaryButton>
      <div></div>
      <PrimaryButton>Добавить монету</PrimaryButton>
    </div>
  );
}

export default TableControls;
