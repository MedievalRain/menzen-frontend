import { useEffect, useState } from "react";
import { coinApi } from "../api/coinApi/coinApi";
import { Coin, CoinValue } from "../api/coinApi/coinApiTypes";
import { useError } from "./useError";
import { columnApi } from "../api/columnApi/columnApi";
import { useAppSelector } from "./storeHooks";

export const useCoins = (collectionId: string) => {
  const [sortedCoins, setSortedCoins] = useState<Coin[]>([]);
  const {
    data: coins,
    isFetching: isCoinFetching,
    isError: isCoinError,
    error: coinError,
    isSuccess: isCoinSuccess,
  } = coinApi.useGetCoinsQuery(collectionId);
  const {
    data: columns,
    isError: isColumnError,
    isFetching: isColumnFetching,
    error: columnError,
    isSuccess: isColumnSuccess,
  } = columnApi.useGetColumnsQuery(collectionId);
  const searchValues = useAppSelector((state) => state.column.columns);
  useError(isColumnError, columnError);
  useError(isCoinError, coinError);
  useEffect(() => {
    if (isCoinSuccess && isColumnSuccess && coins && columns) {
      setSortedCoins(() => {
        const enabledColums = columns.filter((column) => column.enabled);
        return coins.reduce((acc, coin) => {
          const values: CoinValue[] = [];
          const isUnfiltered = enabledColums.every((column) => {
            const value =
              coin.values.find((v) => v.columnId === column.id)?.value || "";
            if (value.startsWith(searchValues[column.id] || "")) {
              values.push({ columnId: column.id, value });
              return true;
            } else {
              return false;
            }
          });
          if (isUnfiltered)
            acc.push({
              ...coin,
              values,
            });

          return acc;
        }, [] as Coin[]);
      });
    }
  }, [
    isCoinSuccess,
    isColumnSuccess,
    isCoinFetching,
    isColumnFetching,
    searchValues,
  ]);

  return { sortedCoins, isFetching: isCoinFetching || isColumnFetching };
};
