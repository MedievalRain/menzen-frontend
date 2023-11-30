import { api } from "../../../api/api";
import { Column } from "../../../api/apiTypes";
import { useError } from "../../../hooks/useError";
import Dialog from "../../../ui/Dialog/Dialog";
import PrimaryButton from "../../../ui/PrimaryButton/PrimaryButton";
import SecondaryButton from "../../../ui/SecondaryButton/SecondaryButton";
import styles from "./DeleteColumnDialog.module.scss";
interface DeleteColumnDialogProps {
  column: Column;
  collectionId: string;
}

function DeleteColumnDialog({ column, collectionId }: DeleteColumnDialogProps) {
  const [deleteColumn, { isError, error }] = api.useDeleteColumnMutation();
  useError(isError, error);
  return (
    <Dialog>
      <Dialog.Trigger>
        <button className={styles.trigger}>Удалить</button>
      </Dialog.Trigger>
      <Dialog.Window>
        <div className={styles.window}>
          <p>Удалить поле {column.name}?</p>
          <div className={styles.buttons}>
            <Dialog.Close>
              <SecondaryButton>Отмена</SecondaryButton>
            </Dialog.Close>
            <Dialog.Close>
              <PrimaryButton
                onClick={() =>
                  deleteColumn({ collectionId, columnId: column.id })
                }
              >
                Удалить
              </PrimaryButton>
            </Dialog.Close>
          </div>
        </div>
      </Dialog.Window>
    </Dialog>
  );
}

export default DeleteColumnDialog;
