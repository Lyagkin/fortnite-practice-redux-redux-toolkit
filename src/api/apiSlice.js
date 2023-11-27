import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://fortniteapi.io/v2/shop?lang=ru",
    prepareHeaders: (headers) => {
      headers.set("Authorization", "249ee727-f2a51f04-f217f871-a6a30726");
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => "",
    }),
  }),
});

export const { useGetProductsQuery } = apiSlice;
