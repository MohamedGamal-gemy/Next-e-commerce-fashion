"use client";
import { useState } from "react";
import { Star } from "lucide-react";

export default function AddReview({ productId }: { productId: string }) {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [comment, setComment] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!rating || !comment.trim()) {
      setMessage("Please provide both rating and comment.");
      return;
    }

    const token = localStorage.getItem("token");
    if (!token) {
      setMessage("You must be logged in to add a review.");
      return;
    }

    setLoading(true);
    setMessage("");

    try {
      const res = await fetch("http://localhost:9000/api/reviews/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ productId, rating, comment }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Failed to add review");
      }

      setMessage("✅ Review added successfully!");
      setRating(0);
      setComment("");
    } catch (error: any) {
      setMessage(`❌ ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex-1 bg-slate-900 p-6 rounded-xl  border border-slate-700 ">
      <h2 className="text-xl font-semibold text-white mb-4">Add Your Review</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* ⭐ التقييم */}
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

        {/* ✍️ الكومنت */}
        <div>
          <label className="block text-slate-300 mb-2">Your Comment</label>
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Write your review..."
            className="w-full p-3 rounded-lg bg-slate-800 text-white border border-slate-600 focus:outline-none focus:ring-2 focus:ring-sky-500"
            rows={4}
          />
        </div>

        {/* ✅ زرار الإرسال */}
        <button
          type="submit"
          className={`w-full bg-sky-500 hover:bg-sky-600 text-white font-medium py-3 rounded-lg transition ${
            loading ? "opacity-70 cursor-not-allowed" : ""
          }`}
          disabled={loading}
        >
          {loading ? "Submitting..." : "Submit Review"}
        </button>

        {/* رسالة */}
        {message && (
          <p
            className={`text-sm mt-2 ${
              message.startsWith("✅") ? "text-green-400" : "text-red-400"
            }`}
          >
            {message}
          </p>
        )}
      </form>
    </div>
  );
}
