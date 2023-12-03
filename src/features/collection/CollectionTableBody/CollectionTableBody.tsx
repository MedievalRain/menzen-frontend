import { useCoins } from "../../../hooks/useCoins";
import Loader from "../../../ui/Loader/Loader";
import NewCoinDialog from "../../coin/NewCoinForm/NewCoinDialog";
import CollectionTableRow from "../CollectionTableRow/CollectionTableRow";
import CollectionTableTip from "../CollectionTableTip/CollectionTableTip";

interface CollectionTableBodyProps {
  collectionId: string;
}

function CollectionTableBody({ collectionId }: CollectionTableBodyProps) {
  const { isFetching, sortedCoins, coins } = useCoins(collectionId);

  if (!coins)
    return (
      <CollectionTableTip>
        <Loader />
      </CollectionTableTip>
    );

  if (coins.length === 0)
    return (
      <CollectionTableTip>
        Начните добавлять монеты нажав на{" "}
        <NewCoinDialog collectionId={collectionId} />
      </CollectionTableTip>
    );
  return (
    <tbody>
      {sortedCoins.map((coin) => (
        <CollectionTableRow key={coin.id} coin={coin} />
      ))}
    </tbody>
  );
}

export default CollectionTableBody;
