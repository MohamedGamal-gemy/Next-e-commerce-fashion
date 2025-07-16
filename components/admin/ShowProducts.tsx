"use client";

import { ProductTableShowType } from "@/types/Product.type";
import HeadTable from "./showProductsTable/HeadTable";
import BodyTable from "./showProductsTable/bodyTable";
import EffectLightBackground from "./showProductsTable/EffectLightBackground";
import { memo, useState } from "react";
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
    <div className="">
      {/* <EffectLightBackground /> */}
      <table className="lg:max-w-6xl w-full   ">
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
