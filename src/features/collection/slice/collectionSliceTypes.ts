import { ColumnType } from "../../../api/columnApi/columnApiTypes";

export interface TableCoinValue {
  columnId: string;
  value: string | null;
  type: ColumnType;
}

export interface TableCoin {
  id: string;
  createdAt: Date;
  values: TableCoinValue[];
  imageIds: string[];
}
export type SortingType = "ASC" | "DESC";
export type Filters = { [key: string]: string | undefined };
export interface SortingState {
  type: SortingType | undefined;
  id: string | undefined;
}
export type CollectionState = {
  pagination: {
    pageSize: number;
    page: number;
  };
  filters: Filters;
  sorting: SortingState;
};

export interface SetFilterAction {
  id: string;
  value: string;
}
