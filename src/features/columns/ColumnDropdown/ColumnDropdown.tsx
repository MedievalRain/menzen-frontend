import { api } from "../../../api/api";
import { Column } from "../../../api/apiTypes";
import { useError } from "../../../hooks/useError";
import Dropdown from "../../../ui/Dropdown";
import DotsIcon from "../../../ui/icons/DotsIcon";
import DeleteColumnDialog from "../DeleteColumnDialog/DeleteColumnDialog";
import RenameColumnDialog from "../RenameColumnDialog/RenameColumnDialog";
import styles from "./ColumnDropdown.module.scss";
interface ColumnDropdownProps {
  column: Column;
  collectionId: string;
}

function ColumnDropdown({ column, collectionId }: ColumnDropdownProps) {
  const { data: columns } = api.useGetColumnsQuery(collectionId);
  const [changeOrder, { isError, error }] = api.useChangeColumnOrderMutation();
  useError(isError, error);
  return (
    <Dropdown id="column-dropdown">
      <div className={styles.wrapper}>
        <Dropdown.Trigger>
          <button className={styles.trigger}>
            <DotsIcon />
          </button>
        </Dropdown.Trigger>
        <Dropdown.List>
          <div className={`${styles.list}`}>
            <Dropdown.Item>
              <RenameColumnDialog collectionId={collectionId} column={column} />
            </Dropdown.Item>
            {columns && columns[0].id != column.id && (
              <Dropdown.Item>
                <button
                  onClick={() =>
                    changeOrder({
                      collectionId,
                      columnId: column.id,
                      direction: "up",
                    })
                  }
                  className={styles.item}
                >
                  Вверх
                </button>
              </Dropdown.Item>
            )}
            {columns && columns[columns.length - 1].id != column.id && (
              <Dropdown.Item>
                <button
                  onClick={() =>
                    changeOrder({
                      collectionId,
                      columnId: column.id,
                      direction: "down",
                    })
                  }
                  className={styles.item}
                >
                  Вниз
                </button>
              </Dropdown.Item>
            )}
            <Dropdown.Item>
              <DeleteColumnDialog collectionId={collectionId} column={column} />
            </Dropdown.Item>
          </div>
        </Dropdown.List>
      </div>
    </Dropdown>
  );
}

export default ColumnDropdown;
