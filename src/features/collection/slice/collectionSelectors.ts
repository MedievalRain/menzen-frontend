import { createSelector } from "reselect";
import { CollectionState } from "./collectionSliceTypes";

const selectCoins = (state: CollectionState) => state.coins;

const selectPagination = (state: CollectionState) => state.pagination;

export const selectPaginatedCoins = createSelector(
  [selectCoins, selectPagination],
  (coins, pagination) => {
    return coins.slice(
      (pagination.page - 1) * pagination.pageSize,
      pagination.page * pagination.pageSize
    );
  }
);
