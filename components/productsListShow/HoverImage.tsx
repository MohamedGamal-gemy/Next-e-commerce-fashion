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
            initial: { opacity: 0, scale: 1.1 },
            hover: { opacity: 1, scale: 1 },
          }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeInOut" }}
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
