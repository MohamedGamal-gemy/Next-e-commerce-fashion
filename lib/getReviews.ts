"use server";

import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";

export async function getReviews(productId: string) {
  const res = await fetch(`http://localhost:9000/api/reviews/${productId}`, {
    // cache: "no-store",
    next: {
      tags: ["reviews"],
    },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch reviews");
  }

  return res.json();
}

export async function updateReview(
  productId: string,
  newData: { rating: number; comment: string },
  token: string
) {
  const res = await fetch(`http://localhost:9000/api/reviews/${productId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(newData),
  });

  if (!res.ok) {
    throw new Error("Failed to update review");
  }

  const result = await res.json();

  revalidateTag("reviews");

  return result;
}
// export async function addReview(
//   reviewData: { product: string; rating: number; comment: string },
//   token: string
// ) {
//   try {
//     const res = await fetch("http://localhost:9000/api/reviews", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${token}`,
//       },
//       body: JSON.stringify(reviewData),
//     });

//     if (!res.ok) {
//       const errorData = await res.json();
//       throw new Error(errorData.message || "Failed to add review");
//     }

//     const data = await res.json();
//     revalidateTag("reviews");
//     return data;
//   } catch (error) {
//     console.error("Error adding review:", error);
//     throw error;
//   }
// }
export async function addReview(reviewData: {
  product: string;
  rating: number;
  comment: string;
}) {
  try {
    const res = await fetch("http://localhost:9000/api/reviews", {
      method: "POST",
      headers: {
        Cookie: (await cookies()).toString(),
      },
      body: JSON.stringify(reviewData),
      credentials: "include",
    });

    if (!res.ok) {
      const errorData = await res.json();
      throw new Error(errorData.message || "Failed to add review");
    }

    const data = await res.json();

    // ✅ إعادة التحقق من البيانات (ISR في Next.js)
    revalidateTag("reviews");

    return data;
  } catch (error) {
    console.error("Error adding review:", error);
    throw error;
  }
}

export async function deleteReview(reviewId: string, token: string) {
  const res = await fetch(`http://localhost:9000/api/reviews/${reviewId}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  if (!res.ok) {
    throw new Error("Failed to delete review");
  }

  const result = await res.json();

  revalidateTag("reviews");

  return result;
}
