import { ColumnType } from "./api/columnApi/columnApiTypes";

export interface FormattedCoinValue {
  id: string;
  name: string;
  value: string;
}

export interface FormattedCoin {
  id: string;
  values: FormattedCoinValue[];
  imageIds: string[];
}

export interface TableCoinValue {
  columnId: string;
  value: string;
  type: ColumnType;
}

export interface TableCoin {
  id: string;
  createdAt: Date;
  values: TableCoinValue[];
  imageIds: string[];
}
