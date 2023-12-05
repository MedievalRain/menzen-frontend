import { useState } from "react";
import { useError } from "../../../hooks/useError";
import Dialog from "../../../ui/Dialog/Dialog";
import Input from "../../../ui/Input/Input";
import PrimaryButton from "../../../ui/PrimaryButton/PrimaryButton";
import SecondaryButton from "../../../ui/SecondaryButton/SecondaryButton";
import styles from "./RenameCollectionDialog.module.scss";

import StyledDropdownItem from "../../../ui/StyledDropdownItem/StyledDropdownItem";
import { collectionApi } from "../../../api/collectionApi/collectionApi";
import { Collection } from "../../../api/collectionApi/collectionApiTypes";
interface RenameCollectionDialogProps {
  collection: Collection;
}

function RenameCollectionDialog({ collection }: RenameCollectionDialogProps) {
  const [renameCollection, { isError, error }] =
    collectionApi.useRenameCollectionMutation();
  const [name, setName] = useState(collection.name);
  useError(isError, error);
  return (
    <div className={styles.wrapper}>
      <Dialog>
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
                  onClick={() =>
                    renameCollection({ id: collection.id, name: name.trim() })
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

export default RenameCollectionDialog;
