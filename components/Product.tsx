"use client";
import { memo } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ProductType } from "@/types/Product.type";
import IconQuickLook from "./productsListShow/IconQuickLook";
import StarReviews from "./productsListShow/StarReviews";
import HoverImage from "./productsListShow/HoverImage";
import MainImage from "./productsListShow/MainImage";
import ColorOfImgThumbnails from "./productsListShow/ColorOfImgThumbnails";
import useProduct from "@/hooks/useProduct";

const Product = ({ product }: { product: ProductType }) => {
  const { images, thumbnail, setProductId } = useProduct({
    product,
  });

  return (
    <div className="relative group  ">
      <IconQuickLook id={product._id} setProductId={setProductId} />
      <Link href={`/products/${product.category}/${product._id}`}>
        <motion.div
          className="relative w-full h-[270px] overflow-hidden"
          whileHover="hover"
          initial="initial"
          animate="initial"
        >
          <HoverImage altImg={product?.title} imgHover={images[1].url} />
          <MainImage altImg={product?.title} mainImage={images[0].url} />
          <ColorOfImgThumbnails altImg={product?.title} thumbnail={thumbnail} />
        </motion.div>
      </Link>
      <h2
        className="truncate mt-2 text-white font-semibold"
        title={product.title}
      >
        {product.title}
      </h2>
      <h2 className="text-sky-400">{product.price} EGP</h2>
      <StarReviews rating={product?.rating} />
    </div>
  );
};

export default memo(Product);
