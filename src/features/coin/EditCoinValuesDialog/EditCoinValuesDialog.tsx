import Dialog from "../../../ui/Dialog/Dialog";
import Input from "../../../ui/Input/Input";
import PrimaryButton from "../../../ui/PrimaryButton/PrimaryButton";
import SecondaryButton from "../../../ui/SecondaryButton/SecondaryButton";
import styles from "./EditCoinValuesDialog.module.scss";
import { FormattedCoin, FormattedCoinValue } from "../../../types";
import StyledDropdownItem from "../../../ui/StyledDropdownItem/StyledDropdownItem";
import { useState } from "react";
import { coinApi } from "../../../api/coinApi/coinApi";
import { useError } from "../../../hooks/useError";

interface EditCoinValuesDialogProps {
  coin: FormattedCoin;
}

function EditCoinValuesDialog({ coin }: EditCoinValuesDialogProps) {
  const [coinValues, setCoinValues] = useState<FormattedCoinValue[]>(
    coin.values
  );
  const [editCoinValues, { isError, error }] = coinApi.useEditCoinMutation();
  useError(isError, error);
  const handleInputChange = (newValue: string, id: string) => {
    setCoinValues((state) =>
      state.map((value) => {
        if (value.id === id) {
          return { ...value, value: newValue };
        } else {
          return value;
        }
      })
    );
  };

  const handleSubmit = () =>
    editCoinValues({
      coinId: coin.id,
      values: coinValues.map((value) => {
        return { columnId: value.id, value: value.value };
      }),
    });
  return (
    <Dialog id="edit-coin-values">
      <Dialog.Trigger>
        <StyledDropdownItem>Изменить поля</StyledDropdownItem>
      </Dialog.Trigger>
      <Dialog.Window>
        <div className={styles.window}>
          <h2 className={styles.title}>Изменить поля</h2>
          <ul className={styles["column-list"]}>
            {coinValues.map(
              (value) =>
                value.type === "regular" && (
                  <li className={styles.item} key={value.id}>
                    <label htmlFor={value.id}>{value.name}</label>
                    <Input
                      placeholder="..."
                      id={value.id}
                      type="text"
                      className={styles.input}
                      value={value.value}
                      onChange={(e) =>
                        handleInputChange(e.target.value, value.id)
                      }
                    />
                  </li>
                )
            )}
          </ul>

          <div className={styles.buttons}>
            <Dialog.Close>
              <SecondaryButton>Отмена</SecondaryButton>
            </Dialog.Close>
            <Dialog.Close>
              <PrimaryButton onClick={handleSubmit}>Отправить</PrimaryButton>
            </Dialog.Close>
          </div>
        </div>
      </Dialog.Window>
    </Dialog>
  );
}

export default EditCoinValuesDialog;
