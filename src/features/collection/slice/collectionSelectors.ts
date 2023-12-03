import { createSelector } from "reselect";
import { CollectionState } from "./collectionSliceTypes";

const selectCoins = (state: CollectionState) => state.coins;

const selectPagination = (state: CollectionState) => state.pagination;

export const selectPaginatedCoins = createSelector(
  [selectCoins, selectPagination],
  (coins, pagination) => {
    const startIndex = pagination.page * pagination.pageSize;
    const endIndex = startIndex + pagination.pageSize;
    return coins.slice(startIndex, endIndex);
  }
);
