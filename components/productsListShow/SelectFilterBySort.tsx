"use client";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { parseAsArrayOf, parseAsString, useQueryState } from "nuqs";

const sortOptions = [
  { label: "Price: High to Low", value: "price-desc" },
  { label: "Price: Low to High", value: "price-asc" },
  { label: "Rating: High to Low", value: "rating" },
  { label: "Newest Arrivals", value: "new" },
  { label: "Oldest Arrivals", value: "old" },
];

const SelectFilterBySort = () => {
  const router = useRouter();
  const [selectedSort, setSelectedSort] = useQueryState(
    "sort",
    parseAsString.withDefault("")
  );

  const handleChange = (value: string) => {
    setSelectedSort(value, {
      history: "replace",
      shallow: true,
    }).then(() => router.refresh());
  };
  return (
    <select
      onChange={(e) => handleChange(e.target.value)}
      className="p-2 bg-slate-800 border border-white/10"
    >
      {sortOptions.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default SelectFilterBySort;
