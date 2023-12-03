import { useState } from "react";
import Dialog from "../../../ui/Dialog/Dialog";
import PrimaryButton from "../../../ui/PrimaryButton/PrimaryButton";
import SecondaryButton from "../../../ui/SecondaryButton/SecondaryButton";
import styles from "./NewColumnDialog.module.scss";
import Input from "../../../ui/Input/Input";
import { useError } from "../../../hooks/useError";
import { columnApi } from "../../../api/columnApi/columnApi";
interface NewColumnDialogProps {
  collectionId: string;
}

function NewColumnDialog({ collectionId }: NewColumnDialogProps) {
  const [createColumn, { isError, error }] =
    columnApi.useCreateColumnMutation();
  const [name, setName] = useState("");
  useError(isError, error);

  const handleClick = () => {
    createColumn({ name, id: collectionId });
    setName("");
  };
  return (
    <Dialog>
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
              <PrimaryButton onClick={handleClick}>Добавить</PrimaryButton>
            </Dialog.Close>
          </div>
        </div>
      </Dialog.Window>
    </Dialog>
  );
}

export default NewColumnDialog;
