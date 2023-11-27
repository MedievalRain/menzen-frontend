import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { AuthData, RenameTableData, Table } from "./apiTypes";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_BASE_API_URL,
  }),
  endpoints: (builder) => ({
    register: builder.mutation<void, AuthData>({
      query: (authData) => ({
        url: "/user/register",
        method: "POST",
        body: authData,
        credentials: "include",
      }),
    }),
    login: builder.mutation<void, AuthData>({
      query: (authData) => ({
        url: "/user/login",
        method: "POST",
        body: authData,
        credentials: "include",
      }),
    }),
    verify: builder.mutation<void, string>({
      query: (id) => ({
        url: "/user/verify",
        method: "POST",
        body: { id },
        credentials: "include",
      }),
    }),
    newTable: builder.mutation<void, string>({
      query: (name) => ({
        url: "/table/new",
        method: "POST",
        body: { name },
        credentials: "include",
      }),
    }),
    renameTable: builder.mutation<void, RenameTableData>({
      query: (data) => ({
        url: "/table/rename",
        method: "POST",
        body: data,
        credentials: "include",
      }),
    }),
    deleteTable: builder.mutation<void, string>({
      query: (id) => ({
        url: "/table",
        method: "DELETE",
        params: { id },
        credentials: "include",
      }),
    }),
    getTables: builder.query<Table[], void>({
      query: () => ({
        url: "/table",
        method: "GET",
        credentials: "include",
      }),
    }),
  }),
});
