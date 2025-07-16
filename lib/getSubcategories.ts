export async function getSubcategories() {
  const res = await fetch(`http://localhost:9000/api/subcategories`, {
    next: { revalidate: 60 },
  });
  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }

  const subcategories = await res.json();
  //   console.log("data",reviews);

  return subcategories;
}
