import { Link } from "react-router-dom";
import { usePath } from "../hooks/usePath";
import styles from "./Breadcrumb.module.scss";
function Breadcrumb() {
  const paths = usePath();
  return (
    <div>
      {paths.map((path) => (
        <span className={styles.wrapper} key={path.route}>
          <Link className={styles.link} to={path.route}>
            {path.name}
          </Link>
        </span>
      ))}
    </div>
  );
}

export default Breadcrumb;
