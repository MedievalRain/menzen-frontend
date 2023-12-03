import { useAppSelector } from "../../../hooks/storeHooks";
import ArrowLeftIcon from "../../../ui/icons/ArrowLeftIcon";
import ArrowRightIcon from "../../../ui/icons/ArrowRightIcon";
import styles from "./PaginationControls.module.scss";

function PaginationControls() {
  const {
    pagination: { page, pageSize },
    coins,
  } = useAppSelector((state) => state.collection);
  const maxPage = Math.floor(coins.length / pageSize);
  return (
    <div className={styles.wrapper}>
      <button className={styles.button}>
        <ArrowLeftIcon />
      </button>
      <span>
        {page}/{maxPage}
      </span>
      <button className={styles.button}>
        <ArrowRightIcon />
      </button>
    </div>
  );
}

export default PaginationControls;
