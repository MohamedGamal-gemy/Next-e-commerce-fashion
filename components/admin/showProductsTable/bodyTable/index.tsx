import Image from "next/image";
import Actions from "../Actions";
import { ProductTableShowType } from "@/types/Product.type";
import { memo } from "react";
import { Eye, MoreHorizontal } from "lucide-react";

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
        <tr key={product._id}>
          <td className="py-2 pl-4">
            <Image
              height={80}
              width={80}
              className="w-14 h-14 rounded-full object-cover object-top"
              src={product.firstImage}
              alt=""
            />
          </td>
          <td>{product.title}</td>
          <td>
            <button
              className="cursor-pointer"
              onClick={() => setOpenModal(product.description)}
            >
              <Eye />
            </button>
          </td>
          <td>{product.category?.name}</td>
          <td>{product.subcategory?.name || "null"}</td>
          {/* <td>{product.description}</td> */}
          <td>{product.price}</td>
          <td>{product.rating}</td>
          <td>{product.numReviews}</td>
          <td>
            <button
              className="cursor-pointer"
              onClick={() => setVariantsModal(product._id)}
            >
              <Eye />
            </button>
          </td>
          {/* <td>{new Date(product.createdAt).toLocaleDateString()}</td> */}
          <td>
            <Actions id={product._id} />
          </td>
          <td className="">
            <div className="relative">
              <button
                className="cursor-pointer relative "
                // onClick={() => setProductDate(product._id)}
              >
                <MoreHorizontal />
              </button>
              {/* {productDate && productDate === product._id && (
                <div className="bg-white p-4 rounded-md w-[200px] text-gray-950 absolute bottom-4 right-4">
                  <h2 className="bg-slate-200">created At</h2>
                  <hr />
                  <h2 className="bg-slate-200">updated At</h2>
                </div>
              )} */}
            </div>
          </td>
        </tr>
      ))}
    </tbody>
  );
};

export default memo(BodyTable);
