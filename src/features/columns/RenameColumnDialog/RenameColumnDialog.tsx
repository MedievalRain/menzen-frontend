import { useState } from "react";
import { api } from "../../../api/api";
import { Column } from "../../../api/apiTypes";
import { useError } from "../../../hooks/useError";
import Dialog from "../../../ui/Dialog/Dialog";
import Input from "../../../ui/Input/Input";
import PrimaryButton from "../../../ui/PrimaryButton/PrimaryButton";
import SecondaryButton from "../../../ui/SecondaryButton/SecondaryButton";
import styles from "./RenameColumnDialog.module.scss";
interface RenameColumnDialogProps {
  column: Column;
  collectionId: string;
}

function RenameColumnDialog({ column, collectionId }: RenameColumnDialogProps) {
  const [renameColumn, { isError, error }] = api.useRenameColumnMutation();
  const [name, setName] = useState(column.name);
  useError(isError, error);
  return (
    <div className={styles.wrapper}>
      <Dialog id="rename-column">
        <Dialog.Trigger>
          <button className={styles.trigger}>Переименовать</button>
        </Dialog.Trigger>
        <Dialog.Window>
          <div className={styles.window}>
            <h2 className={styles.title}>Переименовать поле {column.name}</h2>
            <Input
              onChange={(e) => setName(e.target.value)}
              value={name}
              type="text"
              placeholder="Название"
            />
            <div className={styles.buttons}>
              <Dialog.Close>
                <SecondaryButton>Отмена</SecondaryButton>
              </Dialog.Close>
              <Dialog.Close>
                <PrimaryButton
                  onClick={() =>
                    renameColumn({ name, collectionId, columnId: column.id })
                  }
                >
                  Переименовать
                </PrimaryButton>
              </Dialog.Close>
            </div>
          </div>
        </Dialog.Window>
      </Dialog>
    </div>
  );
}

export default RenameColumnDialog;
