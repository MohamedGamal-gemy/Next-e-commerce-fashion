import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const productsFilter = createApi({
  reducerPath: "filter",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000/api",
  }),
  endpoints: (builder) => ({
    getFilteringProducts: builder.query({
      query: (category) => {
        return `/products/filters?category=${category}`;
      },
    }),
  }),
});

export const { useGetFilteringProductsQuery } = productsFilter;
