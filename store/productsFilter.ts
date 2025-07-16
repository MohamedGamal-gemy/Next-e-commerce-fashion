import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const productsFilter = createApi({
  reducerPath: "filter",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000/api",
  }),
  endpoints: (builder) => ({
    getFilteringProducts: builder.query({
      query: () => {
        return `/products/filters?category=men`;
      },
    }),
  }),
});

export const { useGetFilteringProductsQuery } = productsFilter;
