export type ReviewsDetailsProductType = {
  _id: string;
  productId: string;
  rating: number;
  comment: string;
  createdAt: string;
  updatedAt: string;
  userId: { _id: string; username: string };
};
