"use client";
import { memo, useEffect, useState } from "react";
import { getSingleProduct } from "@/lib/getSingleProduct";
import { ShoppingBasket, X } from "lucide-react";
import Image from "next/image";
import { ProductType } from "@/types/Product.type";
import { useQuickView } from "@/context/QuickViewContext";
import { motion, AnimatePresence } from "framer-motion"; // For animations
import StarReviews from "./productsListShow/quickLook/StarReviews";
import Thumbnails from "./productsListShow/quickLook/Thumbnails";
import VariantsColor from "./productsListShow/quickLook/VariantsColor";
import SizesAndQuantitySelect from "./productsListShow/quickLook/SizesAndQuantitySelect";

const QuickLook = () => {
  const { productId, setProductId } = useQuickView();
  const [product, setProduct] = useState<ProductType | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [indexVariant, setIndexVariant] = useState<number>(0);
  const [sizeSelected, setSizeSelected] = useState<string | null>(null);
  const [quantityAvailability, setQuantityAvailability] = useState<number>(1);

  useEffect(() => {
    if (!productId) return;
    const fetchData = async () => {
      try {
        const res = await getSingleProduct({ id: productId });
        setProduct(res);
        setSelectedImage(res?.variants?.[0]?.images?.[0]?.url || null);
      } catch (error) {
        console.error("Failed to fetch product:", error);
      }
    };
    fetchData();
  }, [productId]);

  if (!productId) return null;

  return (
    <AnimatePresence>
      {productId && (
        <motion.div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm   z-50 flex justify-end"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="bg-white w-full sm:w-[400px] h-full p-6 overflow-y-auto shadow-xl"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 text-gray-600 hover:text-red-500 transition-colors"
              onClick={() => setProductId(null)}
              aria-label="Close Quick Look"
            >
              <X size={24} />
            </button>

            {/* Loading State */}
            {!product ? (
              <div className="flex items-center justify-center h-full">
                <p className="text-gray-500">Loading...</p>
              </div>
            ) : (
              <div className="space-y-6">
                {/* Product Title and Rating */}
                <div>
                  <h2 className="text-2xl font-semibold text-gray-800">
                    {product.title}
                  </h2>
                  <StarReviews
                    numReviews={product?.numReviews}
                    rating={product?.rating}
                  />
                </div>

                {/* Product Description */}
                <p className="text-gray-600 text-sm leading-relaxed">
                  {product.description}
                </p>

                {/* Price */}
                <p className="text-xl font-bold text-blue-600">
                  {product.price} EGP
                </p>

                {/* Image Gallery */}
                <div className="space-y-4">
                  {/* Main Image */}
                  <div className="relative aspect-square bg-gray-100 rounded-lg overflow-hidden">
                    <Image
                      src={
                        selectedImage || product.variants?.[0]?.images?.[0]?.url
                      }
                      alt={product.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, 400px"
                      priority
                    />
                  </div>

                  {/* Thumbnails */}
                  <div className="flex gap-2 overflow-x-auto pb-2">
                    <Thumbnails
                      selectedImage={selectedImage}
                      setSelectedImage={selectedImage}
                      title={product?.title}
                      images={product?.variants[indexVariant]?.images}
                    />
                  </div>
                </div>

                {/* Variants (Colors) */}
                <VariantsColor
                  setIndexVariant={setIndexVariant}
                  variants={product?.variants}
                  setSelectedImage={selectedImage}
                />

                <SizesAndQuantitySelect
                  sizes={product?.variants[indexVariant]?.sizes}
                  setQuantityAvailability={setQuantityAvailability}
                  quantityAvailability={quantityAvailability}
                  sizeSelected={sizeSelected}
                  setSizeSelected={setSizeSelected}
                />

                <div
                  className="flex items-center py-2 justify-center text-center gap-2
                   bg-sky-600 text-white  w-full rounded-md
                cursor-pointer transition-colors  hover:bg-sky-700 duration-200"
                >
                  <span className="font-bold">Add To Cart</span>
                  <ShoppingBasket className="text-gray-700 animate-bounce" />
                </div>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default memo(QuickLook);
