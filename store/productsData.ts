"use client";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const productsData = createApi({
  reducerPath: "Product",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000/api",
  }),
  endpoints: (builder) => ({
    getProductsFashion: builder.query({
      query: ({ page, limit }) => {
        return `/products?page=${page}&limit=${limit}`;
      },
    }),
  }),
});

export const { useGetProductsFashionQuery } = productsData;
