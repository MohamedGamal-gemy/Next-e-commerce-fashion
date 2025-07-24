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
      query: ({ page = 1, limit = 3 }) => `/cart?page=${page}&limit=${limit}`,
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
    updateCartstock: builder.mutation({
      query: ({
        itemId,
        action,
      }: {
        itemId: string;
        action: "increment" | "decrement";
      }) => ({
        url: `/cart/item/${itemId}`,
        method: "PUT",
        body: { action },
      }),
      invalidatesTags: ["cart"],
    }),
  }),
});

export const {
  useGetCartItemsQuery,
  useAddToCartMutation,
  useDeleteCartItemMutation,
  useUpdateCartstockMutation,
} = cart;
