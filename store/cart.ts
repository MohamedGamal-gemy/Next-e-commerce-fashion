"use client";

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const cart = createApi({
  reducerPath: "cart",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:9000/api",
    credentials: "include",
  }),
  tagTypes: ["cart"],
  endpoints: (builder) => ({
    getCartItems: builder.query({
      query: () => "/cart",
      providesTags: ["cart"],
    }),

    addToCart: builder.mutation({
      query: (newItem) => ({
        url: "/cart",
        method: "POST",
        body: newItem,
      }),
      invalidatesTags: ["cart"],
    }),

    deleteCartItem: builder.mutation({
      query: (itemId) => ({
        url: `/cart/item/${itemId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["cart"],
    }),
  }),
});

export const {
  useGetCartItemsQuery,
  useAddToCartMutation,
  useDeleteCartItemMutation,
} = cart;
