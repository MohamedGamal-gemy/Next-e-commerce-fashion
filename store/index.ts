"use client";
import { configureStore } from "@reduxjs/toolkit";
import { productsData } from "./productsData";
import { productsFilter } from "./productsFilter";
import { categories } from "./categories";
import { singleProduct } from "./singleProduct";
import { variants } from "./variants";
import { cart } from "./cart";
import { colors } from "./colorsfilter";
import { users } from "./users";
import { setupListeners } from "@reduxjs/toolkit/query";

export const store = configureStore({
  reducer: {
    [productsData.reducerPath]: productsData.reducer,
    [productsFilter.reducerPath]: productsFilter.reducer,
    [categories.reducerPath]: categories.reducer,
    [singleProduct.reducerPath]: singleProduct.reducer,
    [variants.reducerPath]: variants.reducer,
    [cart.reducerPath]: cart.reducer,
    [users.reducerPath]: users.reducer,
    [colors.reducerPath]: colors.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      productsData.middleware,
      productsFilter.middleware,
      categories.middleware,
      singleProduct.middleware,
      variants.middleware,
      cart.middleware,
      users.middleware,
      colors.middleware
    ),
});
setupListeners(store.dispatch);
