// export async function getProductsList({
//   limit = 6,
//   page = 1,
//   subcategory = "",
//   color = "",
//   sort,
//   title = "",
//   minPrice,
//   maxPrice,
// }) {
//   const res = await fetch(
//     `http://localhost:9000/api/products/show?subcategory=${subcategory}&color=${color}&sort=${sort}&title=${title}&page=${page}&limit=${limit}&minPrice=${minPrice}&maxPrice=${maxPrice}`
//   );

//   if (!res.ok) {
//     throw new Error("Failed to fetch products");
//   }

//   const data = await res.json();

//   return data;
// }

export async function getProductsList(params) {
  const searchParams = new URLSearchParams();

  // if (limit) params.append("limit", String(limit));
  // if (page) params.append("page", String(page));
  // if (subcategory) params.append("subcategory", subcategory);
  // if (color) params.append("color", color);
  // if (sort) params.append("sort", sort);
  // if (title) params.append("title", title);
  // if (minPrice) params.append("minPrice", String(minPrice));
  // if (maxPrice) params.append("maxPrice", String(maxPrice));

  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined && value !== "") {
      searchParams.append(key, String(value));
    }
  });

  const res = await fetch(
    `http://localhost:9000/api/products/show?${searchParams.toString()}`
    // ,
    // {
    //   cache: "no-store",
    // }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }

  return res.json();
}
