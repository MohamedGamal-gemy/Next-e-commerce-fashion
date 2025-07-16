export const getSingleProduct = async ({ id }: { id: string | undefined }) => {
  if (id !== undefined) {
    const res = await fetch(`http://localhost:9000/api/products/${id}`);
    if (!res.ok) {
      throw new Error("Failed to fetch products");
    }
    const data = await res.json();
    return data;
  }
};

// @/lib/getSingleProduct.ts
// export const getSingleProduct = async (id: string) => {
//   if (!id || id === "undefined") {
//     throw new Error("معرّف المنتج غير صالح");
//   }

//   const res = await fetch(`http://localhost:3000/api/products/${id}`);

//   if (!res.ok) {
//     const errorData = await res.json();
//     throw new Error(errorData.message || "فشل جلب بيانات المنتج");
//   }

//   return res.json();
// };
