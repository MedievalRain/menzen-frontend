import { Column } from "../../../api/apiTypes";
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
