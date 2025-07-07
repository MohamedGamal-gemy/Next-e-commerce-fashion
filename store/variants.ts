"use client";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const variants = createApi({
  reducerPath: "variants",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000/api",
  }),
  endpoints: (builder) => ({
    getVariantById: builder.query({
      query: (id) => {
        return `/variants/${id}`;
      },
    }),
  }),
});

export const { useGetVariantByIdQuery } = variants;
