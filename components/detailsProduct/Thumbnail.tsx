import Image from "next/image";
import { memo } from "react";

const Thumbnail = memo(({ images, handleThumbnailClick }) => {
  return (
    <>
      {images?.map((g, i) => (
        <Image
          className="cursor-pointer"
          onClick={() => handleThumbnailClick(g._id)}
          key={g._id}
          src={g.url}
          width={80}
          height={80}
          alt="ds"
        />
      ))}
    </>
  );
});

export default Thumbnail;
