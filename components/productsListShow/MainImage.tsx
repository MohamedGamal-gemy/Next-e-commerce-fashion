import { motion } from "framer-motion";
import Image from "next/image";
type MainImageProps = {
  mainImage: string;
  altImg: string;
};
const MainImage = ({ mainImage, altImg }: MainImageProps) => {
  return (
    <motion.div
      variants={{
        initial: { opacity: 1 },
        hover: { opacity: 0 },
      }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className="absolute inset-0 z-0"
    >
      <Image
        src={mainImage}
        width={400}
        height={400}
        priority
        alt={altImg}
        className="object-cover object-top rounded h-full w-full "
      />
    </motion.div>
  );
};

export default MainImage;
