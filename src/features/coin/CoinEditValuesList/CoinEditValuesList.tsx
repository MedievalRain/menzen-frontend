import { FormattedCoin } from "../../../types";
import Input from "../../../ui/Input/Input";
import styles from "./CoinEditValuesList.module.scss";
interface CoinEditValuesListProps {
  coin: FormattedCoin;
}

function CoinEditValuesList({ coin }: CoinEditValuesListProps) {
  return (
    <ul className={styles.list}>
      {coin.values.map((value) => (
        <li key={value.id} className={styles.item}>
          <h3 className={styles.name}>{value.name}</h3>
          <Input type="text" className={styles.input} placeholder="..." />
        </li>
      ))}
    </ul>
  );
}

export default CoinEditValuesList;
