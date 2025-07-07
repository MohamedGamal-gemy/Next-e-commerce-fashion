"use client";
import Image from "next/image";
import Thumbnail from "./Thumbnail";
import { useCallback, useState } from "react";

const DetailsProduct = ({ images }) => {
  const [mainImage, setMainImage] = useState(images?.[0]?.url || "");
  const handleThumbnailClick = useCallback(
    (id: string) => {
      const found = images.find((img) => img._id === id);
      if (found) setMainImage(found.url);
    },
    [images]
  );
  // const optimizedMain = mainImage.replace("/upload/", "/upload/f_auto,q_auto/");
  // const blurMain = mainImage.replace("/upload/", "/upload/e_blur:2000,q_1/");

  return (
    <div className="flex gap-2 flex-1">
      <div className="space-y-2 h-[500px] overflow-y-auto scroll_hidden">
        <Thumbnail
          images={images}
          // setMainImage={setMainImage}
          handleThumbnailClick={handleThumbnailClick}
        />
      </div>
      <Image
        src={mainImage}
        width={400}
        height={400}
        alt="ds"
        className="h-[500px] object-cover w-[400px] object-top"
      />
    </div>
  );
};

export default DetailsProduct;

{
  /* src={optimizedMain}
width={400}
height={550}
alt="Main product"
placeholder="blur"
blurDataURL={blurMain}
className="object-cover object-top rounded" */
}
