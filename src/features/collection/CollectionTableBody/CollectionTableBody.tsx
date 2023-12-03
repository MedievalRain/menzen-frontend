import { useCoins } from "../../../hooks/useCoins";
import Loader from "../../../ui/Loader/Loader";
import CollectionTableRow from "../CollectionTableRow/CollectionTableRow";

interface CollectionTableBodyProps {
  collectionId: string;
}

function CollectionTableBody({ collectionId }: CollectionTableBodyProps) {
  const { isFetching, sortedCoins, coins } = useCoins(collectionId);

  if (!sortedCoins)
    return (
      <tbody>
        <tr>
          <td colSpan={9999}>
            <Loader />
          </td>
        </tr>
      </tbody>
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
