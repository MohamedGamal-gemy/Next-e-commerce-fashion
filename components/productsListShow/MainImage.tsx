import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
type MainImageProps = {
  mainImage: string;
  altImg: string;
  imagesOfColors: { _id: string; url: string; publicId?: string }[];
};
const MainImage = ({ mainImage, altImg, imagesOfColors }: MainImageProps) => {
  const [activeImage, setActiveImage] = useState(mainImage);

  return (
    <motion.div
      variants={{
        initial: { scale: 1 },
        hover: { scale: 1.1 },
      }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      // className="absolute inset-0 z-0"
      className="w-full h-full relative"
    >
      <Image
        priority
        src={activeImage}
        width={400}
        height={400}
        alt={altImg}
        className="object-cover object-top rounded h-full w-full "
      />
      <div className="flex gap-2.5 absolute w-full justify-center items-center bottom-1 ">
        {imagesOfColors.length > 1 &&
          imagesOfColors.map((img) => (
            <Image
              // onClick={(e) => e.stopPropagation()}
              onClick={(e) => {
                e.stopPropagation();
                e.preventDefault();
                setActiveImage(img.url);
              }}
              alt=""
              height={80}
              width={80}
              src={img.url}
              key={img._id}
              className={`w-10 h-10 rounded-full ring-1 ring-offset-2 ${
                img.url === activeImage
                  ? "ring-offset-amber-600"
                  : "ring-offset-slate-200"
              }  
              object-cover object-top cursor-pointer border-2 border-transparent
              `}

              // className="w-12 h-12 rounded-full object-cover object-top"
            />
          ))}
      </div>
    </motion.div>
  );
};

export default MainImage;

// import { useState } from "react";
// import Image from "next/image";
// import { motion, AnimatePresence } from "framer-motion";

// type MainImageProps = {
//   mainImage: string;
//   altImg: string;
//   imagesOfColors: { _id: string; url: string; publicId?: string }[];
// };

// const MainImage = ({ mainImage, altImg, imagesOfColors }: MainImageProps) => {
//   const [activeImage, setActiveImage] = useState(mainImage);

//   return (
//     <motion.div className="w-full h-full relative">
//       {/* الصورة الرئيسية */}
//       <div className="relative w-full h-full overflow-hidden">
//         {/* <AnimatePresence mode="sync"> */}
//         <motion.div
//           key={activeImage}
//           initial={{ opacity: 0, scale: 0.95 }}
//           animate={{ opacity: 1, scale: 1 }}
//           exit={{ opacity: 0, scale: 1.05 }}
//           transition={{ duration: 0.4, ease: "easeInOut" }}
//           className="absolute inset-0"
//         >
//           <Image
//             priority
//             src={activeImage}
//             width={300}
//             height={300}
//             alt={altImg}
//             className="object-cover object-top rounded h-full w-full"
//           />
//         </motion.div>
//         {/* </AnimatePresence> */}
//       </div>

//       {/* الصور الصغيرة */}
//       <div className="flex gap-1 absolute w-full justify-center items-center bottom-2">
//         {imagesOfColors.length > 1 &&
//           imagesOfColors.map((img) => (
//             <button
//               key={img._id}
//               onClick={(e) => {
//                 e.preventDefault(); // يمنع الانتقال للرابط

//                 e.stopPropagation();
//                 setActiveImage(img.url);
//               }}
//               className={`w-12 h-12 rounded-full overflow-hidden border-2 ${
//                 activeImage === img.url
//                   ? "border-blue-500"
//                   : "border-transparent"
//               }`}
//             >
//               <Image
//                 priority
//                 src={img.url}
//                 alt=""
//                 width={100}
//                 height={100}
//                 className="object-cover object-top w-full h-full"
//               />
//             </button>
//           ))}
//       </div>
//     </motion.div>
//   );
// };

// export default MainImage;
