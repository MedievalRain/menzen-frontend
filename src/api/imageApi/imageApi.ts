import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { UploadFileData } from "./imageApiTypes";

export const imageApi = createApi({
  reducerPath: "imageApi",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_BASE_API_URL,
  }),
  endpoints: (builder) => ({
    uploadImage: builder.mutation<void, UploadFileData>({
      query: (data) => {
        const formData = new FormData();
        formData.append("coinId", data.coinId);
        formData.append("file", data.file);

        return {
          url: "/image/upload",
          method: "POST",
          body: formData,
          credentials: "include",
        };
      },
    }),
  }),
});
