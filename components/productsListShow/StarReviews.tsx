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
            className="text-[#f47917]"
            fill={rating && rating > index ? "#f47917" : ""}
          />
        ))}
    </div>
  );
};

export default StarReviews;
