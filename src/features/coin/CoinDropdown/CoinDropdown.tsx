import { FormattedCoin } from "../../../types";
import Dropdown from "../../../ui/Dropdown";
import SecondaryButton from "../../../ui/SecondaryButton/SecondaryButton";
import ArrowDownIcon from "../../../ui/icons/ArrowDownIcon";
import UploadImageDialog from "../../image/UploadImageDialog/UploadImageDialog";
import DeleteCoinDialog from "../DeleteCoinDialog/DeleteCoinDialog";
import EditCoinValuesDialog from "../EditCoinValuesDialog/EditCoinValuesDialog";
import styles from "./CoinDropdown.module.scss";
interface CoinDropdownProps {
  coin: FormattedCoin;
}

function CoinDropdown({ coin }: CoinDropdownProps) {
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
            <UploadImageDialog coinId={coin.id} />
            <DeleteCoinDialog coinId={coin.id} />
          </div>
        </Dropdown.List>
      </Dropdown>
    </div>
  );
}

export default CoinDropdown;
