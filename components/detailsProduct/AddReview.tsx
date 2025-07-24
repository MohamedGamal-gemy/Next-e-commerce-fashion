"use client";
import { useState } from "react";
import { Star } from "lucide-react";
import { toast } from "sonner";
import { useAddReviewMutation } from "@/store/reviews";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";

export default function AddReview({ product }: { product: string }) {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [comment, setComment] = useState("");

  const router = useRouter();
  const [addReview, { isLoading }] = useAddReviewMutation();

  const {user} = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // ✅ تحقق من تسجيل الدخول
    if (!user) {
      toast.warning("Please login to add a review.");
      router.push("/login");
      return;
    }

    if (!rating || !comment.trim()) {
      toast.info("Please provide both rating and comment.");
      return;
    }

    if (comment.trim().length < 10) {
      toast.info("Comment should be at least 10 characters.");
      return;
    }

    try {
      await addReview({ comment, rating, product }).unwrap();
      toast.success("✅ Review added successfully!");
      setRating(0);
      setComment("");
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      toast.error(`❌ ${err?.data?.message || "Failed to add review"}`);
    }
  };

  return (
    <div className="flex-1 bg-slate-900 p-6 rounded-xl border border-slate-700">
      <h2 className="text-xl font-semibold text-white mb-4">Add Your Review</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* ⭐ Rating */}
        <div>
          <label className="block text-slate-300 mb-2">Rating</label>
          <div className="flex gap-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                size={28}
                onClick={() => setRating(star)}
                onMouseEnter={() => setHover(star)}
                onMouseLeave={() => setHover(0)}
                className={`cursor-pointer transition ${
                  star <= (hover || rating)
                    ? "fill-yellow-400 text-yellow-400 scale-110"
                    : "text-slate-500"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Comment */}
        <div>
          <label className="block text-slate-300 mb-2">Your Comment</label>
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Write your review..."
            className="w-full p-3 rounded-lg bg-slate-800 text-white border border-slate-600 
            focus:outline-none focus:ring-2 focus:ring-sky-500"
            rows={4}
          />
          <p className="text-xs text-slate-400 mt-1">
            {comment.length}/200 characters
          </p>
        </div>

        <button
          type="submit"
          className={`w-full bg-sky-500 hover:bg-sky-600 text-white font-medium py-3 
            rounded-lg transition disabled:opacity-60`}
          disabled={isLoading}
        >
          {isLoading ? "Submitting..." : "Submit Review"}
        </button>
      </form>
    </div>
  );
}
