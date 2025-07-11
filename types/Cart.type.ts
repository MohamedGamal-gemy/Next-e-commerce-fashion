export type CartItem = {
  _id: string;
  title: string;
  price: number;
  size: string;
  quantity: number;
  image: string;
};
export type Cart = {
  items: CartItem[];
};

//   productId: string;
//   variantId: string;
