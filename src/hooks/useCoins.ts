import { useEffect, useState } from "react";
import { coinApi } from "../api/coinApi/coinApi";
import { Coin, CoinValue } from "../api/coinApi/coinApiTypes";
import { useError } from "./useError";
import { columnApi } from "../api/columnApi/columnApi";

export const useCoins = (collectionId: string) => {
  const [sortedCoins, setSortedCoins] = useState<Coin[]>([]);
  const {
    data: coins,
    isFetching,
    isError: isCoinError,
    error: coinError,
    isSuccess: isCoinSuccess,
  } = coinApi.useGetCoinsQuery(collectionId);
  const {
    data: columns,
    isError: isColumnError,
    error: columnError,
    isSuccess: isColumnSuccess,
  } = columnApi.useGetColumnsQuery(collectionId);

  useError(isColumnError, columnError);
  useError(isCoinError, coinError);
  useEffect(() => {
    if (isCoinSuccess && isColumnSuccess && coins && columns) {
      setSortedCoins(
        coins.reduce((acc, coin) => {
          const values: CoinValue[] = columns.map((column) => {
            const value =
              coin.values.find((v) => v.columnId === column.id)?.value || "";
            return { columnId: column.id, value };
          });

          acc.push({
            ...coin,
            values,
          });
          return acc;
        }, [] as Coin[])
      );
    }
  }, [isCoinSuccess, isColumnSuccess]);

  return { sortedCoins, isFetching };
};
