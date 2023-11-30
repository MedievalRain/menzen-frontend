import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  BaseColumnData,
  ChangeColumnOrderData,
  ChangeColumnStatusData,
  Column,
  NewColumnData,
  RenameColumnData,
} from "./apiTypes";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_BASE_API_URL,
  }),
  tagTypes: ["Collections", "Columns"],
  endpoints: (builder) => ({
    createColumn: builder.mutation<void, NewColumnData>({
      query: (data) => ({
        url: "/column/new",
        method: "POST",
        body: data,
        credentials: "include",
      }),
      invalidatesTags: ["Columns"],
    }),
    getColumns: builder.query<Column[], string>({
      query: (id) => ({
        url: "/column",
        method: "GET",
        params: { id },
        credentials: "include",
      }),
      providesTags: ["Columns"],
      transformResponse: (response: Column[]) =>
        response.sort((a, b) => a.ordering - b.ordering),
    }),
    renameColumn: builder.mutation<void, RenameColumnData>({
      query: (data) => ({
        url: "/column/name",
        method: "POST",
        body: data,
        credentials: "include",
      }),
      invalidatesTags: ["Columns"],
    }),
    changeColumnStatus: builder.mutation<void, ChangeColumnStatusData>({
      query: (data) => ({
        url: "/column/status",
        method: "POST",
        body: data,
        credentials: "include",
      }),
      invalidatesTags: ["Columns"],
    }),
    changeColumnOrder: builder.mutation<void, ChangeColumnOrderData>({
      query: (data) => ({
        url: "/column/order",
        method: "POST",
        body: data,
        credentials: "include",
      }),
      invalidatesTags: ["Columns"],
    }),

    deleteColumn: builder.mutation<void, BaseColumnData>({
      query: (data) => ({
        url: "/column",
        method: "DELETE",
        params: data,
        credentials: "include",
      }),
      invalidatesTags: ["Columns"],
    }),
  }),
});
