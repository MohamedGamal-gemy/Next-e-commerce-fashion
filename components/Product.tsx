"use client";
import { memo } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ProductShowType, ProductType } from "@/types/Product.type";
import IconQuickLook from "./productsListShow/IconQuickLook";
import StarReviews from "./productsListShow/StarReviews";
import HoverImage from "./productsListShow/HoverImage";
import MainImage from "./productsListShow/MainImage";
import ColorOfImgThumbnails from "./productsListShow/ColorOfImgThumbnails";
import useProduct from "@/hooks/useProduct";

const Product = ({ product }: { product: ProductShowType }) => {
  const { images, thumbnail, setProductId } = useProduct({
    product,
  });

  return (
    <div
      className="bg-white/5  border relative group
       border-slate-700/50 rounded-2xl overflow-hidden hover:border-slate-600/70
        transition-all duration-300 hover:shadow-2xl hover:shadow-sky-500/20"
    >
      {/* Quick Look Button */}
      <div
        className="absolute top-3 right-3 z-20 opacity-0 group-hover:opacity-100 
      transition-opacity duration-300"
      >
        <IconQuickLook id={product._id} setProductId={setProductId} />
      </div>
      <Link href={`/products/${product.category}/${product._id}`}>
      <motion.div
        className="relative w-full h-[270px] overflow-hidden"
        whileHover="hover"
        initial="initial"
        animate="initial"
      >
        <MainImage altImg={product?.title} mainImage={product.firstImage} />
        {/* <ColorOfImgThumbnails altImg={product?.title} thumbnail={thumbnail} /> */}
      </motion.div>
      </Link>
      <div className="p-4 ">
        <h3
          className="text-white font-semibold text-lg mb-2 line-clamp-2
         hover:text-purple-300 transition-colors duration-200 truncate"
        >
          {product.title}
        </h3>
        <div className="flex items-center justify-between mb-3">
          <StarReviews rating={product?.rating} />
          <span className="text-slate-400 text-sm">
            {product.rating || 0}/5
          </span>
        </div>
        {/* <div className="flex items-center justify-between"> */}
        <span
          className="text-2xl font-bold bg-gradient-to-r from-[#11c03d]
             to-blue-400 bg-clip-text text-transparent"
        >
          {product.price} EGP
        </span>
        {/* </div> */}
      </div>
    </div>
  );
};

export default memo(Product);
