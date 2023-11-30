import { collectionApi } from "../../api/collectionApi/collectionApi";
import CollectionsGrid from "../../features/collections/CollectionsGrid/CollectionsGrid";
import Loader from "../../ui/Loader/Loader";
import styles from "./CollectionsPage.module.scss";
function CollectionsPage() {
  const { data: collections } = collectionApi.useGetCollectionsQuery();
  return (
    <div className={styles.page}>
      {collections ? <CollectionsGrid collections={collections} /> : <Loader />}
    </div>
  );
}

export default CollectionsPage;
