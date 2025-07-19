// "use client"
import EffectLightBackground from "@/components/admin/showProductsTable/EffectLightBackground";
import CartItems from "@/components/cart/CartItems";
import { getCart } from "@/lib/cartApi";
import { useGetCartItemsQuery } from "@/store/cart";
import { CartItem } from "@/types/Cart.type";

const Cart = async() => {
  const data = await getCart();
  // const { data } = useGetCartItemsQuery();
  return (
    <div className="min-h-screen p-4 sm:p-8 relative">
      <EffectLightBackground />
      <div className="max-w-5xl mx-auto space-y-6">
        <h1 className="text-2xl font-bold">Your Cart</h1>

        {data?.items?.length === 0 && (
          <p className="text-gray-600">Your cart is empty.</p>
        )}

        {data?.items?.map((item: CartItem) => (
          <CartItems key={item._id} item={item} />
        ))}

        {data?.items?.length > 0 && (
          <div className="text-right mt-8">
            <h3 className="text-xl font-bold">
              Total:{" "}
              {/* <span className="text-green-600">
                ${data.items.reduce((sum, i) => sum + i.price * i.quantity, 0)}
              </span> */}
            </h3>
            <button className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
              Proceed to Checkout
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
export default Cart;
