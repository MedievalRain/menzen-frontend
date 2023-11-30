import { useState } from "react";
import { api } from "../../../api/api";
import Dialog from "../../../ui/Dialog/Dialog";
import PrimaryButton from "../../../ui/PrimaryButton/PrimaryButton";
import SecondaryButton from "../../../ui/SecondaryButton/SecondaryButton";
import styles from "./NewColumnDialog.module.scss";
import Input from "../../../ui/Input/Input";
import { useError } from "../../../hooks/useError";
interface NewColumnDialogProps {
  collectionId: string;
}

function NewColumnDialog({ collectionId }: NewColumnDialogProps) {
  const [createColumn, { isError, error }] = api.useCreateColumnMutation();
  const [name, setName] = useState("");
  useError(isError, error);
  return (
    <Dialog id="new-column">
      <Dialog.Trigger>
        <PrimaryButton className={styles.trigger}>Добавить</PrimaryButton>
      </Dialog.Trigger>
      <Dialog.Window>
        <div className={styles.window}>
          <h2 className={styles.title}>Добавить поле</h2>
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
                onClick={() => createColumn({ name, id: collectionId })}
              >
                Добавить
              </PrimaryButton>
            </Dialog.Close>
          </div>
        </div>
      </Dialog.Window>
    </Dialog>
  );
}

export default NewColumnDialog;
