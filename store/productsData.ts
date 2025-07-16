"use client";
import { api } from "@/server";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productsData = createApi({
  reducerPath: "Product",
  baseQuery: fetchBaseQuery({
    baseUrl: api,
  }),
  endpoints: (builder) => ({
    getProductsFashion: builder.query({
      query: () => {
        return `/products/show`;
      },
    }),
  }),
});

export const { useGetProductsFashionQuery } = productsData;
