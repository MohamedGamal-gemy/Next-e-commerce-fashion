import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const categories = createApi({
  reducerPath: "categories",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000/api",
  }),
  tagTypes: ["Category"], // مفيد لو هتستخدم refetch تلقائي
  endpoints: (builder) => ({
    getCategories: builder.query({
      query: () => `/categories`,
      providesTags: ["Category"],
      keepUnusedDataFor: 60,
    }),

    deleteCategory: builder.mutation({
      query: (id) => ({
        url: `/categories/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Category"],
    }),
    updateCategory: builder.mutation({
      query: ({ id, newData }) => ({
        url: `/categories/${id}`,
        method: "PUT",
        body: newData,
      }),
      invalidatesTags: ["Category"],
    }),

    getSubcategories: builder.query({
      query: () => `/subcategories`,
    }),
  }),
});

export const {
  useGetCategoriesQuery,
  useGetSubcategoriesQuery,
  useDeleteCategoryMutation,
  useUpdateCategoryMutation,
} = categories;
