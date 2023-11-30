import { configureStore } from "@reduxjs/toolkit";
import { api } from "./api/api";
import uiReducer from "./ui/UIControls/uiSlice";

const store = configureStore({
  reducer: {
    ui: uiReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({}).concat(api.middleware),
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
