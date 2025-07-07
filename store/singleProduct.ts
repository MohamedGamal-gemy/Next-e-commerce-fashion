import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const singleProduct = createApi({
  reducerPath: "single",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000/api/products",
  }),
  endpoints: (builder) => ({
    getProduct: builder.query({
      query: (id) => {
        return `/${id}`;
      },
    }),
  }),
});

export const { useGetProductQuery } = singleProduct;
