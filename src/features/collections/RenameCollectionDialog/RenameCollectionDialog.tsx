import { useState } from "react";
import { api } from "../../../api/api";
import { useError } from "../../../hooks/useError";
import Dialog from "../../../ui/Dialog/Dialog";
import Input from "../../../ui/Input/Input";
import PrimaryButton from "../../../ui/PrimaryButton/PrimaryButton";
import SecondaryButton from "../../../ui/SecondaryButton/SecondaryButton";
import styles from "./RenameCollectionDialog.module.scss";
import { Collection } from "../../../api/apiTypes";
import StyledDropdownItem from "../../../ui/StyledDropdownItem/StyledDropdownItem";
interface RenameCollectionDialogProps {
  collection: Collection;
}

function RenameCollectionDialog({ collection }: RenameCollectionDialogProps) {
  const [renameCollection, { isError, error }] =
    api.useRenameCollectionMutation();
  const [name, setName] = useState(collection.name);
  useError(isError, error);
  return (
    <div className={styles.wrapper}>
      <Dialog id="rename-collection">
        <Dialog.Trigger>
          <StyledDropdownItem>Переименовать</StyledDropdownItem>
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
                  onClick={() => renameCollection({ id: collection.id, name })}
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

export default RenameCollectionDialog;
