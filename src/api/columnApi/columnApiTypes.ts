export interface NewColumnData {
  name: string;
  id: string;
}
export type ColumnType = "regular" | "images";

export interface Column {
  name: string;
  id: string;
  ordering: number;
  enabled: boolean;
  type: ColumnType;
}

export interface BaseColumnData {
  columnId: string;
  collectionId: string;
}

export interface RenameColumnData extends BaseColumnData {
  name: string;
}

export interface ChangeColumnStatusData extends BaseColumnData {
  enabled: boolean;
}
export interface ChangeColumnOrderData extends BaseColumnData {
  direction: "up" | "down";
}
