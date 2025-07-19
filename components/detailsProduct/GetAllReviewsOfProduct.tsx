"use client";
import { ReviewsDetailsProductType } from "@/types/reviews.type";
import { Star, Edit, X } from "lucide-react";
import { useState } from "react";
import EditReviewModal from "./EditReviewModal";
import DeleteReviewModal from "./DeleteReviewModal";

const GetAllReviewsOfProduct = ({
  reviews,
  numReviews,
  averageRating,
  title,
}: {
  reviews: ReviewsDetailsProductType[];
  numReviews: number;
  averageRating: number;
  title: string;
}) => {
  const [selectedReview, setSelectedReview] =
    useState<ReviewsDetailsProductType | null>(null);
  const [deleteReviewId, setDeleteReviewId] = useState<string | null>(null);

  const handleEdit = (review: ReviewsDetailsProductType) =>
    setSelectedReview(review);
  const handleCloseEdit = () => setSelectedReview(null);

  const handleDelete = (id: string) => setDeleteReviewId(id);
  const handleCloseDelete = () => setDeleteReviewId(null);

  return (
    <div className="bg-slate-900 p-6 rounded-xl flex-1 shadow-lg border border-slate-700">
      {/* ✅ عنوان المنتج */}
      <h2 className="text-2xl font-bold text-white mb-2">{title}</h2>

      {/* ✅ المتوسط وعدد الريفيوهات */}
      <div className="flex items-center gap-4 mb-6">
        <div className="flex items-center text-yellow-400 text-xl font-semibold">
          ⭐ {averageRating}
        </div>
        <span className="text-slate-400 text-sm">
          ({numReviews} {numReviews === 1 ? "Review" : "Reviews"})
        </span>
      </div>

      {/* ✅ حالة عدم وجود ريفيوهات */}
      {reviews.length === 0 ? (
        <p className="text-slate-400 text-center py-6">
          No reviews yet. Be the first to review!
        </p>
      ) : (
        <div className="space-y-4 max-h-[350px] overflow-y-auto pr-2">
          {reviews.map((review) => (
            <div
              key={review._id}
              className="p-4 bg-slate-800 rounded-lg border border-slate-700 hover:border-sky-500 transition"
            >
              {/* ✅ الهيدر: اسم المستخدم + تاريخ + التقييم */}
              <div className="flex justify-between items-start mb-3">
                <div>
                  <span className="text-white font-semibold block">
                    {review.user.username}
                  </span>
                  <span className="text-xs text-slate-500">
                    {new Date(review.createdAt).toLocaleDateString()}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-yellow-400 font-bold">
                    {review.rating}
                  </span>
                  <Star className="text-yellow-400 fill-yellow-400" size={18} />
                </div>
              </div>

              {/* ✅ الكومنت */}
              <p className="text-slate-300 leading-relaxed mb-3">
                {review.comment}
              </p>

              {/* ✅ الأزرار */}
              <div className="flex justify-end gap-4">
                <button
                  className="flex items-center gap-1 text-sky-400 text-sm hover:underline hover:text-sky-300"
                  onClick={() => handleEdit(review)}
                >
                  <Edit size={14} />
                  Edit
                </button>
                <button
                  className="flex items-center gap-1 text-red-400 text-sm hover:underline hover:text-red-300"
                  onClick={() => handleDelete(review._id)}
                >
                  <X size={14} />
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* ✅ مودال التعديل */}
      {selectedReview && (
        <EditReviewModal review={selectedReview} onClose={handleCloseEdit} />
      )}

      {/* ✅ مودال الحذف */}
      {deleteReviewId && (
        <DeleteReviewModal
          reviewId={deleteReviewId}
          onClose={handleCloseDelete}
        />
      )}
    </div>
  );
};

export default GetAllReviewsOfProduct;
