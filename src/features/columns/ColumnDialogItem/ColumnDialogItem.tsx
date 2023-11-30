import { api } from "../../../api/api";
import { Column } from "../../../api/apiTypes";
import { useError } from "../../../hooks/useError";
import ColumnDropdown from "../ColumnDropdown/ColumnDropdown";
import styles from "./ColumnDialogItem.module.scss";
interface ColumnDialogItemProps {
  column: Column;
  collectionId: string;
}

function ColumnDialogItem({ column, collectionId }: ColumnDialogItemProps) {
  const [changeStatus, { isError, error }] =
    api.useChangeColumnStatusMutation();
  useError(isError, error);
  return (
    <li className={styles.item} key={column.id}>
      <div className={styles["left-wrapper"]}>
        <input
          onChange={(e) =>
            changeStatus({
              collectionId,
              columnId: column.id,
              enabled: e.target.checked,
            })
          }
          defaultChecked={column.enabled}
          type="checkbox"
        />
        <span>{column.name}</span>
      </div>
      <ColumnDropdown column={column} collectionId={collectionId} />
    </li>
  );
}

export default ColumnDialogItem;
