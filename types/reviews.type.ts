export type ReviewsDetailsProductType = {
  _id: string;
  product: string;
  rating: number;
  comment: string;
  createdAt: string;
  updatedAt: string;
  user: { _id: string; username: string };
};
