import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RenameCollectionData, Collection } from "./collectionApiTypes";

export const collectionApi = createApi({
  reducerPath: "collectionApi",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_BASE_API_URL,
  }),
  tagTypes: ["Collections"],
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
  }),
});
