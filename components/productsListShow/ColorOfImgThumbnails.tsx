import Image from "next/image";

const ColorOfImgThumbnails = ({ thumbnail, altImg }) => {
  return (
    <div className="flex gap-2 absolute bottom-0 left-1/2 -translate-x-1/2 z-20">
      {thumbnail.length > 1 &&
        thumbnail.map((thumb, index) => (
          <Image
            key={`${index}`}
            src={thumb.url}
            width={50}
            height={50}
            alt={`${altImg} thumbnail`}
            className="object-cover rounded-full w-10 h-10 object-top"
            loading="lazy"
          />
        ))}
    </div>
  );
};

export default ColorOfImgThumbnails;
