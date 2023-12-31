import { columnApi } from "../../../api/columnApi/columnApi";
import { Column } from "../../../api/columnApi/columnApiTypes";
import { useError } from "../../../hooks/useError";
import Dropdown from "../../../ui/Dropdown";
import StyledDropdownItem from "../../../ui/StyledDropdownItem/StyledDropdownItem";
import DotsIcon from "../../../ui/icons/DotsIcon";
import DeleteColumnDialog from "../DeleteColumnDialog/DeleteColumnDialog";
import RenameColumnDialog from "../RenameColumnDialog/RenameColumnDialog";
import styles from "./ColumnDropdown.module.scss";
interface ColumnDropdownProps {
  column: Column;
  collectionId: string;
}

function ColumnDropdown({ column, collectionId }: ColumnDropdownProps) {
  const { data: columns } = columnApi.useGetColumnsQuery(collectionId);
  const [changeOrder, { isError, error }] =
    columnApi.useChangeColumnOrderMutation();
  useError(isError, error);
  return (
    <Dropdown>
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
                <StyledDropdownItem
                  onClick={() =>
                    changeOrder({
                      collectionId,
                      columnId: column.id,
                      direction: "up",
                    })
                  }
                >
                  Вверх
                </StyledDropdownItem>
              </Dropdown.Item>
            )}
            {columns && columns[columns.length - 1].id != column.id && (
              <Dropdown.Item>
                <StyledDropdownItem
                  onClick={() =>
                    changeOrder({
                      collectionId,
                      columnId: column.id,
                      direction: "down",
                    })
                  }
                >
                  Вниз
                </StyledDropdownItem>
              </Dropdown.Item>
            )}
            {column.type === "regular" && (
              <Dropdown.Item>
                <DeleteColumnDialog
                  collectionId={collectionId}
                  column={column}
                />
              </Dropdown.Item>
            )}
          </div>
        </Dropdown.List>
      </div>
    </Dropdown>
  );
}

export default ColumnDropdown;
