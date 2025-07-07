export async function getProductsList({
  page,
  color,
  sort,
  subcategory,
}: {
  page: number;
  sort: string;
  color: string[] | string;
  subcategory: string[] | string;
}) {
  const res = await fetch(
    `http://localhost:3000/api/products?category=men&subcategory=${subcategory}&sort=${sort}&color=${color}&page=${page}`,
    {
      next: { revalidate: 60, tags: ["products"] },
    }
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
