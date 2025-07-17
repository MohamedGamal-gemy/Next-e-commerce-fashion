export async function getReviews(productId: string) {
  const res = await fetch(`http://localhost:9000/api/reviews/${productId}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch reviews");
  }

  return res.json();
}
