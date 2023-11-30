import { useState } from "react";
import { api } from "../../../api/api";
import Dialog from "../../../ui/Dialog/Dialog";
import Input from "../../../ui/Input/Input";
import PrimaryButton from "../../../ui/PrimaryButton/PrimaryButton";
import SecondaryButton from "../../../ui/SecondaryButton/SecondaryButton";
import PlusIcon from "../../../ui/icons/PlusIcon";
import styles from "./NewTableDialog.module.scss";
import { useError } from "../../../hooks/useError";
function NewTableDialog() {
  const [newTable, { isError, error }] = api.useNewTableMutation();
  const [name, setName] = useState("");
  useError(isError, error);
  return (
    <div className={styles.wrapper}>
      <Dialog id="new-table">
        <Dialog.Trigger>
          <button className={styles.trigger}>
            <PlusIcon height="5em" />
          </button>
        </Dialog.Trigger>
        <Dialog.Window>
          <div className={styles.window}>
            <h2 className={styles.title}>Создать коллекцию</h2>
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
                <PrimaryButton onClick={() => newTable(name)}>
                  Создать
                </PrimaryButton>
              </Dialog.Close>
            </div>
          </div>
        </Dialog.Window>
      </Dialog>
    </div>
  );
}

export default NewTableDialog;
