"use client";

import { memo } from "react";
import ColorFilter from "./ColorFilter";
import SubcategoryFilter from "./SubcategoryFilter";
import PriceFilter from "./PriceFilter";
import RatingFilter from "./RatingFilter";

type Props = {
  filter: {
    colors: string[];
    minPrice: number;
    maxPrice: number;
    subcategories: string[];
  };
};
const FilterProducts = memo(({ filter }: Props) => {
  return (
    <div className="relative bg-slate-600/20 min-h-screen w-[300px] overflow-y-auto scroll_hidden ">
      <h2 className="text-sky-400 font-bold text-2xl ">Filter</h2>
      {/* <div className="relative bg-white"> */}
        <SubcategoryFilter subcategories={filter?.subcategories} />
        <PriceFilter MIN={filter?.minPrice} MAX={filter?.maxPrice} />
        <ColorFilter colors={filter?.colors} />
        <RatingFilter />
      {/* </div> */}
    </div>
  );
});

export default FilterProducts;
