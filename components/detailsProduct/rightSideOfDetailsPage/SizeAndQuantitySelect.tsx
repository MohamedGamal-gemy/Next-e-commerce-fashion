import { Variant } from "@/types/Product.type";
import { memo } from "react";

const SizeAndstockSelect = ({
  sizes,
  setSelectedSize,
  setSelectedstock,
}: {
  sizes: Variant["sizes"];
  setSelectedSize: (size: string | undefined) => void;
  setSelectedstock: (stock: number | undefined) => void;
}) => {
  return (
    <div className="flex  gap-4">
      <select
        onChange={(e) => setSelectedSize(e.target.value)}
        className="bg-slate-800 p-3 rounded-md outline-0 w-1/2"
      >
        <option value={""}>Select Size</option>
        {sizes?.map((size) => (
          <option key={size._id} value={size.size}>
            {size.size}
          </option>
        ))}
      </select>
      {/*  */}
      <select
        onChange={(e) => setSelectedstock(Number(e.target.value))}
        className="bg-slate-800 p-3 rounded-md outline-0 w-1/2 "
      >
        <option value={""}>Select stock</option>
        {Array.from({ length: 10 }).map((_, i) => (
          <option key={i} value={i + 1}>
            {i + 1}
          </option>
        ))}
      </select>
    </div>
  );
};

export default memo(SizeAndstockSelect);
