import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type ColumnsState = {
  columns: { [key: string]: string };
};
const initialState: ColumnsState = {
  columns: {},
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
  },
});
export const { search } = columnSlice.actions;
export default columnSlice.reducer;
