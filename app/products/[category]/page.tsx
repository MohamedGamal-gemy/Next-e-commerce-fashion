import { getProductsList } from "@/lib/getProductsList";
import Product from "@/components/Product";
import FilterProducts from "@/components/FilterProducts";
import Pagination from "@/components/Pagination";
import QuickLook from "@/components/QuickLook";
import { ProductType } from "@/types/Product.type";
import SelectFilterBySort from "@/components/productsListShow/SelectFilterBySort";

const Products = async ({
  searchParams,
}: {
  searchParams: Promise<{
    page?: string | undefined;
    sort?: string | undefined;
    color?: string | string[] | undefined;
    subcategory?: string | string[] | undefined;
  }>;
}) => {
  const { page, color, sort, subcategory } = await searchParams;
  const { data, filterData } = await getProductsList({
    page: Number(page) || 1,
    color: color || "",
    sort: sort || "high",
    subcategory: subcategory || "",
  });

  return (
    <div className="my-8 min-h-screen flex flex-col justify-between  relative">
      <div
        className="absolute  w-[30%] left-2/5 -translate-x-1/4 h-[14rem] blur-[9rem] bg-gradient-to-t
         to-sky-500 from-slate-800 top-0"
      />
      <div className="flex  gap-5 relative z-10">
        {filterData && <FilterProducts filter={filterData} />}
        <div className="px-4 w-full">
          <div className="mb-3 flex justify-between">
            <SelectFilterBySort currentSort={sort} />
          </div>
          <div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-3 w-full"
            // className="grid gap-4 [grid-template-columns:repeat(auto-fit,minmax(200px,1fr))]"
          >
            {data?.products?.map((prod: ProductType) => (
              <Product product={prod} key={prod._id} />
            ))}
          </div>
          {data && data.totalPages > 1 && (
            <Pagination
              currentPage={data?.currentPage}
              totalPages={data?.totalPages}
            />
          )}
        </div>
      </div>
      <div>
        <QuickLook />
      </div>
    </div>
  );
};

export default Products;
