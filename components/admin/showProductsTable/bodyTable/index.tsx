import Image from "next/image";
import Actions from "../Actions";
import { ProductTableShowType } from "@/types/Product.type";
import { memo } from "react";
import { Eye, MoreHorizontal, Package, Package2, Star } from "lucide-react";

const BodyTable = ({
  products,
  setOpenModal,
  setVariantsModal,
  setProductDate,
  productDate,
}: {
  products: ProductTableShowType[];
  setOpenModal: (value: any) => void;
  setVariantsModal: (value: any) => void;
  setProductDate: (value: any) => void;
  productDate: string | null;
}) => {
  return (
    <tbody className="text-center">
      {products?.map((product: ProductTableShowType) => (
        <tr key={product._id} className="divide-y divide-white/10">
          <td className="py-4 px-6 text-left">
            <div className="flex  gap-3 ">
              <div className="relative">
                <Image
                  height={60}
                  width={60}
                  className="w-12 h-12 rounded-xl object-cover object-top"
                  src={product.firstImage}
                  alt=""
                />
                <span className="absolute -right-1 -top-1 w-4 h-4 border-white border-2 rounded-full bg-green-400" />
              </div>
              <div className="">
                <h2 className="font-medium ">{product.title}</h2>
                <h4 className="text-sm text-gray-400">
                  {product.subcategory?.name}
                </h4>
                <div>
                  <button
                    className="cursor-pointer text-blue-400 mt-2 flex gap-1 items-center"
                    onClick={() => setOpenModal(product.description)}
                  >
                    <Eye size={14} />
                    <p className="text-xs">View Description</p>
                  </button>
                </div>
              </div>
            </div>
          </td>
          <td className="py-4 px-6">
            <div className="flex gap-2 items-center">
              <Package color="gray" />
              <p> {product.category?.name}</p>
            </div>
          </td>
          {/* <td>{product.description}</td> */}
          <td className="py-4 px-6">{product.price}</td>
          <td className="py-4 px-6">
            <div className="flex gap-2 items-center">
              <Star color="gold" fill="gold" size={16} />
              <div className="flex gap-1 items-center">
                <p>{product.rating}</p>
                <span className="text-gray-400">({product.numReviews})</span>
              </div>
            </div>
          </td>
          {/* <td className="py-4 px-6">
            <button
              className="cursor-pointer"
            >
              <Eye />
            </button>
          </td> */}
          <td className="py-4 px-6">
            <Actions id={product._id} setVariantsModal={setVariantsModal} />
          </td>
          <td className="py-4 px-6">
            <div className="relative">
              <button className="cursor-pointer relative ">
                <MoreHorizontal />
              </button>
            </div>
          </td>
        </tr>
      ))}
    </tbody>
  );
};

export default memo(BodyTable);
