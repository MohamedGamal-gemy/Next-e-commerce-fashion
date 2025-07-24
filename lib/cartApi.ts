import { cookies } from "next/headers";

const API_URL = "http://localhost:9000/api/cart";

// ✅ Get Cart
export async function getCart() {
  const res = await fetch(API_URL, {
    headers: {
      Cookie: (await cookies()).toString(),
    },
    cache: "no-store",
    next: {
      tags: ["cart"],
    },
  });

  if (!res.ok) throw new Error("Failed to fetch cart");
  return res.json();
}

// ✅ Add to Cart
export async function addToCart(newItem: {
  productId: string;
  variantId: string;
  size: string;
  stock: number;
}) {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Cookie: (await cookies()).toString(),
    },
    body: JSON.stringify(newItem),
  });

  if (!res.ok) throw new Error("Failed to add item to cart");
  return res.json();
}

// ✅ Delete Cart Item
export async function deleteCartItem(itemId: string) {
  const res = await fetch(`${API_URL}/item/${itemId}`, {
    method: "DELETE",
    headers: {
      Cookie: (await cookies()).toString(),
    },
  });

  if (!res.ok) throw new Error("Failed to delete cart item");
  return res.json();
}

// ✅ Increment or Decrement stock
export async function updateCartstock(
  itemId: string,
  action: "increment" | "decrement"
) {
  const res = await fetch(`${API_URL}/item/${itemId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Cookie: (await cookies()).toString(),
    },
    body: JSON.stringify({ action }),
  });

  if (!res.ok) throw new Error("Failed to update stock");
  return res.json();
}
