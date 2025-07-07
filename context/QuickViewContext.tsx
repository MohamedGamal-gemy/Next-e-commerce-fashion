"use client";
import { createContext, useContext, useState, ReactNode } from "react";

type QuickViewContextType = {
  productId: string | null;
  setProductId: (id: string | null) => void;
};

const QuickViewContext = createContext<QuickViewContextType | undefined>(
  undefined
);

export const useQuickView = () => {
  const context = useContext(QuickViewContext);
  if (!context) {
    throw new Error("useQuickView must be used within a QuickViewProvider");
  }
  return context;
};

export const QuickViewProvider = ({ children }: { children: ReactNode }) => {
  const [productId, setProductId] = useState<string | null>(null);

  return (
    <QuickViewContext.Provider value={{ productId, setProductId }}>
      {children}
    </QuickViewContext.Provider>
  );
};
