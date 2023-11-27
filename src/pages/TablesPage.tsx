import { api } from "../api/api";
import TablesGrid from "../features/tables/TablesGrid/TablesGrid";
import Loader from "../ui/Loader/Loader";

function TablesPage() {
  const { data: tables } = api.useGetTablesQuery();
  if (!tables) return <Loader />;
  return <TablesGrid tables={tables} />;
}

export default TablesPage;
