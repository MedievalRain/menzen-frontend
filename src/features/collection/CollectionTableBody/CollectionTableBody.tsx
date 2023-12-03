import { useAppSelector } from "../../../hooks/storeHooks";
import { useTableCoins } from "../../../hooks/useTableCoins";
import Loader from "../../../ui/Loader/Loader";
import NewCoinDialog from "../../coin/NewCoinForm/NewCoinDialog";
import CollectionTableRow from "../CollectionTableRow/CollectionTableRow";
import CollectionTableTip from "../CollectionTableTip/CollectionTableTip";
interface CollectionTableBodyProps {
  collectionId: string;
}

function CollectionTableBody({ collectionId }: CollectionTableBodyProps) {
  const { coins } = useTableCoins(collectionId);
  const formattedCoins = useAppSelector((state) => state.collection.coins);
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
      {formattedCoins.slice(0, 20).map((coin) => (
        <CollectionTableRow key={coin.id} coin={coin} />
      ))}
    </tbody>
  );
}

export default CollectionTableBody;
