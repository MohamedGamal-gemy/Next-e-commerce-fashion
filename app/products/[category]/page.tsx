import { getProductsList } from "@/lib/getProductsList";
import Product from "@/components/Product";
import Pagination from "@/components/Pagination";
import { ProductShowType } from "@/types/Product.type";
import LimitSelector from "@/components/productsListShow/LimitSelector";
import Filter from "@/components/productsListShow/filter";

const Products = async ({
  searchParams,
}: {
  searchParams: Promise<{
    page?: string | undefined;
    limit?: string | undefined;
    sort?: string | undefined;
    color?: string | string[] | undefined;
    subcategory?: string | string[] | undefined;
  }>;
}) => {
  const { page, limit, subcategory } = await searchParams;

  const { data } = await getProductsList({
    page: Number(page) || 1,
    limit: Number(limit) || 8,
    subcategory: subcategory || "",
  });

  return (
    <div className="my-8 min-h-screen flex flex-col justify-between  relative">
      <div
        className="absolute  w-[30%] left-2/5 -translate-x-1/4 h-[14rem] blur-[9rem] bg-gradient-to-t
         to-sky-500 from-slate-800 top-0"
      />
      <div className="flex  gap-5 relative z-10">
        <div className="pr-4 w-full">
          <div className="mb-3 flex justify-between gap-8">
            <Filter />
            <div
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-3 w-full"
              // className="grid gap-4 [grid-template-columns:repeat(auto-fit,minmax(200px,1fr))]"
            >
              {data?.products?.map((prod: ProductShowType) => (
                <Product product={prod} key={prod._id} />
              ))}
            </div>
          </div>

          <div className="flex items-center justify-between ">
            <div className="  flex-auto">
              {data?.totalPages > 1 && (
                <Pagination
                  currentPage={data?.currentPage}
                  totalPages={data?.totalPages}
                />
              )}
            </div>
            <LimitSelector />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
