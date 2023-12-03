import Dialog from "../../../ui/Dialog/Dialog";
import SecondaryButton from "../../../ui/SecondaryButton/SecondaryButton";
import DeleteImageDialog from "../DeleteImageDialog/DeleteImageDialog";
import styles from "./ImageFullDialog.module.scss";
interface ImageFullDialogProps {
  imageId: string;
}

function ImageFullDialog({ imageId }: ImageFullDialogProps) {
  return (
    <Dialog id={imageId}>
      <Dialog.Trigger>
        <button>
          <img
            className={styles.image}
            src={`https://files.medievalrain.net/${imageId}.webp`}
          />
        </button>
      </Dialog.Trigger>
      <Dialog.Window className={styles.window}>
        <div className={styles.buttons}>
          <Dialog.Submit>
            <DeleteImageDialog imageId={imageId} />
          </Dialog.Submit>
          <Dialog.Close>
            <SecondaryButton>Закрыть</SecondaryButton>
          </Dialog.Close>
        </div>
        <img
          className={styles["full-image"]}
          src={`https://files.medievalrain.net/${imageId}.webp`}
        />
      </Dialog.Window>
    </Dialog>
  );
}

export default ImageFullDialog;
