"use client";

import { useRouter } from "next/navigation";
import { parseAsInteger, useQueryState } from "nuqs";

type Props = {
  currentPage: number;
  totalPages: number;
  onPageChange?: (page: number) => void; // Prop اختياري لتحديث الصفحة
};

const Pagination = ({ currentPage, totalPages, onPageChange }: Props) => {
  const [selectedPage, setSelectedPage] = useQueryState(
    "page",
    parseAsInteger.withDefault(1)
  );

  const router = useRouter();
  const handlePageChange = (newPage: number) => {
    setSelectedPage(newPage, {
      history: "replace",
      shallow: true,
    }).then(() => {
      router.refresh();
    });
    // setSelectedPage(page);
    // if (onPageChange) {
    //   onPageChange(page);
    // }
  };

  return (
    <div className="flex justify-center items-center gap-2 mt-6 flex-wrap">
      {Array.from({ length: totalPages }).map((_, i) => {
        const page = i + 1;
        const isActive = currentPage === page;

        return (
          <button
            key={page}
            onClick={() => handlePageChange(page)}
            className={`px-4 py-2 rounded cursor-pointer ${
              isActive ? "bg-sky-500 text-white" : "bg-slate-800 text-gray-300"
            } hover:bg-sky-600 transition`}
          >
            {page}
          </button>
        );
      })}
    </div>
  );
};

export default Pagination;
