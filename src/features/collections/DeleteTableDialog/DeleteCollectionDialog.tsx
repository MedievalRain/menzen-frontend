import { collectionApi } from "../../../api/collectionApi/collectionApi";
import { Collection } from "../../../api/collectionApi/collectionApiTypes";

import { useError } from "../../../hooks/useError";
import Dialog from "../../../ui/Dialog/Dialog";
import PrimaryButton from "../../../ui/PrimaryButton/PrimaryButton";
import SecondaryButton from "../../../ui/SecondaryButton/SecondaryButton";
import StyledDropdownItem from "../../../ui/StyledDropdownItem/StyledDropdownItem";
import styles from "./DeleteCollectionDialog.module.scss";
interface DeleteCollectionDialogProps {
  collection: Collection;
}

function DeleteCollectionDialog({ collection }: DeleteCollectionDialogProps) {
  const [deleteCollection, { isError, error }] =
    collectionApi.useDeleteCollectionMutation();
  useError(isError, error);
  return (
    <Dialog>
      <Dialog.Trigger>
        <StyledDropdownItem>Удалить</StyledDropdownItem>
      </Dialog.Trigger>
      <Dialog.Window>
        <div className={styles.window}>
          <div>
            <span>Удалить коллекцию </span>
            <span>{collection.name}</span>
            <span>?</span>
          </div>
          <div className={styles.buttons}>
            <Dialog.Close>
              <SecondaryButton>Отмена</SecondaryButton>
            </Dialog.Close>
            <Dialog.Close>
              <PrimaryButton onClick={() => deleteCollection(collection.id)}>
                Удалить
              </PrimaryButton>
            </Dialog.Close>
          </div>
        </div>
      </Dialog.Window>
    </Dialog>
  );
}

export default DeleteCollectionDialog;
