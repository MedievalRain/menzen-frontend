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
