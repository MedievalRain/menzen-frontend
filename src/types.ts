export interface FormattedCoinValue {
  name: string;
  value: string;
}

export interface FormattedCoin {
  id: string;
  values: FormattedCoinValue[];
}
