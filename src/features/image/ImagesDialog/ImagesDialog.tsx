import { FormattedCoin } from "../../../types";
import Dialog from "../../../ui/Dialog/Dialog";
import PrimaryButton from "../../../ui/PrimaryButton/PrimaryButton";
import StyledDropdownItem from "../../../ui/StyledDropdownItem/StyledDropdownItem";
import ImagesDialogList from "../ImagesDialogList/ImagesDialogList";
import UploadImageDialog from "../UploadImageDialog/UploadImageDialog";
import styles from "./ImagesDialog.module.scss";
interface ImagesDialogProps {
  coin: FormattedCoin;
}

function ImagesDialog({ coin }: ImagesDialogProps) {
  return (
    <Dialog id="images-dialog">
      <Dialog.Trigger>
        <StyledDropdownItem>Изменить фото</StyledDropdownItem>
      </Dialog.Trigger>
      <Dialog.Window className={styles.window}>
        <h2 className={styles.title}>Изменить фото</h2>
        <UploadImageDialog coinId={coin.id} />
        <ImagesDialogList imageIds={coin.imageIds} coinId={coin.id} />
        <Dialog.Close>
          <PrimaryButton>Готово</PrimaryButton>
        </Dialog.Close>
      </Dialog.Window>
    </Dialog>
  );
}

export default ImagesDialog;
