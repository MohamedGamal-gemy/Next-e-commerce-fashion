"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";

const sortOptions = [
  { label: "Price: High to Low", value: "high" },
  { label: "Price: Low to High", value: "low" },
  { label: "Rating: High to Low", value: "high_rating" },
  { label: "Newest Arrivals", value: "new" },
  { label: "Oldest Arrivals", value: "old" },
];

const SelectFilterBySort = ({ currentSort }: { currentSort?: string }) => {
  const searchParams = useSearchParams();

  const generateSortUrl = (sortValue: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("sort", sortValue);
    // Reset page to 1 عند تغيير الفلتر (اختياري)
    params.set("page", "1");
    return `?${params.toString()}`;
  };

  return (
    <div className="flex gap-2 flex-wrap">
      {sortOptions.map((option) => (
        <Link
          key={option.value}
          href={generateSortUrl(option.value)}
          className={`px-4 py-2 rounded-md border text-sm ${
            currentSort === option.value
              ? "bg-black text-white"
              : "bg-white text-black"
          }`}
        >
          {option.label}
        </Link>
      ))}
    </div>
  );
};

export default SelectFilterBySort;
