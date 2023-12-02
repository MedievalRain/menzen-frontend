import { useEffect } from "react";
import { coinApi } from "../../../api/coinApi/coinApi";
import { useError } from "../../../hooks/useError";
import Dialog from "../../../ui/Dialog/Dialog";
import PrimaryButton from "../../../ui/PrimaryButton/PrimaryButton";
import SecondaryButton from "../../../ui/SecondaryButton/SecondaryButton";
import StyledDropdownItem from "../../../ui/StyledDropdownItem/StyledDropdownItem";
import styles from "./DeleteCoinDialog.module.scss";
import { useNavigate } from "react-router-dom";
interface DeleteCoinDialogProps {
  coinId: string;
  collectionId: string;
}

function DeleteCoinDialog({ coinId, collectionId }: DeleteCoinDialogProps) {
  const navigate = useNavigate();
  const [deleteCoin, { isError, error, isSuccess, isLoading }] =
    coinApi.useDeleteCoinMutation();
  useError(isError, error);
  useEffect(() => {
    if (isSuccess) {
      navigate(`/app/collection/${collectionId}`);
    }
  }, [isSuccess, isLoading]);

  return (
    <Dialog id="delete-coin">
      <Dialog.Trigger>
        <StyledDropdownItem>Удалить</StyledDropdownItem>
      </Dialog.Trigger>
      <Dialog.Window>
        <div className={styles.window}>
          <p>Удалить монету?</p>
          <div className={styles.buttons}>
            <Dialog.Close>
              <SecondaryButton>Отмена</SecondaryButton>
            </Dialog.Close>
            <Dialog.Submit>
              <PrimaryButton onClick={() => deleteCoin(coinId)}>
                Удалить
              </PrimaryButton>
            </Dialog.Submit>
          </div>
        </div>
      </Dialog.Window>
    </Dialog>
  );
}

export default DeleteCoinDialog;
