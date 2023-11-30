import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  BaseColumnData,
  ChangeColumnOrderData,
  ChangeColumnStatusData,
  Collection,
  Column,
  NewColumnData,
  RenameCollectionData,
  RenameColumnData,
} from "./apiTypes";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_BASE_API_URL,
  }),
  tagTypes: ["Collections", "Columns"],
  endpoints: (builder) => ({
    newCollection: builder.mutation<void, string>({
      query: (name) => ({
        url: "/collection/new",
        method: "POST",
        body: { name },
        credentials: "include",
      }),
      invalidatesTags: ["Collections"],
    }),
    renameCollection: builder.mutation<void, RenameCollectionData>({
      query: (data) => ({
        url: "/collection/rename",
        method: "POST",
        body: data,
        credentials: "include",
      }),
      invalidatesTags: ["Collections"],
    }),
    deleteCollection: builder.mutation<void, string>({
      query: (id) => ({
        url: "/collection",
        method: "DELETE",
        params: { id },
        credentials: "include",
      }),
      invalidatesTags: ["Collections"],
    }),
    getCollections: builder.query<Collection[], void>({
      query: () => ({
        url: "/collection",
        method: "GET",
        credentials: "include",
      }),
      providesTags: ["Collections"],
    }),
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
