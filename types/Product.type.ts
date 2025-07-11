export type Variant = {
  color: { name: string; value: string };
  sizes: { size: string; quantity: number; _id: string }[];
  images: { url: string; _id: string; publicId?: string }[];
  productId?: string;
  createdAt?: string;
  _id: string;
  __v?: number;
};

export type ProductType = {
  _id: string;
  title: string;
  description: string;
  price: number;
  rating: number;
  numReviews: number;
  category: { _id: string; name: string; __v: number };
  subcategory: { _id: string; name: string; __v: number };
  createdAt: string;
  updatedAt: string;
  variants: Variant[];
  __v: number;
};
export type ProductShowType = {
  _id: string;
  title: string;
  price: number;
  rating: number;
  numReviews: number;
  firstImage: string;
  secondImage: string;
  imagesColorsOfVariants: [] | string[];
  // category: { _id: string; name: string; __v: number };
  subcategory: { _id: string; name: string; __v: number };
  createdAt: string;
  updatedAt: string;

  __v: number;
};

export type ProductTableShowType = {
  _id: string;
  title: string;
  description: string;
  firstImage: string;
  price: number;
  rating: number;
  numReviews: number;
  category: { _id: string; name: string; __v?: number };
  subcategory: { _id: string; name: string; __v?: number } | null;
  createdAt: string;
  updatedAt?: string;
  __v?: number;
};
