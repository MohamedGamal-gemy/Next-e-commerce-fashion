"use client";

import { useSearchParams, usePathname, useRouter } from "next/navigation";

const SubcategoryFilter = ({ subcategories }: { subcategories: string[] }) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const selectedSubs = searchParams.getAll("subcategory");

  const handleSubcategoryChange = (sub: string) => {
    const currentSubs = searchParams.getAll("subcategory");
    const newParams = new URLSearchParams(searchParams.toString());

    if (currentSubs.includes(sub)) {
      newParams.delete("subcategory");
      currentSubs
        .filter((s) => s !== sub)
        .forEach((s) => newParams.append("subcategory", s));
    } else {
      newParams.append("subcategory", sub);
    }

    newParams.set("page", "1");

    const newUrl = `${pathname}?${newParams.toString()}`;
    const oldUrl = `${pathname}?${searchParams.toString()}`;
    if (newUrl !== oldUrl) {
      router.push(newUrl);
    }
  };

  return (
    <div className="p-4 rounded-lg text-gray-200 bg-slate-80">
      <h2 className="text-lg font-medium mb-4 text-basic w-fit">Subcategory</h2>
      <div className="flex flex-col gap-2">
        {subcategories?.map((sub) => (
          <label
            key={sub}
            className="inline-flex items-center gap-2 cursor-pointer transition-colors"
          >
            <input
              type="checkbox"
              value={sub}
              checked={selectedSubs.includes(sub)}
              onChange={() => handleSubcategoryChange(sub)}
              className="h-4 w-4 accent-white"
            />
            <span className="text-sm">{sub}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default SubcategoryFilter;
