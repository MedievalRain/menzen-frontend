import { useParams } from "react-router-dom";
import CollectionTable from "../../features/collection/CollectionTable/CollectionTable";

function CollectionPage() {
  const { collectionId } = useParams();
  return <CollectionTable collectionId={collectionId as string} />;
}

export default CollectionPage;
