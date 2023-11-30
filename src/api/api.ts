import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  AuthData,
  BaseColumnData,
  ChangeColumnOrderData,
  ChangeColumnStatusData,
  Column,
  NewColumnData,
  RenameColumnData,
  RenameTableData,
  Table,
} from "./apiTypes";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_BASE_API_URL,
  }),
  tagTypes: ["Tables", "Columns"],
  endpoints: (builder) => ({
    register: builder.mutation<void, AuthData>({
      query: (authData) => ({
        url: "/user/register",
        method: "POST",
        body: authData,
        credentials: "include",
      }),
      invalidatesTags: ["Tables"],
    }),
    login: builder.mutation<void, AuthData>({
      query: (authData) => ({
        url: "/user/login",
        method: "POST",
        body: authData,
        credentials: "include",
      }),
      invalidatesTags: ["Tables"],
    }),
    verify: builder.mutation<void, string>({
      query: (id) => ({
        url: "/user/verify",
        method: "POST",
        body: { id },
        credentials: "include",
      }),
      invalidatesTags: ["Tables"],
    }),
    newTable: builder.mutation<void, string>({
      query: (name) => ({
        url: "/table/new",
        method: "POST",
        body: { name },
        credentials: "include",
      }),
      invalidatesTags: ["Tables"],
    }),
    renameTable: builder.mutation<void, RenameTableData>({
      query: (data) => ({
        url: "/table/rename",
        method: "POST",
        body: data,
        credentials: "include",
      }),
      invalidatesTags: ["Tables"],
    }),
    deleteTable: builder.mutation<void, string>({
      query: (id) => ({
        url: "/table",
        method: "DELETE",
        params: { id },
        credentials: "include",
      }),
      invalidatesTags: ["Tables"],
    }),
    getTables: builder.query<Table[], void>({
      query: () => ({
        url: "/table",
        method: "GET",
        credentials: "include",
      }),
      providesTags: ["Tables"],
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
