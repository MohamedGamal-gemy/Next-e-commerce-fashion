export const getProductsListForAdmin = async ({
  page,
  limit,
}: {
  page: number;
  limit: number;
}) => {
  const res = await fetch(
    `http://localhost:3000/api/products?page=${page}&limit=${limit}`
  );
  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }
  const data = await res.json();
  return data;
};
