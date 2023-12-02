import { UploadFileData } from "./imageApiTypes";
import { baseApi } from "../baseApi";

export const imageApi = baseApi.injectEndpoints({
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
      invalidatesTags: ["Coin", "Coins"],
    }),
    deleteImage: builder.mutation<void, string>({
      query: (imageId) => {
        return {
          url: "/image",
          method: "DELETE",
          params: { imageId },
          credentials: "include",
        };
      },
      invalidatesTags: ["Coin", "Coins"],
    }),
  }),
});
