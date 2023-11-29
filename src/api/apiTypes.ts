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
