import { ChangeEvent, useEffect, useState } from "react";
import { imageApi } from "../../../api/imageApi/imageApi";
import { useError } from "../../../hooks/useError";
import Dialog from "../../../ui/Dialog/Dialog";
import PrimaryButton from "../../../ui/PrimaryButton/PrimaryButton";
import SecondaryButton from "../../../ui/SecondaryButton/SecondaryButton";
import styles from "./UploadImageDialog.module.scss";
import StyledDropdownItem from "../../../ui/StyledDropdownItem/StyledDropdownItem";
interface UploadImageDialogProps {
  coinId: string;
}

function UploadImageDialog({ coinId }: UploadImageDialogProps) {
  const [uploadImage, { isSuccess, isError, error, reset, isLoading }] =
    imageApi.useUploadImageMutation();
  useError(isError, error);
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    } else {
      setFile(null);
    }
  };

  useEffect(() => {
    if (isSuccess) reset();
  }, [isSuccess]);

  return (
    <Dialog id="upload-image-dialog">
      <Dialog.Trigger>
        <StyledDropdownItem>Загрузить фото</StyledDropdownItem>
      </Dialog.Trigger>
      <Dialog.Window>
        <div className={styles.window}>
          <h2 className={styles.title}>Загрузить фото</h2>

          <input onChange={handleFileChange} type="file" />
          <div className={styles.buttons}>
            <Dialog.Close>
              <SecondaryButton>Отмена</SecondaryButton>
            </Dialog.Close>
            <Dialog.Submit shouldClose={isSuccess}>
              <PrimaryButton
                disabled={!file || isLoading}
                onClick={() => uploadImage({ coinId, file: file! })}
              >
                Загрузить
              </PrimaryButton>
            </Dialog.Submit>
          </div>
        </div>
      </Dialog.Window>
    </Dialog>
  );
}

export default UploadImageDialog;
