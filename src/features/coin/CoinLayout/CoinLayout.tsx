import { useState } from "react";
import { useCoin } from "../../../hooks/useCoin";
import Loader from "../../../ui/Loader/Loader";
import CoinValuesList from "../CoinValuesList/CoinValuesList";
import PrimaryButton from "../../../ui/PrimaryButton/PrimaryButton";
import styles from "./CoinLayout.module.scss";
import { CoinValue } from "../../../api/coinApi/coinApiTypes";
import CoinEditValuesList from "../CoinEditValuesList/CoinEditValuesList";
interface CoinLayoutProps {
  coinId: string;
  collectionId: string;
}

function CoinLayout({ coinId, collectionId }: CoinLayoutProps) {
  const { formattedCoin: coin, isFetching } = useCoin(coinId, collectionId);
  const [isEditMode, setIsEditMode] = useState(false);
  const [newValues, setNewValues] = useState<CoinValue[]>([]);
  if (isFetching || !coin) return <Loader />;

  return (
    <div className={styles.wrapper}>
      {isEditMode ? (
        <CoinEditValuesList coin={coin} />
      ) : (
        <CoinValuesList coin={coin} />
      )}
      {isEditMode ? (
        <PrimaryButton onClick={() => setIsEditMode(false)}>
          Отправить
        </PrimaryButton>
      ) : (
        <PrimaryButton onClick={() => setIsEditMode(true)}>
          Редактировать
        </PrimaryButton>
      )}
    </div>
  );
}

export default CoinLayout;
