export interface AuthData {
  email: string;
  password: string;
}
export interface RenameTableData {
  name: string;
  id: string;
}
export interface Table {
  id: string;
  name: string;
  count: number;
}

export interface NewColumnData {
  name: string;
  id: string;
}

export interface Column {
  name: string;
  id: string;
}

export interface RenameColumnData {
  name: string;
  columnId: string;
  collectionId: string;
}
export interface DeleteColumnData {
  columnId: string;
  collectionId: string;
}
export interface ChangeColumnStatusData {
  enabled: boolean;
  columnId: string;
  collectionId: string;
}
