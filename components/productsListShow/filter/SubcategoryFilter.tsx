"use client";

import { CloudMoonRain, Contact } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { parseAsArrayOf, parseAsString, useQueryState } from "nuqs";
import { useRouter } from "next/navigation";

const SubcategoryFilter = ({ subcategories }) => {
  const [selectedSubcategories, setSelectedSubcategories] = useQueryState(
    "subcategory",
    parseAsArrayOf(parseAsString).withDefault([]) 
  );
  const router = useRouter();
  const handleChange = (name) => {
    const newValues = selectedSubcategories.includes(name)
      ? selectedSubcategories.filter((item) => item !== name)
      : [...selectedSubcategories, name];

    setSelectedSubcategories(newValues, {
      history: "replace",
      shallow: true,
    }).then(() => {
      router.refresh();
    });
  };

  return (
    <div>
      <div className="flex items-center gap-2 mb-4">
        <div
          className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg 
        flex items-center justify-center"
        >
          <Contact />
        </div>
        <h3 className="text-lg font-semibold text-white">Categories</h3>
      </div>

      {subcategories.length === 0 ? (
        <div className="text-center py-4">
          <div className="w-12 h-12 mx-auto mb-3 bg-slate-700/50 rounded-full flex items-center justify-center">
            <CloudMoonRain />
          </div>
          <p className="text-slate-400 text-sm">No categories available</p>
        </div>
      ) : (
        <div className="space-y-2">
          {subcategories.map((sub) => (
            <div
              key={sub._id}
              className="group flex gap-2 w-fit items-center hover:text-blue-400  duration-200 p-2  cursor-pointer"
            >
              <Checkbox
                id={`sub-${sub._id}`}
                checked={selectedSubcategories.includes(sub.name)}
                onCheckedChange={() => handleChange(sub.name)}
                className="!bg-slate-800 !text-white border
                 !w-5 !h-5 flex flex-col items-center justify-center !border-slate-600"
              />
              <label htmlFor={`sub-${sub._id}`} className="">
                {sub.name}
              </label>
            </div>
          ))}
          {/* {selectedSubcategories.length > 0 && (
            <button
              onClick={handleClearSubcategories}
              className="text-sm text-purple-400 hover:text-purple-300 mt-2"
            >
              Clear All
            </button>
          )} */}
        </div>
      )}
    </div>
  );
};

export default SubcategoryFilter;
