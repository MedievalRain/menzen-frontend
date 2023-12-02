import { FormattedCoin } from "../../../types";
import Dropdown from "../../../ui/Dropdown";
import SecondaryButton from "../../../ui/SecondaryButton/SecondaryButton";
import ArrowDownIcon from "../../../ui/icons/ArrowDownIcon";
import ImagesDialog from "../../image/ImagesDialog/ImagesDialog";
import DeleteCoinDialog from "../DeleteCoinDialog/DeleteCoinDialog";
import EditCoinValuesDialog from "../EditCoinValuesDialog/EditCoinValuesDialog";
import styles from "./CoinDropdown.module.scss";
interface CoinDropdownProps {
  coin: FormattedCoin;
  collectionId: string;
}

function CoinDropdown({ coin, collectionId }: CoinDropdownProps) {
  return (
    <div className={styles.wrapper}>
      <Dropdown id="coin-dropdown">
        <Dropdown.Trigger>
          <SecondaryButton className={styles.trigger}>
            <span>Редактировать</span>
            <ArrowDownIcon />
          </SecondaryButton>
        </Dropdown.Trigger>
        <Dropdown.List>
          <div className={styles.list}>
            <EditCoinValuesDialog coin={coin} />
            <ImagesDialog coin={coin} />
            <DeleteCoinDialog coinId={coin.id} collectionId={collectionId} />
          </div>
        </Dropdown.List>
      </Dropdown>
    </div>
  );
}

export default CoinDropdown;
