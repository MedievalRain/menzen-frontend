import { columnApi } from "../../../api/columnApi/columnApi";
import { useError } from "../../../hooks/useError";
import Dialog from "../../../ui/Dialog/Dialog";
import Input from "../../../ui/Input/Input";
import Loader from "../../../ui/Loader/Loader";
import PrimaryButton from "../../../ui/PrimaryButton/PrimaryButton";
import styles from "./NewCoinDialog.module.scss";

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
  return (
    <Dialog id="new-coin">
      <Dialog.Trigger>
        <PrimaryButton>Добавить монету</PrimaryButton>
      </Dialog.Trigger>
      <Dialog.Window>
        <div className={styles.wrapper}>
          <h2 className={styles.title}>Добавить монету</h2>
          {isFetching && <Loader />}
          {!isFetching && columns && (
            <ul className={styles["column-list"]}>
              {columns.map((column) => (
                <li className={styles.item} key={column.id}>
                  <label htmlFor={column.id}>{column.name}</label>
                  <Input
                    placeholder="..."
                    id={column.id}
                    type="text"
                    className={styles.input}
                  />
                </li>
              ))}
            </ul>
          )}
        </div>
      </Dialog.Window>
    </Dialog>
  );
}

export default NewCoinDialog;
