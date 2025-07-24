import { Variant } from "@/types/Product.type";
import { ArrowRightCircle } from "lucide-react";

const SizesOfVariantsInModel = ({ sizes }: { sizes: Variant["sizes"] }) => {
  return (
    <div>
      <h4 className="font-bold">Sizes & stock : </h4>
      <div className="flex gap-2 my-1 flex-wrap">
        {sizes.map((s) => (
          <div key={s._id} className="flex gap-2 items-center">
            <p>{s.size}</p>
            <ArrowRightCircle size={18} className="text-sky-500" />
            <p>{s.stock}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SizesOfVariantsInModel;
