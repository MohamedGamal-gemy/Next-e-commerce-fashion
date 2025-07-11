import { Variant } from "@/types/Product.type";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { memo } from "react";
import ImagesOfVariantsInModel from "./ImagesOfVariantsInModel";
import SizesOfVariantsInModel from "./SizesOfVariantsInModel";
const ProductVariantPopover = ({
  variants,
  setVariantsModal,
  isFetching,
}: {
  variants: Variant[];
  setVariantsModal: (value: string | null) => void;
  isFetching: boolean;
}) => {

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.4 }}
        className="bg-black/50 fixed inset-0 flex justify-center items-center z-50"
      >
        <motion.div
          initial={{ y: 100, opacity: 0, scale: 0.8 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          exit={{ y: 100, opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="relative text-gray-950 bg-gray-50 min-w-[20rem] min-h-1/4 max-h-11/12 overflow-y-auto rounded-lg p-6 shadow-xl"
        >
          <button
            className="cursor-pointer absolute top-2 right-2 text-red-600"
            onClick={() => setVariantsModal(null)}
          >
            <X />
          </button>

          {isFetching ? (
            <p className="text-sm text-gray-500">Loading images...</p>
          ) : variants?.[0]?.images?.length ? (
            <div className="space-y-2 mt-5">
              {variants.map((variant: Variant) => (
                <div
                  key={variant._id}
                  className="border border-gray-300 p-2 rounded"
                >
                  <div className="flex gap-2 items-center my-2">
                    <h4 className="font-bold">Color:</h4>
                    <p>{variant.color.name}</p>
                    <span
                      style={{ background: variant.color.value }}
                      className="w-4 h-4 rounded-full"
                    />
                  </div>
                  <ImagesOfVariantsInModel images={variant.images} />
                  <SizesOfVariantsInModel sizes={variant.sizes} />
                </div>
              ))}
            </div>
          ) : (
            <p className="text-sm text-red-500">No images found.</p>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default memo(ProductVariantPopover);
