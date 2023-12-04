import { authApi } from "../../../api/authApi/authApi";
import { useError } from "../../../hooks/useError";
import Dialog from "../../../ui/Dialog/Dialog";
import PrimaryButton from "../../../ui/PrimaryButton/PrimaryButton";
import SecondaryButton from "../../../ui/SecondaryButton/SecondaryButton";
import StyledDropdownItem from "../../../ui/StyledDropdownItem/StyledDropdownItem";
import styles from "./DeleteAccountDialog.module.scss";
function DeleteAccountDialog() {
  const [deleteAccount, { error, isError }] =
    authApi.useDeleteAccountMutation();
  useError(isError, error);
  return (
    <Dialog>
      <Dialog.Trigger>
        <StyledDropdownItem>Удалить аккаунт</StyledDropdownItem>
      </Dialog.Trigger>
      <Dialog.Window>
        <div className={styles.window}>
          <p>Удалить аккаунт?</p>
          <div className={styles.buttons}>
            <Dialog.Close>
              <SecondaryButton>Отмена</SecondaryButton>
            </Dialog.Close>
            <Dialog.Submit>
              <PrimaryButton onClick={() => deleteAccount()}>
                Удалить
              </PrimaryButton>
            </Dialog.Submit>
          </div>
        </div>
      </Dialog.Window>
    </Dialog>
  );
}

export default DeleteAccountDialog;
