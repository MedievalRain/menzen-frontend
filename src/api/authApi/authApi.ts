import { AuthData } from "./authApiTypes";
import { baseApi } from "../baseApi";

export const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    register: builder.mutation<void, AuthData>({
      query: (authData) => ({
        url: "/user/register",
        method: "POST",
        body: authData,
        credentials: "include",
      }),
      invalidatesTags: ["Collections", "Coin", "Coins", "Columns"],
    }),
    login: builder.mutation<void, AuthData>({
      query: (authData) => ({
        url: "/user/login",
        method: "POST",
        body: authData,
        credentials: "include",
      }),
      invalidatesTags: ["Collections", "Coin", "Coins", "Columns"],
    }),
    verify: builder.mutation<void, string>({
      query: (id) => ({
        url: "/user/verify",
        method: "POST",
        body: { id },
        credentials: "include",
      }),
      invalidatesTags: ["Collections", "Coin", "Coins", "Columns"],
    }),
    logout: builder.mutation<void, void>({
      query: () => ({
        url: "/user/logout",
        method: "POST",
        credentials: "include",
      }),
      invalidatesTags: ["Collections", "Coin", "Coins", "Columns"],
    }),
  }),
});
