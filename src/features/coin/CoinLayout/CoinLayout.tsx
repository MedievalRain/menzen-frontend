import { useCoin } from "../../../hooks/useCoin";
import Loader from "../../../ui/Loader/Loader";

interface CoinLayoutProps {
  coinId: string;
  collectionId: string;
}

function CoinLayout({ coinId, collectionId }: CoinLayoutProps) {
  const { formattedCoin: coin, isFetching } = useCoin(coinId, collectionId);
  if (isFetching || !coin) return <Loader />;

  return (
    <div>
      <ul>
        {coin.values.map((value) => (
          <li>
            <p>{value.name}</p>
            <p>{value.value}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CoinLayout;
