"use client";
import { memo, useEffect, useState } from "react";
import { getSingleProduct } from "@/lib/getSingleProduct";
import { ShoppingBasket, X } from "lucide-react";
import Image from "next/image";
import { ProductType } from "@/types/Product.type";
import { useQuickView } from "@/context/QuickViewContext";
import { motion, AnimatePresence } from "framer-motion";
import StarReviews from "./StarReviews";

const QuickLook = () => {
  const { productId, setProductId } = useQuickView();
  const [product, setProduct] = useState<ProductType | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [indexVariant, setIndexVariant] = useState(0);
  const [sizeSelected, setSizeSelected] = useState(0);
  const [quantity, setQuantity] = useState(1);

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

  // ✅ Current selected variant and size
  const currentVariant = product?.variants[indexVariant];
  const currentSize = currentVariant?.sizes[sizeSelected];
  const availableStock = currentSize?.stock || 0;

  // ✅ Handle Quantity
  const handleIncrease = () => {
    if (quantity < availableStock) {
      setQuantity(quantity + 1);
    }
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <AnimatePresence>
      {productId && (
        <motion.div
          className="fixed inset-0 top-14 bg-black/40 z-50 flex justify-end"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
        >
          <motion.div
            className="bg-gradient-to-b to-slate-800 from-slate-600 text-white w-full sm:w-[400px] h-full p-6 overflow-y-auto"
            initial={{ x: 100 }}
            animate={{ x: 0 }}
            exit={{ x: 100 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 text-gray-300 hover:text-red-500 transition"
              onClick={() => setProductId(null)}
              aria-label="Close Quick Look"
            >
              <X size={28} />
            </button>

            {!product ? (
              <div className="flex items-center justify-center h-full">
                <p className="text-gray-400 animate-pulse">Loading...</p>
              </div>
            ) : (
              <div className="space-y-6">
                {/* Title + Rating */}
                <div>
                  <h2 className="text-2xl font-bold">{product.title}</h2>
                  <StarReviews
                    numReviews={product.numReviews}
                    rating={product.rating}
                  />
                </div>

                {/* Price */}
                <p className="text-xl font-bold text-blue-400">
                  LE {product.price.toFixed(2)}
                </p>

                {/* Main Image */}
                <div className="space-y-4">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={selectedImage}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="relative aspect-square bg-gray-800 rounded-lg overflow-hidden"
                    >
                      <Image
                        src={selectedImage || ""}
                        alt={product.title}
                        fill
                        className="object-cover object-top"
                      />
                    </motion.div>
                  </AnimatePresence>

                  {/* Thumbnails */}
                  <div className="flex gap-2 overflow-x-auto pb-2">
                    {currentVariant?.images.map((img) => (
                      <Image
                        key={img._id}
                        src={img.url}
                        alt=""
                        width={80}
                        height={80}
                        onClick={() => setSelectedImage(img.url)}
                        className={`w-16 h-16 object-cover rounded-md cursor-pointer border-2 ${
                          selectedImage === img.url
                            ? "border-blue-500"
                            : "border-transparent"
                        }`}
                      />
                    ))}
                  </div>
                </div>

                {/* Colors (Variants) */}
                <div className="flex gap-2">
                  {product.variants.map((variant, i) => (
                    <button
                      key={variant._id}
                      onClick={() => {
                        setIndexVariant(i);
                        setSizeSelected(0);
                        setQuantity(1);
                        setSelectedImage(variant.images[0]?.url);
                      }}
                      className={`w-10 h-10 rounded-full overflow-hidden border-2 ${
                        indexVariant === i
                          ? "border-blue-500"
                          : "border-transparent"
                      }`}
                    >
                      <Image
                        src={variant.images[0]?.url}
                        alt="Color"
                        width={40}
                        height={40}
                        className="object-cover"
                      />
                    </button>
                  ))}
                </div>

                {/* Sizes */}
                {/* Stock Info + Alert */}
                <div className="mt-2">
                  {availableStock === 0 ? (
                    <p className="text-red-500 font-semibold flex items-center gap-2">
                      ❌ Out of Stock
                    </p>
                  ) : availableStock <= 5 ? (
                    <p className="text-orange-400 font-medium animate-pulse flex items-center gap-2">
                      ⚠ Hurry! Only {availableStock} left in stock
                    </p>
                  ) : (
                    <p className="text-green-500 text-sm">✅ In Stock</p>
                  )}
                </div>

                <h4>
                  Size: {currentSize ? currentSize.size : "No Size Selected"}
                </h4>
                {/* {console.log(currentVariant)} */}
                <div className="flex gap-3 flex-wrap">
                  {currentVariant?.sizes.map((size, i) => (
                    <button
                      onClick={() => {
                        setSizeSelected(i);
                        setQuantity(1);
                      }}
                      key={size._id}
                      disabled={size.stock === 0}
                      title={size.stock === 0 ? "Out of Stock" : ""}
                      className={`relative py-1 px-4 rounded-md text-sm font-medium transition-all
    ${
      sizeSelected === i
        ? "bg-blue-600 text-white"
        : size.stock === 0
        ? "bg-gray-500 text-gray-300 cursor-not-allowed"
        : "bg-gray-700 hover:bg-gray-600 text-gray-300"
    }`}
                    >
                      {size.size}
                      {size.stock === 0 && (
                        <span className="absolute inset-0 flex items-center justify-center text-xs text-red-400">
                          ✖
                        </span>
                      )}
                    </button>
                  ))}
                </div>

                {/* Quantity Selector */}
                <div className="flex items-center border border-gray-600 rounded-md w-fit">
                  <button
                    disabled={quantity <= 1}
                    onClick={handleDecrease}
                    className="px-3 py-1 text-lg disabled:text-gray-500"
                  >
                    -
                  </button>
                  <input
                    className="w-16 text-center bg-transparent"
                    type="text"
                    value={quantity}
                    readOnly
                  />
                  <button
                    disabled={quantity >= availableStock}
                    onClick={handleIncrease}
                    className="px-3 py-1 text-lg disabled:text-gray-500"
                  >
                    +
                  </button>
                </div>

                {/* Add to Cart */}
                <button
                  disabled={availableStock === 0}
                  className={`w-full flex justify-center items-center gap-2 py-3 rounded-md font-bold transition ${
                    availableStock === 0
                      ? "bg-gray-600 text-gray-400 cursor-not-allowed"
                      : "bg-blue-600 hover:bg-blue-700 text-white"
                  }`}
                >
                  {availableStock === 0 ? "Out of Stock" : "Add to Cart"}{" "}
                  <ShoppingBasket />
                </button>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default memo(QuickLook);
