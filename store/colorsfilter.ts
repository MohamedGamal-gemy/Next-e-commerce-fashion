"use client";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const colors = createApi({
  reducerPath: "colors",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000/api",
  }),
  tagTypes: ["Color"],
  endpoints: (builder) => ({
    getColors: builder.query({
      query: () => `/variants/colors`,
      providesTags: ["Color"],
      keepUnusedDataFor: 60,
    }),
  }),
});

export const { useGetColorsQuery } = colors;
