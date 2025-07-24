export type CartItem = {
  _id: string;
  title: string;
  price: number;
  size: string;
  stock: number;
  image: string;
};
export type Cart = {
  items: CartItem[];
};

//   productId: string;
//   variantId: string;
