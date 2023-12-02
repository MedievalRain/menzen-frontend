import { configureStore } from "@reduxjs/toolkit";

import uiReducer from "./ui/UIControls/uiSlice";
import { authApi } from "./api/authApi/authApi";
import { collectionApi } from "./api/collectionApi/collectionApi";
import { columnApi } from "./api/columnApi/columnApi";
import { coinApi } from "./api/coinApi/coinApi";
import columnReducer from "./features/columns/columnSlice";
import { imageApi } from "./api/imageApi/imageApi";

const store = configureStore({
  reducer: {
    ui: uiReducer,
    column: columnReducer,
    [authApi.reducerPath]: authApi.reducer,
    [collectionApi.reducerPath]: collectionApi.reducer,
    [columnApi.reducerPath]: columnApi.reducer,
    [coinApi.reducerPath]: coinApi.reducer,
    [imageApi.reducerPath]: imageApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({}).concat([
      authApi.middleware,
      collectionApi.middleware,
      columnApi.middleware,
      coinApi.middleware,
      imageApi.middleware,
    ]),
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
