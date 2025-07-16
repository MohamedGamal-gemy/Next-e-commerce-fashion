import Image from "next/image";
import { motion } from "framer-motion";
type HoverImageProps = {
  imgHover: string;
  altImg: string;
};

const HoverImage = ({ imgHover, altImg }: HoverImageProps) => {
  return (
    <>
      {imgHover && (
        <motion.div
          variants={{
            initial: { x: 0, opacity: 0 },
            // hover: { opacity: 1 },
          }}
          transition={{ duration: 0.5, ease: "easeIn" }}
          className="absolute inset-0 z-10"
        >
          <Image
            src={imgHover}
            alt={`Hover image of ${altImg}`}
            width={400}
            height={400}
            className="object-cover object-top rounded h-full w-full "
          />
        </motion.div>
      )}
    </>
  );
};

export default HoverImage;
