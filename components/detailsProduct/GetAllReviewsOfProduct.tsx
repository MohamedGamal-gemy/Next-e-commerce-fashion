import { ReviewsDetailsProductType } from "@/types/reviews.type";

const GetAllReviewsOfProduct = ({
  reviews,
}: {
  reviews: ReviewsDetailsProductType[];
}) => {
  return (
    <div className=" bg-slate-900 p-6 rounded-lg flex-1  border border-slate-700">
      <h3 className="text-xl font-semibold text-white mb-4">
        Customer Reviews
      </h3>
      {reviews.length === 0 ? (
        <p className="text-slate-400">
          No reviews yet. Be the first to review!
        </p>
      ) : (
        <div className="space-y-4">
          {reviews.map((review: ReviewsDetailsProductType) => (
            <div
              key={review._id}
              className="p-4 border border-slate-700 rounded-lg bg-slate-800"
            >
              <div className="flex justify-between items-center mb-2">
                <span className="text-slate-200 font-medium">
                  {review.userId?.username || "Anonymous"}
                </span>
                <span className="text-yellow-400">⭐ {review.rating}</span>
              </div>
              <p className="text-slate-300">{review.comment}</p>
              <p className="text-xs text-slate-500 mt-2">
                {new Date(review.createdAt).toLocaleDateString()}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default GetAllReviewsOfProduct;
