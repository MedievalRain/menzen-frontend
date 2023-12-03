import { ColumnType } from "./api/columnApi/columnApiTypes";

export interface FormattedCoinValue {
  id: string;
  name: string;
  value: string;
  type: ColumnType;
}

export interface FormattedCoin {
  id: string;
  values: FormattedCoinValue[];
  imageIds: string[];
}
