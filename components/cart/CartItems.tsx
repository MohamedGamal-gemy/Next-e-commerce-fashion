"use client";

import { CartItem } from "@/types/Cart.type";
// import { useDeleteCartMutation } from "@/store/cart";
import { Trash } from "lucide-react";
import Image from "next/image";

const CartItems = ({ item }: { item: CartItem }) => {
  // const [deleteCart] = useDeleteCartMutation();
  return (
    <div
      className="relative flex items-center gap-4 p-4 bg-gradient-to-t to-[#01091f] from-[#15213a]
             rounded-lg shadow-sm border border-gray-700"
    >
      <Image
        src={item.image}
        width={100}
        height={100}
        alt={item.title}
        className="rounded-md w-[100px] h-[100px] object-cover"
      />
      <div className="flex-1">
        <h2 className="text-lg font-semibold">{item.title}</h2>
        <p className="text-sm text-gray-200">
          Size: <span className="font-medium">{item.size}</span>
        </p>
        <p className="text-sm text-gray-200">
          Quantity: <span className="font-medium">{item.quantity}</span>
        </p>
        <p className="text-md font-bold text-sky-600">${item.price}</p>
      </div>
      <div className="">
        <p className="text-md font-bold text-sky-600">
          ${item.price * item.quantity}
        </p>

        <button
          // onClick={() => deleteCart(item._id)}
          className="p-2 text-red-600 hover:text-red-800 transition"
          title="Remove"
        >
          <Trash />
        </button>
      </div>
    </div>
  );
};

export default CartItems;
