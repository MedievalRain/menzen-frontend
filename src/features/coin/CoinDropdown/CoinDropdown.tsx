import { FormattedCoin } from "../../../types";
import Dropdown from "../../../ui/Dropdown";
import SecondaryButton from "../../../ui/SecondaryButton/SecondaryButton";
import StyledDropdownItem from "../../../ui/StyledDropdownItem/StyledDropdownItem";
import ArrowDownIcon from "../../../ui/icons/ArrowDownIcon";
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
            <StyledDropdownItem>Изменить фото</StyledDropdownItem>
            <StyledDropdownItem>Удалить</StyledDropdownItem>
          </div>
        </Dropdown.List>
      </Dropdown>
    </div>
  );
}

export default CoinDropdown;
