import { authApi } from "../../../api/authApi/authApi";
import { useError } from "../../../hooks/useError";
import Dialog from "../../../ui/Dialog/Dialog";
import PrimaryButton from "../../../ui/PrimaryButton/PrimaryButton";
import SecondaryButton from "../../../ui/SecondaryButton/SecondaryButton";
import StyledDropdownItem from "../../../ui/StyledDropdownItem/StyledDropdownItem";
import styles from "./LogoutDialog.module.scss";
function LogoutDialog() {
  const [logout, { error, isError }] = authApi.useLogoutMutation();
  useError(isError, error);
  return (
    <Dialog>
      <Dialog.Trigger>
        <StyledDropdownItem>Выход</StyledDropdownItem>
      </Dialog.Trigger>
      <Dialog.Window>
        <div className={styles.window}>
          <p>Выйти из аккаунта?</p>
          <div className={styles.buttons}>
            <Dialog.Close>
              <SecondaryButton>Отмена</SecondaryButton>
            </Dialog.Close>
            <Dialog.Submit>
              <PrimaryButton onClick={() => logout()}>Выйти</PrimaryButton>
            </Dialog.Submit>
          </div>
        </div>
      </Dialog.Window>
    </Dialog>
  );
}

export default LogoutDialog;
