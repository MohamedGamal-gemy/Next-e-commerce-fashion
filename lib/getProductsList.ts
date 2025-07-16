// const searchParams = new URLSearchParams();

// if (quer) {
//   Object.entries(quer).forEach(([key, value]) => {
//     if (Array.isArray(value)) {
//       value.forEach((v) => searchParams.append(key, v));
//     } else {
//       searchParams.append(key, value);
//     }
//   });
// }
export async function getProductsList({ limit = 6, page = 1 }) {
  const res = await fetch(
    `http://localhost:9000/api/products/show?page=${page}&limit=${limit}`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }

  const data = await res.json();

  return data;
}
