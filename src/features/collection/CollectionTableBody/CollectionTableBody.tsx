import { useCoins } from "../../../hooks/useCoins";
import Loader from "../../../ui/Loader/Loader";
import CollectionTableRow from "../CollectionTableRow/CollectionTableRow";

interface CollectionTableBodyProps {
  collectionId: string;
}

function CollectionTableBody({ collectionId }: CollectionTableBodyProps) {
  const { isFetching, sortedCoins } = useCoins(collectionId);
  if (isFetching || !sortedCoins) return <Loader />;
  return (
    <tbody>
      {sortedCoins.map((coin) => (
        <CollectionTableRow key={coin.id} coin={coin} />
      ))}
    </tbody>
  );
}

export default CollectionTableBody;
