"use client";

import { deleteReview } from "@/lib/getReviews";
import { X } from "lucide-react";
// import { deleteReview } from "@/lib/reviews";
import { useState } from "react";
import { toast } from "sonner";
// import { toast } from "react-hot-toast";

interface DeleteReviewModalProps {
  reviewId: string;
  onClose: () => void;
}

export default function DeleteReviewModal({
  reviewId,
  onClose,
}: DeleteReviewModalProps) {
  const [loading, setLoading] = useState(false);

  const handleDelete = async () => {
    setLoading(true);
    const token = localStorage.getItem("token");
    if (!token) {
      toast.error("You must be logged in to add a review.");
      return;
    }

    try {
      await deleteReview(reviewId, token);
      toast.success("Review deleted successfully!");
      onClose();
    } catch (error) {
      console.error("Error deleting review:", error);
      toast.error("Failed to delete review.");
    } finally {
      setLoading(false);
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
            disabled={loading}
            className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 disabled:opacity-50"
          >
            {loading ? "Deleting..." : "Delete"}
          </button>
        </div>
      </div>
    </div>
  );
}
