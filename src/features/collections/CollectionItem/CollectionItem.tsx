import { Link } from "react-router-dom";
import styles from "./CollectionItem.module.scss";
import CollectionDropdown from "../CollectionDropdown/CollectionDropdown";
import { Collection } from "../../../api/collectionApi/collectionApiTypes";

interface CollectionItemProps {
  collection: Collection;
}

function CollectionItem({ collection }: CollectionItemProps) {
  return (
    <div className={styles.item}>
      <CollectionDropdown collection={collection} />
      <Link className={styles.link} to={`/app/collections/${collection.id}`}>
        <p className={styles.count}>{collection.count}</p>
        <p className={styles.name}>{collection.name}</p>
      </Link>
    </div>
  );
}

export default CollectionItem;
