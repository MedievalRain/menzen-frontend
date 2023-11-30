import styles from "./CollectionsGrid.module.scss";
import { Collection } from "../../../api/apiTypes";
import CollectionItem from "../CollectionItem/CollectionItem";
import NewCollectionDialog from "../NewCollectionDialog/NewCollectionDialog";
interface CollectionsGridProps {
  collections: Collection[];
}

function CollectionsGrid({ collections }: CollectionsGridProps) {
  return (
    <div className={styles.grid}>
      {collections.map((collection) => (
        <CollectionItem collection={collection} key={collection.id} />
      ))}
      <NewCollectionDialog />
    </div>
  );
}

export default CollectionsGrid;
