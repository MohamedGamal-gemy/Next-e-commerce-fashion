"use client";
import { ShoppingCart, Package, CreditCard, ArrowLeft } from "lucide-react";
import Link from "next/link";
import CartItems from "@/components/cart/CartItems";
import { CartItem } from "@/types/Cart.type";
import { Button } from "@/components/ui/button";
import EffectLightBackground from "@/components/admin/showProductsTable/EffectLightBackground";
import { useGetCartItemsQuery } from "@/store/cart";
import { useState } from "react";

const Cart = () => {
  const [page, setPage] = useState(1);

  const { data } = useGetCartItemsQuery({ page });

  const total =
    data?.items?.reduce(
      (sum: number, item: CartItem) => sum + item.price * item.stock,
      0
    ) || 0;
  const itemCount = data?.items?.length || 0;

  return (
    <div className="min-h-screen p-4 sm:p-8 relative">
      <EffectLightBackground />
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <div>
              <h1 className="text-3xl font-bold">Shopping Cart</h1>
              <p className="text-gray-600 dark:text-gray-400">
                {itemCount} {itemCount === 1 ? "item" : "items"} in your cart
              </p>
            </div>
          </div>
          <Button variant="outline" asChild>
            <Link href="/">Continue Shopping</Link>
          </Button>
        </div>

        {/* Loading State */}

        {/* Empty Cart */}
        {data?.items?.length === 0 && (
          <div className="text-center py-16 space-y-6">
            <div
              className="w-24 h-24 mx-auto bg-gray-100 dark:bg-gray-800 rounded-full
             flex items-center justify-center"
            >
              <ShoppingCart className="w-12 h-12 text-gray-400" />
            </div>
            <div className="space-y-2">
              <h2 className="text-2xl font-semibold">Your cart is empty</h2>
              <p className="text-gray-600 dark:text-gray-400">
                Looks like you haven't added any items to your cart yet.
              </p>
            </div>
            <Button asChild>
              <Link href="/">Start Shopping</Link>
            </Button>
          </div>
        )}

        {/* Cart Items */}
        {data?.items && data.items.length > 0 && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items List */}
            <div className="lg:col-span-2 space-y-4">
              {data.items.map((item: CartItem) => (
                <CartItems key={item._id} item={item} />
              ))}
              <div className="flex gap-2 items-center justify-center">
                {data &&
                  data.totalPages > 1 &&
                  Array.from({ length: data?.totalPages }).map((e, i) => (
                    <button
                      onClick={() => setPage(i + 1)}
                      className={`${
                        page === i + 1 ? "bg-sky-500" : "bg-slate-800"
                      } border border-slate-700 py-1 px-2 rounded cursor-pointer `}
                      key={i}
                    >
                      {i + 1}
                    </button>
                  ))}
              </div>
            </div>
            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div
                className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border
               border-gray-200 dark:border-gray-700 p-6 sticky top-8"
              >
                <h2 className="text-xl font-semibold mb-6">Order Summary</h2>

                <div className="space-y-4">
                  <div className="flex justify-between text-sm">
                    <span>
                      Subtotal ({itemCount} {itemCount === 1 ? "item" : "items"}
                      )
                    </span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Shipping</span>
                    <span className="text-green-600">Free</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Tax</span>
                    <span>${(total * 0.08).toFixed(2)}</span>
                  </div>

                  <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                    <div className="flex justify-between text-lg font-semibold">
                      <span>Total</span>
                      <span>${(total * 1.08).toFixed(2)}</span>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">Including tax</p>
                  </div>
                </div>

                {/* Free Shipping Progress */}
                {total < 50 && (
                  <div className="mt-4 p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                    <div className="flex items-center justify-between text-sm mb-2">
                      <span className="text-gray-600 dark:text-gray-400">
                        Free shipping threshold
                      </span>
                      <span className="font-medium">
                        ${(50 - total).toFixed(2)} more
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                      <div
                        className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                        style={{
                          width: `${Math.min((total / 50) * 100, 100)}%`,
                        }}
                      ></div>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">
                      Add ${(50 - total).toFixed(2)} more for free shipping
                    </p>
                  </div>
                )}

                <div className="mt-6 space-y-3">
                  <Button
                    asChild
                    className="w-full"
                    size="lg"
                    disabled={itemCount === 0}
                  >
                    <Link href="/checkout">
                      <CreditCard className="w-4 h-4 mr-2" />
                      Proceed to Checkout
                    </Link>
                  </Button>
                  <Button variant="outline" className="w-full" size="lg">
                    <Package className="w-4 h-4 mr-2" />
                    Save for Later
                  </Button>
                </div>

                <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                  <div className="flex items-start gap-3">
                    <div
                      className="w-5 h-5 rounded-full bg-blue-100 dark:bg-blue-800
                     flex items-center justify-center flex-shrink-0 mt-0.5"
                    >
                      <span className="text-xs font-semibold text-blue-600">
                        i
                      </span>
                    </div>
                    <div className="text-sm">
                      <p className="font-medium text-blue-900 dark:text-blue-100">
                        Free shipping
                      </p>
                      <p className="text-blue-700 dark:text-blue-300">
                        Orders over $50 ship free
                      </p>
                    </div>
                  </div>
                </div>

                {/* Security Badge */}
                <div className="mt-4 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                  <div className="flex items-center gap-2 text-sm">
                    <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span className="text-green-700 dark:text-green-300">
                      Secure checkout
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
