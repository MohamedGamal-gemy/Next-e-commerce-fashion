import { Star } from "lucide-react";

const StarReviews = ({ rating }: { rating: number | undefined }) => {
  return (
    <div className="flex gap-1 mt-1">
      {Array(5)
        .fill(0)
        .map((_, index) => (
          <Star
            key={index}
            size={14}
            className={`${
              rating && rating > index ? "text-yellow-400" : "text-gray-600"
            }`}
            fill={rating && rating > index ? "gold" : "transparent"}
          />
        ))}
    </div>
  );
};

export default StarReviews;
