import { Link } from "react-router-dom";
import { usePath } from "../hooks/usePath";
import styles from "./Breadcrumb.module.scss";
function Breadcrumb() {
  const paths = usePath();
  return (
    <div className={styles.wrapper}>
      {paths.map((path) => (
        <Link className={styles.link} to={path.route} key={path.route}>
          {path.name}
        </Link>
      ))}
    </div>
  );
}

export default Breadcrumb;
