import { useAppDispatch, useAppSelector } from "../../../hooks/storeHooks";
import ArrowLeftIcon from "../../../ui/icons/ArrowLeftIcon";
import ArrowRightIcon from "../../../ui/icons/ArrowRightIcon";
import { setPage } from "../slice/collectionSlice";
import { getMaxPage } from "../utils";
import styles from "./PaginationControls.module.scss";

function PaginationControls() {
  const {
    pagination: { page, pageSize },
    coins,
  } = useAppSelector((state) => state.collection);
  const dispatch = useAppDispatch();
  const maxPage = getMaxPage(coins.length, pageSize);
  return (
    <div className={styles.wrapper}>
      <button
        disabled={page <= 1}
        onClick={() => dispatch(setPage(page - 1))}
        className={styles.button}
      >
        <ArrowLeftIcon />
      </button>
      <span>
        {page}/{maxPage}
      </span>
      <button
        disabled={page >= maxPage}
        onClick={() => dispatch(setPage(page + 1))}
        className={styles.button}
      >
        <ArrowRightIcon />
      </button>
    </div>
  );
}

export default PaginationControls;
