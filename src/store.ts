import { configureStore } from "@reduxjs/toolkit";
import { api } from "./api/api";
import uiReducer from "./ui/UIControls/uiSlice";
import { authApi } from "./api/authApi/authApi";
import { collectionApi } from "./api/collectionApi/collectionApi";

const store = configureStore({
  reducer: {
    ui: uiReducer,
    [api.reducerPath]: api.reducer,
    [authApi.reducerPath]: authApi.reducer,
    [collectionApi.reducerPath]: collectionApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({}).concat([
      api.middleware,
      authApi.middleware,
      collectionApi.middleware,
    ]),
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
