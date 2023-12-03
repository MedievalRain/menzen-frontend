import { imageApi } from "../../../api/imageApi/imageApi";
import { useError } from "../../../hooks/useError";
import Dialog from "../../../ui/Dialog/Dialog";
import PrimaryButton from "../../../ui/PrimaryButton/PrimaryButton";
import SecondaryButton from "../../../ui/SecondaryButton/SecondaryButton";
import styles from "./DeleteImageDialog.module.scss";

interface DeleteImageDialogProps {
  imageId: string;
}

function DeleteImageDialog({ imageId }: DeleteImageDialogProps) {
  const [deleteImage, { isSuccess, isError, error }] =
    imageApi.useDeleteImageMutation();
  useError(isError, error);
  return (
    <Dialog id="delete-image-dialog">
      <Dialog.Trigger>
        <PrimaryButton>Удалить</PrimaryButton>
      </Dialog.Trigger>
      <Dialog.Window className={styles.window}>
        <p>Удалить фото?</p>
        <div className={styles.buttons}>
          <Dialog.Close>
            <SecondaryButton>Отмена</SecondaryButton>
          </Dialog.Close>
          <Dialog.Submit shouldClose={isSuccess}>
            <PrimaryButton
              onClick={() => {
                deleteImage(imageId);
              }}
            >
              Удалить
            </PrimaryButton>
          </Dialog.Submit>
        </div>
      </Dialog.Window>
    </Dialog>
  );
}

export default DeleteImageDialog;
