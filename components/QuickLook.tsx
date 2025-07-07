"use client";
import { memo, useEffect, useState } from "react";
import { getSingleProduct } from "@/lib/getSingleProduct";
import { X } from "lucide-react";
import Image from "next/image";
import { ProductType } from "@/types/Product.type";
import { useQuickView } from "@/context/QuickViewContext";

const QuickLook = () => {
  const { productId, setProductId } = useQuickView();
  const [product, setProduct] = useState<ProductType | null>(null);

  useEffect(() => {
    if (!productId) return;
    const fetchData = async () => {
      const res = await getSingleProduct({ id: productId });
      setProduct(res);
    };
    fetchData();
  }, [productId]);

  if (!productId) return null;
  if (!product)
    return (
      <div className="fixed right-0 top-0 bg-white w-[30%] h-screen z-50 p-4">
        Loading...
      </div>
    );
  const colors = product.variants.map((variant) => variant.images[0]);
  //   console.log("imagesOfVariants", imagesOfVariants);
  const thumbnails = product.variants?.[0]?.images;

  return (
    <div className="fixed right-0 top-0 bg-white w-[30%] h-screen z-50 p-4 text-black shadow-lg overflow-y-auto">
      <button
        className="absolute top-2 right-4 text-red-500 font-bold text-lg cursor-pointer"
        onClick={() => setProductId(null)}
      >
        <X />
      </button>
      <div className="my-6">
        <h2 className="text-xl font-bold mb-2">{product.title}</h2>
        <p className="text-sm mb-2">{product.description}</p>
        <p className="text-blue-600 font-semibold mb-4">{product.price} EGP</p>

        <div className="w-full flex gap-2">
          <div className="space-y-2">
            {thumbnails.map((g) => (
              <Image
                key={g._id}
                src={g.url}
                alt={product.title}
                width={300}
                height={300}
                className="w-12  h-12 rounded "
              />
            ))}
          </div>
          <Image
            src={product.variants?.[0]?.images?.[0]?.url}
            alt={product.title}
            width={300}
            height={300}
            className="  max-h-[430px] rounded-md "
          />
        </div>
        <div className="flex gap-2 justify-center mt-2">
          {colors?.map((color) => (
            <Image
              key={color._id}
              src={color.url}
              alt={product.title}
              width={300}
              height={300}
              className="  w-10 h-10 rounded-full "
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default memo(QuickLook);
