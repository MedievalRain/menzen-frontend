import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { AuthData } from "./apiTypes";

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
  }),
});
