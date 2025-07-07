export async function getReviews() {
  const res = await fetch(`http://localhost:3000/api/reviews`, {
    next: { revalidate: 60 },
  });
  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }

  const reviews = await res.json();
  //   console.log("data",reviews);

  return reviews;
}
