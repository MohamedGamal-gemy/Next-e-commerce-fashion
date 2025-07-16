"use client";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const colorsApi = createApi({
  reducerPath: "colorsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:9000/api" }),
  tagTypes: ["Color"],
  endpoints: (builder) => ({
    getColors: builder.query<any[], void>({
      query: () => "/variants/colors",
      providesTags: ["Color"],
    }),
  }),
});

export const { useGetColorsQuery } = colorsApi;
