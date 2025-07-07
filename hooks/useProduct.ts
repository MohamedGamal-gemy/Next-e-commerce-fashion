import { useQuickView } from "@/context/QuickViewContext";
import { ProductType } from "@/types/Product.type";
import { useMemo } from "react";

type AllReviewsProps = { id: string; rating: number };
const useProduct = ({ product }: { product: ProductType }) => {
  const { setProductId } = useQuickView();

  const variants = product?.variants;

  const images = variants?.[0]?.images || [];

  const thumbnail = useMemo(
    () => variants?.map((variant) => variant.images[0]),
    [variants]
  );

  return { images, thumbnail, setProductId };
};

export default useProduct;
