import { cn } from "@/lib/utils";
import { Star } from "lucide-react";

const StarReviews = ({ rating, numReviews }) => {
  return (
    <div className="flex items-center gap-2 mt-1">
      <div className="flex">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={16}
            className={cn(
              i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
            )}
          />
        ))}
      </div>
      <span className="text-sm text-gray-500">
        ({numReviews} review
        {numReviews !== 1 ? "s" : ""})
      </span>
    </div>
  );
};

export default StarReviews;
