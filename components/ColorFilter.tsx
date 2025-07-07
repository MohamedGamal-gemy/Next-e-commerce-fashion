"use client";

import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { useState } from "react";

const ColorFilter = ({ colors }: { colors: string[] }) => {
  const [more, setMore] = useState(false);
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const selectedColors = searchParams.getAll("color");

  const handleToggleColor = (color: string) => {
    const currentColor = searchParams.getAll("color");
    const newParams = new URLSearchParams(searchParams.toString());

    if (currentColor.includes(color)) {
      newParams.delete("color");
      currentColor
        .filter((s) => s !== color)
        .forEach((s) => newParams.append("color", s));
    } else {
      newParams.append("color", color);
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
      <h2 className="text-lg font-medium mb-4 text-basic">Colors</h2>

      <div className="flex flex-col gap-2">
        {colors?.slice(0, more ? colors.length : 4).map((color) => (
          <label key={color} className="inline-flex items-center gap-2">
            <input
              type="checkbox"
              value={color}
              checked={selectedColors.includes(color)}
              onChange={() => handleToggleColor(color)}
              className="accent-white"
            />
            {color}
          </label>
        ))}

        {colors.length > 4 && (
          <span
            className="cursor-pointer text-blue-400 hover:underline mt-1"
            onClick={() => setMore(!more)}
          >
            {more ? "Less..." : "More..."}
          </span>
        )}
      </div>
    </div>
  );
};

export default ColorFilter;
