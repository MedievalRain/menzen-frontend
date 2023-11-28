import { Outlet } from "react-router-dom";
import styles from "./PagesLayout.module.scss";
function PagesLayout() {
  return (
    <div className={styles.page}>
      <Outlet />
    </div>
  );
}

export default PagesLayout;
