"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";

type Props = {
  currentPage: number;
  totalPages: number;
};

const Pagination = ({ currentPage, totalPages }: Props) => {
  const searchParams = useSearchParams();

  const generatePageUrl = (page: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", page.toString());
    return `?${params.toString()}`;
  };

  if (totalPages <= 1) return null;

  return (
    <div className="flex justify-center items-center gap-2 mt-6 flex-wrap">
      {Array.from({ length: totalPages }).map((_, i) => {
        const page = i + 1;
        const isActive = currentPage === page;

        return (
          <Link
            key={page}
            href={generatePageUrl(page)}
            className={`px-4 py-2 rounded cursor-pointer ${
              isActive ? "bg-sky-500 text-white" : "bg-slate-800 text-gray-300"
            } hover:bg-sky-600 transition`}
          >
            {page}
          </Link>
        );
      })}
    </div>
  );
};

export default Pagination;
