import { Collection } from "../../../api/apiTypes";
import Dropdown from "../../../ui/Dropdown";
import DotsIcon from "../../../ui/icons/DotsIcon";
import DeleteCollectionDialog from "../DeleteTableDialog/DeleteCollectionDialog";
import RenameCollectionDialog from "../RenameCollectionDialog/RenameCollectionDialog";
import styles from "./CollectionDropdown.module.scss";

interface CollectionDropdownProps {
  collection: Collection;
}

function CollectionDropdown({ collection }: CollectionDropdownProps) {
  return (
    <Dropdown id="collection-dropdown">
      <div className={styles.wrapper}>
        <Dropdown.Trigger>
          <button className={styles.trigger}>
            <DotsIcon />
          </button>
        </Dropdown.Trigger>
        <Dropdown.List>
          <div className={`${styles.list}`}>
            <Dropdown.Item>
              <RenameCollectionDialog collection={collection} />
            </Dropdown.Item>
            <Dropdown.Item>
              <DeleteCollectionDialog collection={collection} />
            </Dropdown.Item>
          </div>
        </Dropdown.List>
      </div>
    </Dropdown>
  );
}

export default CollectionDropdown;
