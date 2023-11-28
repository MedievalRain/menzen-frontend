import { api } from "../../api/api";
import TablesGrid from "../../features/tables/TablesGrid/TablesGrid";
import Loader from "../../ui/Loader/Loader";
import styles from "./TablesPage.module.scss";
function TablesPage() {
  const { data: tables } = api.useGetTablesQuery();
  return (
    <div className={styles.page}>
      {tables ? <TablesGrid tables={tables} /> : <Loader />}
    </div>
  );
}

export default TablesPage;
