import { Coin } from "../../../api/coinApi/coinApiTypes";
import { useAppSelector } from "../../../hooks/storeHooks";
import Loader from "../../../ui/Loader/Loader";
import NewCoinDialog from "../../coin/NewCoinForm/NewCoinDialog";
import CollectionTableRow from "../CollectionTableRow/CollectionTableRow";
import CollectionTableTip from "../CollectionTableTip/CollectionTableTip";
import { selectPaginatedCoins } from "../slice/collectionSelectors";
interface CollectionTableBodyProps {
  coins: Coin[] | undefined;

  collectionId: string;
  columnsCount: number;
}

function CollectionTableBody({
  coins,
  collectionId,
  columnsCount,
}: CollectionTableBodyProps) {
  const paginatedCoins = useAppSelector((state) =>
    selectPaginatedCoins(state.collection)
  );
  if (!coins)
    return (
      <CollectionTableTip columnsCount={columnsCount}>
        <Loader />
      </CollectionTableTip>
    );

  if (coins.length === 0)
    return (
      <CollectionTableTip columnsCount={columnsCount}>
        Начните добавлять монеты нажав на{" "}
        <NewCoinDialog collectionId={collectionId} />
      </CollectionTableTip>
    );
  if (paginatedCoins.length === 0)
    return (
      <CollectionTableTip columnsCount={columnsCount}>
        Ничего не найдено
      </CollectionTableTip>
    );
  return (
    <tbody>
      {paginatedCoins.map((coin) => (
        <CollectionTableRow key={coin.id} coin={coin} />
      ))}
    </tbody>
  );
}

export default CollectionTableBody;
