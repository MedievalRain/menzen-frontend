import { Coin } from "../../../api/coinApi/coinApiTypes";
import Loader from "../../../ui/Loader/Loader";
import NewCoinDialog from "../../coin/NewCoinForm/NewCoinDialog";
import CollectionTableRow from "../CollectionTableRow/CollectionTableRow";
import CollectionTableTip from "../CollectionTableTip/CollectionTableTip";
import { TableCoin } from "../slice/collectionSliceTypes";
interface CollectionTableBodyProps {
  coins: Coin[] | undefined;
  formattedCoins: TableCoin[];
  collectionId: string;
}

function CollectionTableBody({
  coins,
  formattedCoins,
  collectionId,
}: CollectionTableBodyProps) {
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
      {formattedCoins.map((coin) => (
        <CollectionTableRow key={coin.id} coin={coin} />
      ))}
    </tbody>
  );
}

export default CollectionTableBody;
