export interface CoinValue {
  columnId: string;
  value: string;
}

export interface NewCoinData {
  collectionId: string;
  values: CoinValue[];
}

export interface NewCoinResponse {
  id: string;
}
