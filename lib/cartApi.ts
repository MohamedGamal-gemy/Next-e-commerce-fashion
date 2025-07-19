// import { cookies } from "next/headers";

// export async function getCart() {
//   const cookieHeader = cookies().toString();

//   const res = await fetch("http://localhost:9000/api/cart", {
//     headers: {
//       Cookie: cookieHeader,
//     },
//   });

//   if (!res.ok) {
//     throw new Error("Failed to fetch cart");
//   }

//   return res.json();
// }

import { cookies } from "next/headers";

export async function getCart() {
  const res = await fetch("http://localhost:9000/api/cart", {
    headers: {
      Cookie: (await cookies()).toString(),
    },
  });

  if (!res.ok) throw new Error("Failed to fetch cart");

  return res.json();
}
