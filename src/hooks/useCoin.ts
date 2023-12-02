import { useEffect, useState } from "react";
import { coinApi } from "../api/coinApi/coinApi";
import { useColumns } from "./useColumns";
import { useError } from "./useError";
import { FormattedCoin, FormattedCoinValue } from "../types";

export const useCoin = (coinId: string, collectionId: string) => {
  const {
    data: coin,
    isError,
    error,
    isFetching: isCoinFetching,
  } = coinApi.useGetCoinQuery(coinId);
  useError(isError, error);
  const { columns, isFetching: isColumnsFetching } = useColumns(collectionId);
  const [formattedCoin, setFormattedCoin] = useState<FormattedCoin | null>(
    null
  );

  useEffect(() => {
    if (coin && !isCoinFetching && !isCoinFetching) {
      const formattedValues: FormattedCoinValue[] = columns.map((column) => {
        const value =
          coin.values.find((value) => value.columnId === column.id)?.value ||
          "";
        return { name: column.name, id: column.id, value };
      });
      setFormattedCoin({
        id: coinId,
        values: formattedValues,
        imageIds: coin.imageIds,
      });
    }
  }, [isCoinFetching, isColumnsFetching]);

  return { formattedCoin, isFetching: isCoinFetching || isColumnsFetching };
};
