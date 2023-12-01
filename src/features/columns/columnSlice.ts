import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type ColumnsState = {
  columns: { [key: string]: string };
  sortColumnId: string | undefined;
};
const initialState: ColumnsState = {
  columns: {},
  sortColumnId: undefined,
};

interface SearchAction {
  columnId: string;
  value: string;
}

const columnSlice = createSlice({
  name: "column",
  initialState,
  reducers: {
    search: (state, action: PayloadAction<SearchAction>) => {
      state.columns[action.payload.columnId] = action.payload.value;
    },
    sort: (state, action: PayloadAction<string | undefined>) => {
      state.sortColumnId = action.payload;
    },
  },
});
export const { search } = columnSlice.actions;
export default columnSlice.reducer;
