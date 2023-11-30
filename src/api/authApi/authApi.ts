import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { AuthData } from "./authApiTypes";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_BASE_API_URL,
  }),
  tagTypes: ["Collections"],
  endpoints: (builder) => ({
    register: builder.mutation<void, AuthData>({
      query: (authData) => ({
        url: "/user/register",
        method: "POST",
        body: authData,
        credentials: "include",
      }),
      invalidatesTags: ["Collections"],
    }),
    login: builder.mutation<void, AuthData>({
      query: (authData) => ({
        url: "/user/login",
        method: "POST",
        body: authData,
        credentials: "include",
      }),
      invalidatesTags: ["Collections"],
    }),
    verify: builder.mutation<void, string>({
      query: (id) => ({
        url: "/user/verify",
        method: "POST",
        body: { id },
        credentials: "include",
      }),
      invalidatesTags: ["Collections"],
    }),
  }),
});
