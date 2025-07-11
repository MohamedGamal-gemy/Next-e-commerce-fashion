"use client";
import { useAddToCartMutation } from "@/store/cart";
import { useState } from "react";
import SizeAndQuantitySelect from "./rightSideOfDetailsPage/SizeAndQuantitySelect";
import VariantsOfProduct from "./rightSideOfDetailsPage/VariantsOfProduct";
import { Variant } from "@/types/Product.type";
import { toast } from "sonner";

const Right = ({
  variants,
  id,
  title,
  price,
  sizes,
  description,
}: {
  variants: Variant[];
  id: string;
  title: string;
  price: number;
  sizes: Variant["sizes"];
  description: string;
}) => {
  const [variantId, setVariantId] = useState(variants[0]._id);
  const [selectedSize, setSelectedSize] = useState<string | undefined>();
  const [selectedQuantity, setSelectedQuantity] = useState<
    number | undefined
  >();
  const [addToCart] = useAddToCartMutation();
  const handleAddToCart = () => {
    if (!selectedSize || !selectedQuantity) {
      return toast.error("Please select size and quantity");
    }
    const dataSend = {
      productId: id,
      variantId: variantId,
      size: selectedSize,
      quantity: selectedQuantity,
    };
    addToCart(dataSend);
  };
  return (
    <div className="space-y-3 flex-1 ">
      <h2 className="font-semibold text-2xl">{title}</h2>

      <div>
        <h2 className="font-semibold">Price</h2>
        <h2 className="text-sky-400 text-2xl font-bold">{price} EGP</h2>
      </div>

      <SizeAndQuantitySelect
        setSelectedQuantity={setSelectedQuantity}
        setSelectedSize={setSelectedSize}
        sizes={sizes}
      />

      <VariantsOfProduct
        setVariantId={setVariantId}
        variantId={variantId}
        variants={variants}
      />

      <div className="mt-4">
        <h2 className="font-semibold">Description</h2>
        <p>{description}</p>
      </div>

      <div className="mt-4">
        <button
          onClick={handleAddToCart}
          className="bg-sky-500 p-3 rounded-md w-full"
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default Right;
