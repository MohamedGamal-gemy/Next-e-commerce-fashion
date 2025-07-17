import { motion } from "framer-motion";
import Image from "next/image";
type MainImageProps = {
  mainImage: string;
  altImg: string;
};
const MainImage = ({ mainImage, altImg }: MainImageProps) => {
  return (
    <motion.div
      // variants={{
      //   initial: { x: 0, opacity: 1 },
      //   // hover: { x: 300, opacity:0 },
      // }}
      // transition={{ duration: 0.5, ease: "easeIn" }}
      // className="absolute inset-0 z-0"
      className="w-full h-full"
    >
      <Image
        priority
        src={mainImage}
        width={300}
        height={300}
        alt={altImg}
        className="object-cover object-top rounded h-full w-full "
      />
    </motion.div>
  );
};

export default MainImage;
