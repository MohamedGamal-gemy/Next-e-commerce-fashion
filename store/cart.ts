"use client";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const cart = createApi({
  reducerPath: "cart",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000/api",
    prepareHeaders: (headers) => {
      const token = localStorage.getItem("token");
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
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

export const { useGetCartItemsQuery, useAddToCartMutation } = cart;
