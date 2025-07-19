"use client";
import { FilterIcon, X } from "lucide-react";
import Filter from "../filter";
import { memo, useState } from "react";

const MobileFilter = ({
  subcategories,
  colors,
  minPriceDefault,
  maxPriceDefault,
}) => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const toggleFilter = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  return (
    <>
      <div className="lg:hidden mb-6">
        <button
          onClick={toggleFilter}
          className="w-full bg-slate-800/50 backdrop-blur-sm border border-slate-700/50
                         rounded-xl p-4 text-left hover:bg-slate-800/70 transition-all duration-300"
        >
          <div className="flex items-center justify-between">
            <FilterIcon />
            <span className="text-white font-medium">
              {isFilterOpen ? "Hide Filters" : "Show Filters"}
            </span>
          </div>
        </button>
      </div>

      {/* Mobile Filter  */}
      {isFilterOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-slate-900/95 backdrop-blur-sm p-4 overflow-y-auto transition-all duration-300">
          <div className="flex justify-end">
            <button
              onClick={toggleFilter}
              className="p-2 rounded-full bg-slate-800/50 hover:bg-slate-700/50"
            >
              <X size={24} className="text-white" />
            </button>
          </div>
          <div className="mt-4">
            <Filter
              subcategories={subcategories}
              colors={colors}
              minPriceDefault={minPriceDefault}
              maxPriceDefault={maxPriceDefault}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default memo(MobileFilter);
