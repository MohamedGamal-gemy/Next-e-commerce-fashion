"use client";

import { Provider } from "react-redux";
import { store } from "@/store";
import { NuqsAdapter } from "nuqs/adapters/next/app";
import { QuickViewProvider } from "@/context/QuickViewContext";

export default function ReduxProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Provider store={store}>
      <QuickViewProvider>
        <NuqsAdapter>{children}</NuqsAdapter>
      </QuickViewProvider>
    </Provider>
  );
}
