"use client";

import { memo } from "react";
import SubcategoryFilter from "./SubcategoryFilter";
import ColorFilter from "./ColorFilter";
import PriceFilter from "@/components/PriceFilter";

const Filter = ({
  subcategories,
  colors,
  minPriceDefault,
  maxPriceDefault,
}) => {
  return (
    <div className="w-64 bg-slate-400/15 backdrop-blur-sm border-r border-slate-700/50 p-6 h-fit sticky top-8">
      <div className="mb-6">
        <h2
          className="text-2xl font-bold bg-gradient-to-r from-white to-purple-200 
        bg-clip-text text-transparent mb-2"
        >
          Filters
        </h2>
      </div>

      <div className="space-y-6">
        {/* Subcategory Filter */}
        <div className="bg-slate-900/30 rounded-xl p-4 border border-slate-700/30">
          <SubcategoryFilter subcategories={subcategories} />
        </div>
        <div className="bg-slate-900/30 rounded-xl p-4 border border-slate-700/30">
          <PriceFilter
            minPriceDefault={minPriceDefault}
            maxPriceDefault={maxPriceDefault}
          />
        </div>
        {/* Color Filter */}
        <div className="bg-slate-900/30 rounded-xl p-4 border border-slate-700/30">
          <ColorFilter colors={colors} />
        </div>
      </div>
    </div>
  );
};

export default memo(Filter);
