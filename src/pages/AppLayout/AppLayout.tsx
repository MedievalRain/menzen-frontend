import { Outlet } from "react-router-dom";
import Navbar from "../../features/navbar/Navbar/Navbar";
import styles from "./AppLayout.module.scss";
function AppLayout() {
  return (
    <div className={styles.app}>
      <Navbar />
      <Outlet />
    </div>
  );
}

export default AppLayout;
