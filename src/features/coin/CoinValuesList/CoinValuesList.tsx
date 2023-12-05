import { FormattedCoin } from "../../../types";
import styles from "./CoinValuesList.module.scss";
interface CoinValuesListProps {
  coin: FormattedCoin;
}

function CoinValuesList({ coin }: CoinValuesListProps) {
  return (
    <ul className={styles.list}>
      {coin.values
        .filter((value) => value.type != "images")
        .map((value) => (
          <li key={value.id} className={styles.item}>
            <h3 className={styles.name}>{value.name}</h3>
            <p className={styles.value}>{value.value || "-"}</p>
          </li>
        ))}
    </ul>
  );
}

export default CoinValuesList;
