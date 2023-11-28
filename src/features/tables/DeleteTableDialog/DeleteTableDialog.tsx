import { api } from "../../../api/api";
import { Table } from "../../../api/apiTypes";
import { useError } from "../../../hooks/useError";
import Dialog from "../../../ui/Dialog/Dialog";
import PrimaryButton from "../../../ui/PrimaryButton/PrimaryButton";
import SecondaryButton from "../../../ui/SecondaryButton/SecondaryButton";
import styles from "./DeleteTableDialog.module.scss";
interface DeleteTableDialogProps {
  table: Table;
}

function DeleteTableDialog({ table }: DeleteTableDialogProps) {
  const [deleteTable, { isError, error }] = api.useDeleteTableMutation();
  useError(isError, error);
  return (
    <Dialog>
      <Dialog.Trigger>
        <button className={styles.trigger}>Удалить</button>
      </Dialog.Trigger>
      <Dialog.Window>
        <div className={styles.window}>
          <div>
            <span>Удалить коллекцию </span>
            <span>{table.name}</span>
            <span>?</span>
          </div>
          <div className={styles.buttons}>
            <Dialog.Close>
              <SecondaryButton>Отмена</SecondaryButton>
            </Dialog.Close>
            <Dialog.Close>
              <PrimaryButton onClick={() => deleteTable(table.id)}>
                Удалить
              </PrimaryButton>
            </Dialog.Close>
          </div>
        </div>
      </Dialog.Window>
    </Dialog>
  );
}

export default DeleteTableDialog;
