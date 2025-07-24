"use client";

import { X } from "lucide-react";
import { useDeleteReviewMutation } from "@/store/reviews";
import { toast } from "sonner";
// import { useAppSelector } from "@/store/hooks";
//
interface DeleteReviewModalProps {
  reviewId: string;
  onClose: () => void;
}

export default function DeleteReviewModal({
  reviewId,
  onClose,
}: DeleteReviewModalProps) {
  const [deleteReview, { isLoading }] = useDeleteReviewMutation();
  // const { isAuthenticated } = useAppSelector((state) => state.auth);

  const handleDelete = async () => {
    // // ✅ تحقق من تسجيل الدخول
    // if (!isAuthenticated) {
    //   toast.warning("Please login to delete a review.");
    //   return;
    // }

    try {
      await deleteReview(reviewId).unwrap();
      toast.success("✅ Review deleted successfully!");
      onClose();
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      toast.error(`${error?.data?.message || "Failed to delete review."}`);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
      <div className="bg-slate-900 p-6 rounded-xl w-full max-w-md shadow-xl relative animate-fadeIn">
        {/* ❌ Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-slate-400 hover:text-white"
        >
          <X size={22} />
        </button>

        {/* Title */}
        <h2 className="text-xl font-semibold text-white mb-4">Delete Review</h2>

        {/* Message */}
        <p className="text-slate-300 mb-6">
          Are you sure you want to delete this review? This action cannot be
          undone.
        </p>

        {/* Buttons */}
        <div className="flex justify-end gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-slate-700 text-white rounded-lg hover:bg-slate-600"
          >
            Cancel
          </button>
          <button
            onClick={handleDelete}
            disabled={isLoading}
            className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 disabled:opacity-50"
          >
            {isLoading ? "Deleting..." : "Delete"}
          </button>
        </div>
      </div>
    </div>
  );
}
