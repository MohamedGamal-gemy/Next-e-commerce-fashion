"use client";
import { api } from "@/server";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const users = createApi({
  reducerPath: "users",
  baseQuery: fetchBaseQuery({
    baseUrl: api,
    prepareHeaders: (headers) => {
      const token = localStorage.getItem("token");
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ["user"],

  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => ({
        url: "/users",
        invalidatesTags: ["user"],
      }),
    }),
    loginUser: builder.mutation<
      { token: string },
      { data: { email: string; password: string } }
    >({
      query: ({ data }) => ({
        url: "/auth/login",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["user"],
    }),
  }),
});

export const { useGetUsersQuery, useLoginUserMutation } = users;
