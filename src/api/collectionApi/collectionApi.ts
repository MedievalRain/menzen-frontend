import { baseApi } from "../baseApi";
import { RenameCollectionData, Collection } from "./collectionApiTypes";

export const collectionApi = baseApi.injectEndpoints({
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
