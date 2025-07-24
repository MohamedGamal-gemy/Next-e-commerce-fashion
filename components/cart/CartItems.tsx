"use client";

import { useState } from "react";
import { CartItem } from "@/types/Cart.type";
import { Trash, Minus, Plus, Heart, X } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  useDeleteCartItemMutation,
  useUpdateCartstockMutation,
} from "@/store/cart";

const CartItems = ({ item }: { item: CartItem }) => {
  const [isDeleting, setIsDeleting] = useState(false);
  const [showMobileActions, setShowMobileActions] = useState(false);

  const [deleteCartItem] = useDeleteCartItemMutation();
  const [updateCartstock, { isLoading }] = useUpdateCartstockMutation();

  const handleDelete = async () => {
    setIsDeleting(true);
    try {
      await deleteCartItem(item._id).unwrap();
    } catch (error) {
      console.error("Failed to delete item:", error);
    } finally {
      setIsDeleting(false);
    }
  };

  const handleSaveForLater = () => {
    console.log("Save for later:", item._id);
  };

  return (
    <div
      className="bg-white dark: bg-gradient-to-b to-slate-950 from-slate-800
       rounded-xl shadow-sm border border-gray-200
     dark:border-gray-700 p-4 sm:p-6 hover:shadow-md transition-all duration-200 group"
    >
      <div className="flex flex-col sm:flex-row gap-4">
        {/* Product Image */}
        <div className="relative flex-shrink-0">
          <Image
            src={item.image}
            width={120}
            height={120}
            alt={item.title}
            className="rounded-lg w-[100px] h-[100px] sm:w-[120px] sm:h-[120px] object-cover"
          />
          <button
            onClick={handleSaveForLater}
            className="absolute -top-2 -right-2 p-1.5 bg-white dark:bg-gray-700 rounded-full 
            shadow-sm border border-gray-200 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-600 
            transition-colors group-hover:scale-110"
            title="Save for later"
          >
            <Heart className="w-4 h-4 text-gray-400 hover:text-red-500 transition-colors" />
          </button>
        </div>

        {/* Product Details */}
        <div className="flex-1 min-w-0">
          <div className="flex flex-col gap-4">
            <div className="flex-1 min-w-0">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white truncate">
                {item.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                Size:{" "}
                <span className="font-medium text-gray-900 dark:text-white">
                  {item.size}
                </span>
              </p>
              <p className="text-lg font-bold text-blue-600 dark:text-blue-400 mt-2">
                ${item?.price?.toFixed(2)}
              </p>
            </div>

            {/* Desktop Controls */}
            <div className="hidden sm:flex items-center justify-between">
              <div className="flex items-center border border-gray-200 dark:border-gray-600 rounded-lg">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() =>
                    updateCartstock({
                      itemId: item._id,
                      action: "decrement",
                    })
                  }
                  // disabled={isUpdating || item.stock <= 1}
                  className="px-3 py-1 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                >
                  <Minus className="w-4 h-4" />
                </Button>

                {isLoading ? (
                <span className="border-b-2 border-sky-600 w-6 h-6 rounded-full animate-spin " />
                ) : (
                  <span className="px-4 py-1 text-sm font-medium min-w-[3rem] text-center">
                    {item.stock}
                  </span>
                )}
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() =>
                    updateCartstock({
                      itemId: item._id,
                      action: "increment",
                    })
                  }
                  // disabled={isUpdating}
                  className="px-3 py-1 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                >
                  <Plus className="w-4 h-4" />
                </Button>
              </div>

              <div className="text-right">
                <p className="text-lg font-bold text-gray-900 dark:text-white">
                  ${(item.price * item.stock).toFixed(2)}
                </p>
                {item.stock > 1 && (
                  <p className="text-sm text-gray-500">
                    ${item?.price?.toFixed(2)} each
                  </p>
                )}
              </div>

              <Button
                variant="ghost"
                size="sm"
                onClick={() => deleteCartItem(item._id)}
                disabled={isDeleting}
                className="text-red-600 hover:text-red-700 hover:bg-red-50 dark:hover:bg-red-900/20
                 p-2 transition-colors"
                title="Remove item"
              >
                {isDeleting ? (
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-red-500"></div>
                ) : (
                  <Trash className="w-4 h-4" />
                )}
              </Button>
            </div>

            {/* Mobile Controls */}
            <div className="sm:hidden space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center border border-gray-200 dark:border-gray-600 rounded-lg">
                  <Button
                    variant="ghost"
                    size="sm"
                    // onClick={() => handlestockChange(item.stock - 1)}
                    // disabled={isUpdating || item.stock <= 1}
                    className="px-2 py-1 hover:bg-gray-50 dark:hover:bg-gray-700"
                  >
                    <Minus className="w-3 h-3" />
                  </Button>
                  <span className="px-3 py-1 text-sm font-medium min-w-[2rem] text-center">
                    {item.stock}
                  </span>
                  <Button
                    variant="ghost"
                    size="sm"
                    // onClick={() => handlestockChange(item.stock + 1)}
                    // disabled={isUpdating}
                    className="px-2 py-1 hover:bg-gray-50 dark:hover:bg-gray-700"
                  >
                    <Plus className="w-3 h-3" />
                  </Button>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setShowMobileActions(!showMobileActions)}
                  className="p-2"
                >
                  <X
                    className={`w-4 h-4 transition-transform ${
                      showMobileActions ? "rotate-45" : ""
                    }`}
                  />
                </Button>
              </div>

              {showMobileActions && (
                <div className="flex items-center justify-between pt-3 border-t border-gray-200 dark:border-gray-600">
                  <div className="text-right">
                    <p className="text-lg font-bold text-gray-900 dark:text-white">
                      ${(item.price * item.stock).toFixed(2)}
                    </p>
                    {item.stock > 1 && (
                      <p className="text-sm text-gray-500">
                        ${item.price.toFixed(2)} each
                      </p>
                    )}
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={handleDelete}
                    disabled={isDeleting}
                    className="text-red-600 hover:text-red-700 hover:bg-red-50 dark:hover:bg-red-900/20 p-2"
                    title="Remove item"
                  >
                    {isDeleting ? (
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-red-500"></div>
                    ) : (
                      <Trash className="w-4 h-4" />
                    )}
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
