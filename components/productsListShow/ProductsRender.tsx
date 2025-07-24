"use client";
import Product from "../Product";
import { ProductShowType } from "@/types/Product.type";
import Pagination from "../Pagination";
import LimitSelector from "./LimitSelector";
import { memo } from "react";
import { PackageX } from "lucide-react";
import { useQuickView } from "@/context/QuickViewContext";
import QuickLook from "./quickLook/QuickLook";

const ProductsRender = ({data}) => {
  const { productId } = useQuickView();
  return (
    <div className="flex flex-col justify-between ">
      {data?.products && data.products.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
          {data.products.map((prod: ProductShowType) => (
            <Product product={prod} key={prod._id} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
          <div className="w-24 h-24 mx-auto mb-6 bg-slate-800/50 rounded-full flex items-center justify-center">
            <PackageX className="w-12 h-12 text-slate-400" />
          </div>
          <h3 className="text-xl font-semibold text-white mb-2">
            No products found
          </h3>
        </div>
      )}
      <div className="flex items-center justify-between my-4">
        <div className="flex-auto ">
          {data?.totalPages > 1 && (
            <Pagination
              currentPage={data?.currentPage}
              totalPages={data?.totalPages}
            />
          )}
        </div>
        <LimitSelector />
      </div>
      {productId && <QuickLook />}
    </div>
  );
};

export default memo(ProductsRender);
