import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type UIState = {
  openedComponents: string[];
};
const initialState: UIState = {
  openedComponents: [],
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    openComponent: (state, action: PayloadAction<string>) => {
      state.openedComponents.push(action.payload);
    },
    closeComponent: (state, action: PayloadAction<string>) => {
      state.openedComponents = state.openedComponents.filter(
        (id) => id !== action.payload
      );
    },
  },
});
export const { openComponent, closeComponent } = uiSlice.actions;
export default uiSlice.reducer;
