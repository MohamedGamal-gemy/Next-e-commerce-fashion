"use client";

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const reviews = createApi({
  reducerPath: "reviews",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:9000/api",
    credentials: "include",
  }),
  tagTypes: ["cart"],
  endpoints: (builder) => ({
    getReviews: builder.query({
      query: () => ({
        url: "/reviews",
      }),
    }),
    addReview: builder.mutation({
      query: (newItem) => ({
        url: "/reviews",
        method: "POST",
        body: newItem,
      }),
    }),
    updateReview: builder.mutation({
      query: ({ reviewId, newItem }) => ({
        url: `/reviews/${reviewId}`,
        method: "PUT",
        body: newItem,
      }),
    }),
    deleteReview: builder.mutation({
      query: (id) => ({
        url: `/reviews/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useAddReviewMutation,
  useGetReviewsQuery,
  useUpdateReviewMutation,
  useDeleteReviewMutation,
} = reviews;
