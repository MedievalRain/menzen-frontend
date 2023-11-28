import { useState } from "react";
import { api } from "../../../api/api";
import { useError } from "../../../hooks/useError";
import Dialog from "../../../ui/Dialog/Dialog";
import Input from "../../../ui/Input/Input";
import PrimaryButton from "../../../ui/PrimaryButton/PrimaryButton";
import SecondaryButton from "../../../ui/SecondaryButton/SecondaryButton";
import styles from "./RenameTableDialog.module.scss";
import { Table } from "../../../api/apiTypes";
interface RenameTableDialogProps {
  table: Table;
}

function RenameTableDialog({ table }: RenameTableDialogProps) {
  const [renameTable, { isError, error }] = api.useRenameTableMutation();
  const [name, setName] = useState(table.name);
  useError(isError, error);
  return (
    <div className={styles.wrapper}>
      <Dialog>
        <Dialog.Trigger>
          <button className={styles.trigger}>Переименовать</button>
        </Dialog.Trigger>
        <Dialog.Window>
          <div className={styles.window}>
            <h2 className={styles.title}>Переименовать коллекцию</h2>
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
                  onClick={() => renameTable({ id: table.id, name })}
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

export default RenameTableDialog;
