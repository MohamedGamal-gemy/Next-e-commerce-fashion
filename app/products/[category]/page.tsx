import Filter from "@/components/productsListShow/filter";
import ProductsRender from "@/components/productsListShow/ProductsRender";
import MobileFilter from "@/components/productsListShow/mobileFilter/MobileFilter";
import { getProductsList } from "@/lib/getProductsList";
import { getSubcategories } from "@/lib/getSubcategories";
import { getColors } from "@/lib/getColors";
import SelectFilterBySort from "@/components/productsListShow/SelectFilterBySort";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import FilterByTitle from "@/components/productsListShow/FilterByTitle";

const ProductsPage = async ({ searchParams }) => {
  const { limit, page, subcategory, color, sort, title, minPrice, maxPrice } =
    await searchParams;
  const data = await getProductsList({
    limit,
    page,
    subcategory,
    color,
    sort,
    title,
    minPrice,
    maxPrice,
  });
  const { priceRange } = data;
  const subcategories = await getSubcategories();
  const colors = await getColors();

  return (
    <div
      className="min-h-screen bg-gradient-to-br to-slate-950
      vi-[#0e3b49]/60 from-slate-950"
    >
      <div className="py- flex flex-col justify-between relative">
        <div className="flex gap-5 relative z-10">
          <div className="pr-4 w-full">
            <div className="mb-3 flex justify-between gap-8">
              <div className="hidden lg:block">
                <Filter
                  subcategories={subcategories}
                  colors={colors}
                  minPriceDefault={priceRange.minPrice}
                  maxPriceDefault={priceRange.maxPrice}
                />
              </div>
              <div className="flex-1 container mx-auto px-4 py-6">
                <MobileFilter />
                <div className="flex justify-between items-center mb-4">
                  <FilterByTitle />
                  <SelectFilterBySort />
                </div>

                <ProductsRender data={data} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
