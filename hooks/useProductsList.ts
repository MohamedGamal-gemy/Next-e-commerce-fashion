"use client";
import { useGetProductsFashionQuery } from "@/store/productsData";
import { useGetFilteringProductsQuery } from "@/store/productsFilter";

const useProductsList = () => {
  const { data, isLoading } = useGetProductsFashionQuery("men");
  const { data: filterData } = useGetFilteringProductsQuery("men");
  return {
    data,
    isLoading,
    filterData,
  };
};

export default useProductsList;
