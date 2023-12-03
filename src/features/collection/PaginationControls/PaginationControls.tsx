import { TableCoin } from "../slice/collectionSliceTypes";
import styles from "./PaginationControls.module.scss";
interface PaginationControlsProps {
  formattedCoins: TableCoin[];
}

function PaginationControls({ formattedCoins }: PaginationControlsProps) {
  return <div className={styles.wrapper}></div>;
}

export default PaginationControls;
