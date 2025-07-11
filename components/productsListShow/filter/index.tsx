// "use client";

// import { useGetSubcategoriesQuery } from "@/store/categories";
// import { useGetColorsQuery } from "@/store/colorsfilter";
// import { useRouter, useSearchParams } from "next/navigation";

// const Filter = () => {
//   const { data: subcategories } = useGetSubcategoriesQuery();
//   const { data: colors } = useGetColorsQuery();
//   const search = useSearchParams();
//   const router = useRouter();
//   const handleSubcategorySearchparams = (sub) => {
//     const params = new URLSearchParams(search.toString());
//     params.set("subcategory", sub.toString());
//     router.push(`?${params.toString()}`);
//   };
//   return (
//     <div className="w-[17rem] min-h-screen text-slate-800 bg-slate-100 p-4">
//       <h2 className="font-bold text-2xl text-black">Filter</h2>
//       <div>
//         <h3 className="text-xl font-semibold my-3">Filter by Subcategory</h3>
//         {subcategories?.map((sub) => (
//           <div key={sub._id} className="flex gap-2 items-center my-1">
//             <input
//               type="checkbox"
//               id={sub._id}
//               onChange={() => handleSubcategorySearchparams(sub._id)}
//             />
//             <label htmlFor={sub._id}>{sub.name}</label>
//           </div>
//         ))}
//       </div>
//       <div>
//         <h3 className="text-xl font-semibold my-3">Filter by Colors</h3>
//         {colors?.map((color) => (
//           <div key={color._id} className="flex gap-2 items-center my-1">
//             <input type="checkbox" id={color._id} />
//             <label htmlFor={color._id}>{color.color.name}</label>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Filter;

"use client";

import { useState, useEffect } from "react";
import { useGetSubcategoriesQuery } from "@/store/categories";
import { useGetColorsQuery } from "@/store/colorsfilter";
import { useRouter, useSearchParams } from "next/navigation";

const Filter = () => {
  const { data: subcategories } = useGetSubcategoriesQuery();
  const { data: colors } = useGetColorsQuery();
  const search = useSearchParams();
  const router = useRouter();

  // 🟡 1. الحالة للمصنفات المختارة
  const [selectedSubcategories, setSelectedSubcategories] = useState<string[]>(
    () => {
      const initial = search.get("subcategory");
      return initial ? initial.split(",") : [];
    }
  );

  // 🟡 2. تعديل القيم داخل المصفوفة
  const handleSubcategoryChange = (subId: string) => {
    let updated: string[];

    if (selectedSubcategories.includes(subId)) {
      updated = selectedSubcategories.filter((id) => id !== subId);
    } else {
      updated = [...selectedSubcategories, subId];
    }

    setSelectedSubcategories(updated);

    const params = new URLSearchParams(search.toString());
    if (updated.length > 0) {
      params.set("subcategory", updated.join(","));
    } else {
      params.delete("subcategory");
    }

    router.push(`?${params.toString()}`);
  };

  return (
    <div className="w-[17rem] min-h-screen text-slate-800 bg-slate-100 p-4">
      <h2 className="font-bold text-2xl text-black">Filter</h2>

      <div>
        <h3 className="text-xl font-semibold my-3">Filter by Subcategory</h3>
        {subcategories?.map((sub) => (
          <div key={sub._id} className="flex gap-2 items-center my-1">
            <input
              type="checkbox"
              id={sub._id}
              checked={selectedSubcategories.includes(sub.name)}
              onChange={() => handleSubcategoryChange(sub.name)}
            />
            <label htmlFor={sub._id}>{sub.name}</label>
          </div>
        ))}
      </div>

      <div>
        <h3 className="text-xl font-semibold my-3">Filter by Colors</h3>
        {colors?.map((color) => (
          <div key={color._id} className="flex gap-2 items-center my-1">
            <input type="checkbox" id={color._id} />
            <label htmlFor={color._id}>{color.color.name}</label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Filter;
