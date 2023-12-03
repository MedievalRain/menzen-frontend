import { useCoin } from "../../../hooks/useCoin";
import Loader from "../../../ui/Loader/Loader";
import styles from "./CoinLayout.module.scss";
import CoinValuesList from "../CoinValuesList/CoinValuesList";
import CoinDropdown from "../CoinDropdown/CoinDropdown";
import ImagesGallery from "../../image/ImagesGallery/ImagesGallery";
interface CoinLayoutProps {
  coinId: string;
  collectionId: string;
}

function CoinLayout({ coinId, collectionId }: CoinLayoutProps) {
  const { formattedCoin: coin, isFetching } = useCoin(coinId, collectionId);

  if (!coin) return <Loader />;

  return (
    <div className={styles.wrapper}>
      <CoinDropdown collectionId={collectionId} coin={coin} />
      <div className={styles.content}>
        <CoinValuesList coin={coin} />
        <ImagesGallery imageIds={coin.imageIds} />
      </div>
    </div>
  );
}

export default CoinLayout;
