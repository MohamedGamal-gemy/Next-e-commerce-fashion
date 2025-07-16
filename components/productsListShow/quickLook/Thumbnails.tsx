import { cn } from "@/lib/utils";
import Image from "next/image";

const Thumbnails = ({ images, selectedImage, setSelectedImage, title }) => {
  return (
    <>
      {images?.map((image) => (
        <button
          key={image._id}
          className={cn(
            "relative w-16 h-16 rounded-md overflow-hidden border-2",
            selectedImage === image.url ? "border-blue-500" : "border-gray-200"
          )}
          onClick={() => {
            setSelectedImage(image.url);
          }}
          aria-label={`Select image ${image.url}`}
        >
          <Image
            src={image.url}
            alt={`${title} thumbnail`}
            fill
            className="object-cover"
            sizes="64px"
          />
        </button>
      ))}
    </>
  );
};

export default Thumbnails;
