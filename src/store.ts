import { configureStore } from "@reduxjs/toolkit";

import uiReducer from "./ui/UIControls/uiSlice";
import columnReducer from "./features/columns/columnSlice";
import { baseApi } from "./api/baseApi";

const store = configureStore({
  reducer: {
    ui: uiReducer,
    column: columnReducer,
    [baseApi.reducerPath]: baseApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({}).concat([baseApi.middleware]),
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
