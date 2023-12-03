import { Outlet } from "react-router-dom";
import styles from "./PagesLayout.module.scss";
import Footer from "../../ui/Footer/Footer";
function PagesLayout() {
  return (
    <div className={styles.page}>
      <Outlet />
      <Footer />
    </div>
  );
}

export default PagesLayout;
