import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { NewCoinData, NewCoinResponse } from "./coinApiTypes";

export const coinApi = createApi({
  reducerPath: "coinApi",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_BASE_API_URL,
  }),

  endpoints: (builder) => ({
    newCoin: builder.mutation<NewCoinResponse, NewCoinData>({
      query: (data) => ({
        url: "/coin/new",
        method: "POST",
        body: data,
        credentials: "include",
      }),
    }),
  }),
});
