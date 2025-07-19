// "use client";

// import { useState } from "react";
// import { Star, X } from "lucide-react";

// interface EditReviewModalProps {
//   review: {
//     _id: string;
//     rating: number;
//     comment: string;
//   };
//   onClose: () => void;
//   onUpdate: () => void;
// }

// export default function EditReviewModal({
//   review,
//   onClose,
//   onUpdate,
// }: EditReviewModalProps) {
//   const [rating, setRating] = useState(review.rating);
//   const [hover, setHover] = useState(0);
//   const [comment, setComment] = useState(review.comment);
//   const [loading, setLoading] = useState(false);

//   const handleUpdate = async () => {
//     setLoading(true);
//     try {
//       onUpdate(review._id, { rating, comment });

//       const res = await fetch(
//         `http://localhost:9000/api/reviews/${review._id}`,
//         {
//           method: "PUT",
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${localStorage.getItem("token")}`,
//           },
//           body: JSON.stringify({ rating, comment }),
//         }
//       );

//       if (res.ok) {
//         onUpdate(); // إعادة التحميل أو تحديث القائمة
//         onClose();
//       }
//     } catch (error) {
//       console.error("Error updating review", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
//       <div className="bg-slate-900 p-6 rounded-xl w-full max-w-lg shadow-xl relative animate-fadeIn">
//         {/* ✅ زر الإغلاق */}
//         <button
//           onClick={onClose}
//           className="absolute top-3 right-3 text-slate-400 hover:text-white"
//         >
//           <X size={22} />
//         </button>

//         <h2 className="text-xl font-semibold text-white mb-4">
//           Edit Your Review
//         </h2>

//         {/* ⭐ التقييم */}
//         <div className="mb-4">
//           <label className="block text-slate-300 mb-2">Rating</label>
//           <div className="flex gap-2">
//             {[1, 2, 3, 4, 5].map((star) => (
//               <Star
//                 key={star}
//                 size={28}
//                 onClick={() => setRating(star)}
//                 onMouseEnter={() => setHover(star)}
//                 onMouseLeave={() => setHover(0)}
//                 className={`cursor-pointer transition ${
//                   star <= (hover || rating)
//                     ? "fill-yellow-400 text-yellow-400"
//                     : "text-slate-500"
//                 }`}
//               />
//             ))}
//           </div>
//         </div>

//         {/* ✍️ الكومنت */}
//         <div className="mb-4">
//           <label className="block text-slate-300 mb-2">Your Comment</label>
//           <textarea
//             value={comment}
//             onChange={(e) => setComment(e.target.value)}
//             className="w-full p-3 rounded-lg bg-slate-800 text-white border border-slate-600 focus:outline-none focus:ring-2 focus:ring-sky-500"
//             rows={4}
//           />
//         </div>

//         {/* ✅ الأزرار */}
//         <div className="flex justify-end gap-3">
//           <button
//             onClick={onClose}
//             className="px-4 py-2 bg-slate-700 text-white rounded-lg hover:bg-slate-600"
//           >
//             Cancel
//           </button>
//           <button
//             onClick={handleUpdate}
//             disabled={loading}
//             className="px-4 py-2 bg-sky-500 text-white rounded-lg hover:bg-sky-600 disabled:opacity-50"
//           >
//             {loading ? "Saving..." : "Update Review"}
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

"use client";

import { useState } from "react";
import { Star, X } from "lucide-react";
import { toast } from "sonner";
import { updateReview } from "@/lib/getReviews";
// import { updateReview } from "@/lib/reviews";
// import { toast } from "react-hot-toast";

interface EditReviewModalProps {
  review: {
    _id: string;
    rating: number;
    comment: string;
  };
  onClose: () => void;
}

export default function EditReviewModal({
  review,
  onClose,
}: EditReviewModalProps) {
  const [rating, setRating] = useState(review.rating);
  const [hover, setHover] = useState(0);
  const [comment, setComment] = useState(review.comment);
  const [loading, setLoading] = useState(false);

  const handleUpdate = async () => {
    if (!comment.trim()) {
      toast.error("Comment cannot be empty!");
      return;
    }
    const token = localStorage.getItem("token");
    if (!token) {
      toast.error("You must be logged in to add a review.");
      return;
    }

    setLoading(true);
    try {
      await updateReview(review._id, { rating, comment }, token);
      toast.success("Review updated successfully!");
      onClose();
    } catch (error) {
      console.error("Error updating review:", error);
      toast.error("Failed to update review.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
      <div className="bg-slate-900 p-6 rounded-xl w-full max-w-lg shadow-xl relative animate-fadeIn">
        {/* ❌ Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-slate-400 hover:text-white"
        >
          <X size={22} />
        </button>

        <h2 className="text-xl font-semibold text-white mb-4">
          Edit Your Review
        </h2>

        {/* ⭐ Rating */}
        <div className="mb-4">
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

        {/* ✍ Comment */}
        <div className="mb-4">
          <label className="block text-slate-300 mb-2">Your Comment</label>
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            className="w-full p-3 rounded-lg bg-slate-800 text-white border border-slate-600 focus:outline-none focus:ring-2 focus:ring-sky-500"
            rows={4}
          />
        </div>

        {/* ✅ Buttons */}
        <div className="flex justify-end gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-slate-700 text-white rounded-lg hover:bg-slate-600"
          >
            Cancel
          </button>
          <button
            onClick={handleUpdate}
            disabled={loading}
            className="px-4 py-2 bg-sky-500 text-white rounded-lg hover:bg-sky-600 disabled:opacity-50"
          >
            {loading ? "Saving..." : "Update Review"}
          </button>
        </div>
      </div>
    </div>
  );
}
