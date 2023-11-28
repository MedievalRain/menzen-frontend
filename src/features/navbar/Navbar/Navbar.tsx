import { Link } from "react-router-dom";
import NavLogo from "../../../ui/NavLogo/NavLogo";
import styles from "./Navbar.module.scss";
import { usePath } from "../hooks/usePath";
import Breadcrumb from "../Breadcrumb/Breadcrumb";

function Navbar() {
  usePath();
  return (
    <nav className={styles.nav}>
      <Link to="/app">
        <NavLogo />
      </Link>
      <Breadcrumb />
      <div></div>
    </nav>
  );
}

export default Navbar;
