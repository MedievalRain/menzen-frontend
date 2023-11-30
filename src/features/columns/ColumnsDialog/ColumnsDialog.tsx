import { api } from "../../../api/api";
import { useCollectionName } from "../../../hooks/useCollectionName";
import Dialog from "../../../ui/Dialog/Dialog";
import PrimaryButton from "../../../ui/PrimaryButton/PrimaryButton";
import ColumnDialogItem from "../ColumnDialogItem/ColumnDialogItem";
import NewColumnDialog from "../NewColumnDialog/NewColumnDialog";
import styles from "./ColumnsDialog.module.scss";
interface ColumnsDialogProps {
  collectionId: string;
}

function ColumnsDialog({ collectionId }: ColumnsDialogProps) {
  const { data: columns } = api.useGetColumnsQuery(collectionId);
  const collectionName = useCollectionName(collectionId);
  return (
    <Dialog id="column-dialog">
      <Dialog.Trigger>
        <PrimaryButton>Редактировать</PrimaryButton>
      </Dialog.Trigger>
      <Dialog.Window>
        <div className={styles.window}>
          <h2 className={styles.title}>{collectionName}</h2>
          <NewColumnDialog collectionId={collectionId} />
          <ul className={styles.columns}>
            {columns?.map((column) => (
              <ColumnDialogItem
                key={column.id}
                column={column}
                collectionId={collectionId}
              />
            ))}
          </ul>
        </div>
      </Dialog.Window>
    </Dialog>
  );
}

export default ColumnsDialog;
