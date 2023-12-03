import { useEffect, useState } from "react";
import { coinApi } from "../api/coinApi/coinApi";
import { Coin } from "../api/coinApi/coinApiTypes";
import { useError } from "./useError";
import { columnApi } from "../api/columnApi/columnApi";
import { useAppSelector } from "./storeHooks";
import { SortingType } from "../features/columns/columnSlice";
import { Column } from "../api/columnApi/columnApiTypes";
import { TableCoin, TableCoinValue } from "../types";
const collator = new Intl.Collator("en");
export const useCoins = (collectionId: string) => {
  const [sortedCoins, setSortedCoins] = useState<TableCoin[]>([]);
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
  const { columns: searchValues, sorting } = useAppSelector(
    (state) => state.column
  );
  const { id: sortingId, type: sortingType } = sorting;

  useError(isColumnError, columnError);
  useError(isCoinError, coinError);
  useEffect(() => {
    if (
      isCoinSuccess &&
      isColumnSuccess &&
      !isCoinFetching &&
      !isCoinFetching &&
      coins &&
      columns
    ) {
      setSortedCoins(() => {
        const enabledColums = columns.filter((column) => column.enabled);
        const filteredCoins: TableCoin[] = filterCoins(
          coins,
          enabledColums,
          searchValues
        );
        return sortCoins(filteredCoins, sortingId, sortingType);
      });
    }
  }, [
    isCoinSuccess,
    isColumnSuccess,
    isCoinFetching,
    isColumnFetching,
    searchValues,
    sortingId,
    sortingType,
  ]);

  return { sortedCoins, isFetching: isCoinFetching || isColumnFetching };
};

const filterCoins = (
  coins: Coin[],
  columns: Column[],
  searchValues: { [key: string]: string }
): TableCoin[] => {
  return coins.reduce((acc, coin) => {
    const values: TableCoinValue[] = [];
    const isUnfiltered = columns.every((column) => {
      const value =
        coin.values.find((v) => v.columnId === column.id)?.value || "";
      if (
        value
          .toLowerCase()
          .startsWith((searchValues[column.id] || "").toLowerCase())
      ) {
        values.push({ columnId: column.id, value, type: column.type });
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
  }, [] as TableCoin[]);
};

const sortCoins = (
  coins: TableCoin[],
  sortingId: string | undefined,
  sortingType: SortingType
): TableCoin[] => {
  switch (sortingType) {
    case undefined:
      return coins;
    case "ASC":
      return coins.sort((a, b) =>
        collator.compare(
          a.values.find((value) => value.columnId === sortingId)?.value || "",
          b.values.find((value) => value.columnId === sortingId)?.value || ""
        )
      );
    case "DESC":
      return coins.sort((a, b) =>
        collator.compare(
          b.values.find((value) => value.columnId === sortingId)?.value || "",
          a.values.find((value) => value.columnId === sortingId)?.value || ""
        )
      );
  }
};
