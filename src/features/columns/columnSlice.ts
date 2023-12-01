import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type NotSorted = { id: undefined; type: undefined };
type Sorted = { id: string; type: "ASC" | "DESC" };
export type ColumnsState = {
  columns: { [key: string]: string };
  sorting: Sorted | NotSorted;
};

const initialState: ColumnsState = {
  columns: {},
  sorting: { id: undefined, type: undefined },
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
    sort: (state, action: PayloadAction<string>) => {
      if (state.sorting.id === action.payload) {
        switch (state.sorting.type) {
          case "ASC":
            state.sorting.type = "DESC";
            break;
          case "DESC":
            state.sorting = {
              id: undefined,
              type: undefined,
            };
            break;
        }
      } else {
        state.sorting = {
          id: action.payload,
          type: "ASC",
        };
      }
    },
  },
});
export const { search, sort } = columnSlice.actions;
export default columnSlice.reducer;
