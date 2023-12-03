import { useEffect } from "react";
import { coinApi } from "../../../api/coinApi/coinApi";
import { CoinValue } from "../../../api/coinApi/coinApiTypes";
import { columnApi } from "../../../api/columnApi/columnApi";
import { useError } from "../../../hooks/useError";
import Dialog from "../../../ui/Dialog/Dialog";
import Input from "../../../ui/Input/Input";
import Loader from "../../../ui/Loader/Loader";
import PrimaryButton from "../../../ui/PrimaryButton/PrimaryButton";
import SecondaryButton from "../../../ui/SecondaryButton/SecondaryButton";
import { useColumnValues } from "../hooks/useColumnValues";
import styles from "./NewCoinDialog.module.scss";
import { useNavigate } from "react-router-dom";

interface NewCoinDialogProps {
  collectionId: string;
}

function NewCoinDialog({ collectionId }: NewCoinDialogProps) {
  const {
    data: columns,
    isError,
    error,
    isFetching,
  } = columnApi.useGetColumnsQuery(collectionId);
  useError(isError, error);
  const { columnValues, setColumnsValues } = useColumnValues();
  const [createCoin, { isSuccess, data: coinData }] =
    coinApi.useNewCoinMutation();
  const navigate = useNavigate();

  const handleSubmit = () => {
    const values = Object.keys(columnValues).reduce((acc, columnId) => {
      const value = columnValues[columnId];
      if (value) {
        acc.push({
          columnId,
          value,
        });
      }
      return acc;
    }, [] as CoinValue[]);
    createCoin({ collectionId, values });
  };

  useEffect(() => {
    if (isSuccess && coinData) navigate(`coin/${coinData.id}`);
  }, [isSuccess]);

  return (
    <Dialog id="new-coin">
      <Dialog.Trigger>
        <PrimaryButton>Добавить монету</PrimaryButton>
      </Dialog.Trigger>
      <Dialog.Window>
        <div className={styles.window}>
          <h2 className={styles.title}>Добавить монету</h2>
          {isFetching && <Loader />}
          {!isFetching && columns && (
            <ul className={styles["column-list"]}>
              {columns.map(
                (column) =>
                  column.type === "regular" && (
                    <li className={styles.item} key={column.id}>
                      <label htmlFor={column.id}>{column.name}</label>
                      <Input
                        value={
                          columnValues ? columnValues[column.id] || "" : ""
                        }
                        onChange={(e) =>
                          setColumnsValues(e.target.value, column.id)
                        }
                        placeholder="..."
                        id={column.id}
                        type="text"
                        className={styles.input}
                      />
                    </li>
                  )
              )}
            </ul>
          )}
          <div className={styles.buttons}>
            <Dialog.Close>
              <SecondaryButton>Отмена</SecondaryButton>
            </Dialog.Close>
            <PrimaryButton onClick={handleSubmit}>Отправить</PrimaryButton>
          </div>
        </div>
      </Dialog.Window>
    </Dialog>
  );
}

export default NewCoinDialog;
