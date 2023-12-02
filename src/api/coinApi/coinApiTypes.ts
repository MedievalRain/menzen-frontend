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

export interface Coin {
  id: string;
  createdAt: Date;
  values: CoinValue[];
  images: string[];
}

export interface EditCoinFieldsData {
  coinId: string;
  values: CoinValue[];
}
