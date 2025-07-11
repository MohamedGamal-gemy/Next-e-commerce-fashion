import { Variant } from "@/types/Product.type";
import Image from "next/image";
import { memo } from "react";

const VariantsOfProduct = ({
  variants,
  setVariantId,
  variantId,
}: {
  variants: Variant[];
  variantId: string;
  setVariantId: (id: string) => void;
}) => {
  return (
    <div className="flex gap-2.5">
      {variants?.map((variant: Variant) => (
        <Image
          onClick={() => setVariantId(variant._id)}
          key={variant._id}
          src={variant.images[0].url}
          alt=""
          height={100}
          width={100}
          className={`${
            variantId === variant._id ? "border border-sky-500" : ""
          } w-20 h-20 object-cover object-top`}
        />
      ))}
    </div>
  );
};

export default memo(VariantsOfProduct);
