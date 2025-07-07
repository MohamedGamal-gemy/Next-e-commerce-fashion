import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const categories = createApi({
  reducerPath: "categories",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000/api",
  }),
  endpoints: (builder) => ({
    getCategories: builder.query({
      query: () => {
        return `/categories`;
      },
    }),
    getSubcategories: builder.query({
      query: () => {
        return `/subcategories`;
      },
    }),
  }),
});

export const { useGetCategoriesQuery, useGetSubcategoriesQuery } = categories;
