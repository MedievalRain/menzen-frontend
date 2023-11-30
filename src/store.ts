import { configureStore } from "@reduxjs/toolkit";

import uiReducer from "./ui/UIControls/uiSlice";
import { authApi } from "./api/authApi/authApi";
import { collectionApi } from "./api/collectionApi/collectionApi";
import { columnApi } from "./api/columnApi/columnApi";

const store = configureStore({
  reducer: {
    ui: uiReducer,

    [authApi.reducerPath]: authApi.reducer,
    [collectionApi.reducerPath]: collectionApi.reducer,
    [columnApi.reducerPath]: columnApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({}).concat([
      authApi.middleware,
      collectionApi.middleware,
      columnApi.middleware,
    ]),
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
