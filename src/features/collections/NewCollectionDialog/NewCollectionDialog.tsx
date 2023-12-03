import { useEffect, useState } from "react";
import Dialog from "../../../ui/Dialog/Dialog";
import Input from "../../../ui/Input/Input";
import PrimaryButton from "../../../ui/PrimaryButton/PrimaryButton";
import SecondaryButton from "../../../ui/SecondaryButton/SecondaryButton";
import PlusIcon from "../../../ui/icons/PlusIcon";
import styles from "./NewCollectionDialog.module.scss";
import { useError } from "../../../hooks/useError";
import { collectionApi } from "../../../api/collectionApi/collectionApi";
function NewCollectionDialog() {
  const [newCollection, { isError, error, isSuccess, reset }] =
    collectionApi.useNewCollectionMutation();
  const [name, setName] = useState("");
  useError(isError, error);
  const handleClick = () => {
    newCollection(name);
    setName("");
  };
  useEffect(() => {
    if (isSuccess) reset();
  }, [isSuccess]);

  return (
    <div className={styles.wrapper}>
      <Dialog id="new-collection">
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
              <Dialog.Submit shouldClose={isSuccess}>
                <PrimaryButton onClick={handleClick}>Создать</PrimaryButton>
              </Dialog.Submit>
            </div>
          </div>
        </Dialog.Window>
      </Dialog>
    </div>
  );
}

export default NewCollectionDialog;
