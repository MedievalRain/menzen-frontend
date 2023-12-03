import { columnApi } from "../api/columnApi/columnApi";
import { useError } from "./useError";

export const useColumns = (collectionId: string) => {
  const {
    data: columns,
    isError,
    error,
    isFetching,
  } = columnApi.useGetColumnsQuery(collectionId);
  useError(isError, error);

  return { columns, isFetching };
};
