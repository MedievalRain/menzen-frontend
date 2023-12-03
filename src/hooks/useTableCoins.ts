import { useEffect, useState } from "react";
import { coinApi } from "../api/coinApi/coinApi";
import { useAppSelector } from "./storeHooks";
import { useColumns } from "./useColumns";
import {
  Filters,
  SortingState,
  TableCoin,
  TableCoinValue,
} from "../features/collection/slice/collectionSliceTypes";
import { Coin } from "../api/coinApi/coinApiTypes";
import { Column } from "../api/columnApi/columnApiTypes";
const collator = new Intl.Collator("en");
export const useTableCoins = (collectionId: string) => {
  const { columns } = useColumns(collectionId);
  const { data: coins } = coinApi.useGetCoinsQuery(collectionId);
  const { filters, sorting } = useAppSelector((state) => state.collection);
  const [formattedCoins, setFormattedCoins] = useState<TableCoin[]>([]);

  useEffect(() => {
    if (columns && coins) {
      const filteredCoins = filterCoins(coins, columns, filters);
      const sortedCoins = sortCoins(filteredCoins, sorting);
      setFormattedCoins(sortedCoins);
    }
  }, [filters, sorting, coins, columns]);

  return { coins, formattedCoins, columns };
};

const filterCoins = (
  coins: Coin[],
  columns: Column[],
  filters: Filters
): TableCoin[] => {
  const enabledColumns = columns.filter((column) => column.enabled);

  return coins.reduce((acc, coin) => {
    const values: TableCoinValue[] = [];
    const filtered = enabledColumns.some((column) => {
      const filterValue = filters[column.id]?.toLowerCase();
      const coinValue = coin.values.find(
        (value) => value.columnId === column.id
      );
      if (filterValue && filterValue.length !== 0) {
        if (
          !coinValue ||
          !coinValue.value.toLowerCase().startsWith(filterValue)
        )
          return true;
      }
      values.push({
        columnId: column.id,
        type: column.type,
        value: coinValue ? coinValue.value : null,
      });
    });

    if (!filtered) acc.push({ ...coin, values });
    return acc;
  }, [] as TableCoin[]);
};

const sortCoins = (coins: TableCoin[], sorting: SortingState): TableCoin[] => {
  switch (sorting.type) {
    case "ASC":
      return coins.sort((a, b) =>
        collator.compare(
          a.values.find((value) => value.columnId === sorting.id)?.value || "",
          b.values.find((value) => value.columnId === sorting.id)?.value || ""
        )
      );
    case "DESC":
      return coins.sort((a, b) =>
        collator.compare(
          b.values.find((value) => value.columnId === sorting.id)?.value || "",
          a.values.find((value) => value.columnId === sorting.id)?.value || ""
        )
      );

    default:
      return coins;
  }
};
