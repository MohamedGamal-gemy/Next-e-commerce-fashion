import { Variant } from "@/types/Product.type";
import Image from "next/image";

const ImagesOfVariantsInModel = ({ images }: { images: Variant["images"] }) => {
  return (
    <div className="flex gap-2 items-center flex-wrap mb-2">
      {images.map((g) => (
        <Image
          src={g.url}
          key={g._id}
          height={100}
          width={100}
          alt="imgVariant"
          className="rounded-md w-[100px] h-[100px] object-cover object-top"
        />
      ))}
    </div>
  );
};

export default ImagesOfVariantsInModel;
