"use server";

import { revalidateTag } from "next/cache";

export async function addReview(
  reviewData: { productId: string; rating: number; comment: string },
  token: string
) {
  try {
    const res = await fetch("http://localhost:9000/api/reviews/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(reviewData),
    });

    if (!res.ok) {
      const errorData = await res.json();
      throw new Error(errorData.message || "Failed to add review");
    }

    const data = await res.json();
    revalidateTag("reviews");
    return data;
  } catch (error) {
    console.error("Error adding review:", error);
    throw error;
  }
}
