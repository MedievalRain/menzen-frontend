import { useParams } from "react-router-dom";
import CoinLayout from "../../features/coin/CoinLayout/CoinLayout";

function CoinPage() {
  const { coinId, collectionId } = useParams();
  return (
    <CoinLayout
      coinId={coinId as string}
      collectionId={collectionId as string}
    />
  );
}

export default CoinPage;
