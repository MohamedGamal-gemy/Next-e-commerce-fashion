"use client";

import { ProductTableShowType } from "@/types/Product.type";
import HeadTable from "./showProductsTable/HeadTable";
import BodyTable from "./showProductsTable/bodyTable";
import EffectLightBackground from "./showProductsTable/EffectLightBackground";
import { memo, useState } from "react";
import { X } from "lucide-react";
import { useGetVariantByIdQuery } from "@/store/variants";
import { skipToken } from "@reduxjs/toolkit/query";
import ProductVariantPopover from "./showProductsTable/ProductVariantPopover";
import ModalForDescription from "./showProductsTable/ModalForDescription";
const ShowProducts = ({ products }: { products: ProductTableShowType[] }) => {
  const [openModal, setOpenModal] = useState<string | null>(null);
  const [variantsModal, setVariantsModal] = useState<string | null>(null);
  const [productDate, setProductDate] = useState(null);

  const { data: variants, isFetching } = useGetVariantByIdQuery(
    variantsModal ?? skipToken,
    {
      refetchOnMountOrArgChange: true,
    }
  );

  return (
    <div className="relative">
      <EffectLightBackground />
      <table
        className="lg:max-w-6xl md:max-w-5xl sm:max-w-4xl max-w-3xl mx-auto w-full
       bg-slate-600/20 mt-6 rounded-md relative"
      >
        <HeadTable />
        <BodyTable
          products={products}
          setOpenModal={setOpenModal}
          setVariantsModal={setVariantsModal}
          setProductDate={setProductDate}
          productDate={productDate}
        />
      </table>
      {/* Modal for Description */}
      {openModal && (
        <ModalForDescription
          openModal={openModal}
          setOpenModal={setOpenModal}
        />
      )}
      {/* Modal for Variants  */}
      {variantsModal && (
        <ProductVariantPopover
          isFetching={isFetching}
          variants={variants}
          setVariantsModal={setVariantsModal}
        />
      )}
    </div>
  );
};

export default memo(ShowProducts);
