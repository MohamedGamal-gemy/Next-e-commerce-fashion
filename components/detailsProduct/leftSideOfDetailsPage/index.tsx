"use client";
import Image from "next/image";
import { useCallback, useState } from "react";
import Thumbnail from "../Thumbnail";
import Thumbnails from "@/components/productsListShow/quickLook/Thumbnails";

const LeftSideOfDetailsPage = ({ images }) => {
  // const [mainImage, setMainImage] = useState();
  // const handleThumbnailClick = useCallback(
  //   (id: string) => {
  //     const found = images.find((img) => img._id === id);
  //     if (found) setMainImage(found.url);
  //   },
  //   [images]
  // );
  const [selectedImage, setSelectedImage] = useState(0);
  return (
    <div className="flex gap-2 flex-1">
      <div className="space-y-2 h-[500px] overflow-y-auto scroll_hidden">
        {/* <Thumbnail
          images={images}
          // setMainImage={setMainImage}
          handleThumbnailClick={handleThumbnailClick}
        /> */}
        <div className="flex flex-col gap-2">
          <Thumbnails
            images={images}
            title={""}
            setSelectedImage={setSelectedImage}
            selectedImage={selectedImage}
          />
        </div>
      </div>
      <Image
        src={selectedImage === 0 ? images[selectedImage].url : selectedImage}
        width={400}
        height={400}
        alt="ds"
        className="h-[500px] object-cover w-[400px] object-top"
      />
    </div>
  );
};

export default LeftSideOfDetailsPage;
