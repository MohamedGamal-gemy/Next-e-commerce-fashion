"use client";
import { useState } from "react";
import { Star } from "lucide-react";
import { addReview } from "@/lib/getReviews";
import { toast } from "sonner";

export default function AddReview({ product }: { product: string }) {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [comment, setComment] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!rating || !comment.trim()) {
      toast.info("Please provide both rating and comment.");
      return;
    }

    const token = localStorage.getItem("token");
    if (!token) {
      toast.error("You must be logged in to add a review.");
      return;
    }

    setLoading(true);
    try {
      await addReview({ comment, rating, product }, token);
      toast.success("Review deleted successfully!");

      setRating(0);
      setComment("");
    } catch (error: any) {
      toast.error(`❌ ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex-1 bg-slate-900 p-6 rounded-xl  border border-slate-700 ">
      <h2 className="text-xl font-semibold text-white mb-4">Add Your Review</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* ⭐ review */}
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
                    ? "fill-yellow-400 text-yellow-400"
                    : "text-slate-500"
                }`}
              />
            ))}
          </div>
        </div>

        {/* comment */}
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
        </div>

        <button
          type="submit"
          className={`w-full bg-sky-500 hover:bg-sky-600 text-white font-medium py-3 
            rounded-lg transition ${
            loading ? "opacity-70 cursor-not-allowed" : ""
          }`}
          disabled={loading}
        >
          {loading ? "Submitting..." : "Submit Review"}
        </button>
      </form>
    </div>
  );
}
