export async function getProductsList({
  page,
  limit,
  subcategory,
}: {
  page: number;
  limit: number;
  subcategory: string | "";
}) {
  const res = await fetch(
    `http://localhost:3000/api/products/show?page=${page}&limit=${limit}&subcategory=${subcategory}`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }

  const data = await res.json();

  const filterRes = await fetch(
    "http://localhost:3000/api/products/filters?category=men"
  );

  const filterData = filterRes.ok ? await filterRes.json() : null;

  return {
    data,
    filterData,
  };
}
