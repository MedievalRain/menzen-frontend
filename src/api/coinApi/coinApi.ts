import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Coin, NewCoinData, NewCoinResponse } from "./coinApiTypes";

export const coinApi = createApi({
  reducerPath: "coinApi",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_BASE_API_URL,
  }),
  tagTypes: ["Coins", "Coin"],

  endpoints: (builder) => ({
    newCoin: builder.mutation<NewCoinResponse, NewCoinData>({
      query: (data) => ({
        url: "/coin/new",
        method: "POST",
        body: data,
        credentials: "include",
      }),
      invalidatesTags: ["Coins"],
    }),
    getCoins: builder.query<Coin[], string>({
      query: (collectionId) => ({
        url: "/coin/collection",
        method: "GET",
        params: { collectionId },
        credentials: "include",
      }),
      providesTags: ["Coins"],
    }),
    getCoin: builder.query<Coin, string>({
      query: (coinId) => ({
        url: "/coin",
        method: "GET",
        params: { coinId },
        credentials: "include",
      }),
      providesTags: ["Coin"],
    }),
  }),
});
