import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { CollectionState, SetFilterAction } from "./collectionSliceTypes";

const initialState: CollectionState = {
  pagination: { page: 0, pageSize: 20 },
  sorting: { type: undefined, id: undefined },
  filters: {},
};

const collectonSlice = createSlice({
  name: "collecton",
  initialState,
  reducers: {
    setFilter: (state, action: PayloadAction<SetFilterAction>) => {
      if (action.payload.value === "") {
        delete state.filters[action.payload.id];
      } else {
        state.filters[action.payload.id] = action.payload.value;
      }
    },
    setSorting: (state, action: PayloadAction<string>) => {
      if (state.sorting.id === action.payload) {
        if (state.sorting.type === "ASC") {
          state.sorting.type = "DESC";
        } else {
          state.sorting = {
            id: undefined,
            type: undefined,
          };
        }
      } else {
        state.sorting = {
          id: action.payload,
          type: "ASC",
        };
      }
    },
    setPage: (state, action: PayloadAction<number>) => {
      state.pagination.page = action.payload;
    },
  },
});
export const { setFilter, setPage, setSorting } = collectonSlice.actions;
export default collectonSlice.reducer;
