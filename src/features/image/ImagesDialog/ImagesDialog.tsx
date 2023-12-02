import Dialog from "../../../ui/Dialog/Dialog";
import PrimaryButton from "../../../ui/PrimaryButton/PrimaryButton";
import StyledDropdownItem from "../../../ui/StyledDropdownItem/StyledDropdownItem";
import UploadImageDialog from "../UploadImageDialog/UploadImageDialog";
import styles from "./ImagesDialog.module.scss";
interface ImagesDialogProps {
  coinId: string;
}

function ImagesDialog({ coinId }: ImagesDialogProps) {
  return (
    <Dialog id="images-dialog">
      <Dialog.Trigger>
        <StyledDropdownItem>Изменить фото</StyledDropdownItem>
      </Dialog.Trigger>
      <Dialog.Window>
        <div className={styles.window}>
          <h2 className={styles.title}>Изменить фото</h2>
          <UploadImageDialog coinId={coinId} />
          <Dialog.Close>
            <PrimaryButton>Готово</PrimaryButton>
          </Dialog.Close>
        </div>
      </Dialog.Window>
    </Dialog>
  );
}

export default ImagesDialog;
