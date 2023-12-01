import { useState } from "react";
import { FormattedCoin } from "../../../types";
import Input from "../../../ui/Input/Input";
import styles from "./CoinValuesList.module.scss";
import PrimaryButton from "../../../ui/PrimaryButton/PrimaryButton";
interface CoinValuesListProps {
  coin: FormattedCoin;
}

function CoinValuesList({ coin }: CoinValuesListProps) {
  const [isEditMode, setIsEditMode] = useState(false);
  return (
    <div className={styles.wrapper}>
      <ul className={styles.list}>
        {coin.values.map((value) => (
          <li key={value.id} className={styles.item}>
            <h3 className={styles.name}>{value.name}</h3>
            {isEditMode ? (
              <Input type="text" className={styles.input} placeholder="..." />
            ) : (
              <p className={styles.value}>{value.value || "-"}</p>
            )}
          </li>
        ))}
      </ul>
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

export default CoinValuesList;
