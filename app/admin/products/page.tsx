"use client";
import ShowProducts from "@/components/admin/ShowProducts";
import { useGetProductsFashionQuery } from "@/store/productsData";
import { Package } from "lucide-react";
import { useEffect, useState, useMemo } from "react";

const ProductsForAdmin = () => {
  const [page, setPage] = useState(1);

  const [limit, setLimit] = useState(4);

  // Load limit from localStorage after mount
  useEffect(() => {
    const stored = localStorage.getItem("limit");
    if (stored) {
      setLimit(Number(stored));
    }
  }, []);

  // Save limit to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("limit", String(limit));
  }, [limit]);

  const { data, isLoading, isSuccess, isFetching } = useGetProductsFashionQuery(
    { page, limit },
    {
      keepPreviousData: true,
      refetchOnMountOrArgChange: true,
      selectFromResult: ({ data, isLoading, isSuccess, isFetching }) => ({
        data,
        isLoading,
        isSuccess,
        isFetching,
      }),
    }
  );

  const paginationButtons = useMemo(() => {
    return Array.from({ length: data?.totalPages || 0 }).map((_, i) => (
      <button
        key={i}
        onClick={() => setPage(i + 1)}
        className={`${
          i + 1 === data?.currentPage ? "bg-sky-600" : "bg-slate-700"
        } py-2 px-3 rounded-md text-white transition cursor-pointer`}
      >
        {i + 1}
      </button>
    ));
  }, [data?.totalPages, data?.currentPage]);

  return (
    <div>
      <div className="grid grid-cols-4  gap-5">
        <div className="border items-center border-white/10 flex gap-2 p-4 bg-slate-700/20 rounded-md">
          <div className="p-1 rounded-md bg-blue-500/20 text-blue-600">
            <Package />
          </div>
          <div>
            <p className="text-sm text-gray-300">Total Products</p>
            <h4 className="font-medium text-white">0</h4>
          </div>
        </div>
        {/*  */}
        <div className="border items-center border-white/10 flex gap-2 p-4 bg-slate-700/20 rounded-md">
          <div className="p-1 rounded-md bg-blue-500/20 text-blue-600">
            <Package />
          </div>
          <div>
            <p className="text-sm text-gray-300">Total Products</p>
            <h4 className="font-medium text-white">0</h4>
          </div>
        </div>
        {/*  */}
        <div className="border items-center border-white/10 flex gap-2 p-4 bg-slate-700/20 rounded-md">
          <div className="p-1 rounded-md bg-blue-500/20 text-blue-600">
            <Package />
          </div>
          <div>
            <p className="text-sm text-gray-300">Total Products</p>
            <h4 className="font-medium text-white">0</h4>
          </div>
        </div>
        {/*  */}
        <div className="border items-center border-white/10 flex gap-2 p-4 bg-slate-700/20 rounded-md">
          <div className="p-1 rounded-md bg-blue-500/20 text-blue-600">
            <Package />
          </div>
          <div>
            <p className="text-sm text-gray-300">Total Products</p>
            <h4 className="font-medium text-white">0</h4>
          </div>
        </div>
      </div>

      <div
        className="lg:max-w-6xl md:max-w-4xl sm:max-w-3xl max-w-2xl mx-auto w-full my-8
    
  border rounded-3xl   border-white/20 overflow-hidden  bg-slate-600/20"
      >
        {/* <h2 className="text-2xl font-bold text-white mb-4">All Products</h2> */}

        {isLoading && <p>Loading...</p>}
        {isSuccess && (
          <>
            {isFetching && (
              <p className="text-sm text-gray-300">Fetching data...</p>
            )}
            <ShowProducts products={data.products} />

            <div className="flex flex-col md:flex-row justify-between items-center my-6 px-6 gap-4">
              {data.totalPages > 1 && (
                <div className="flex gap-2 flex-wrap">{paginationButtons}</div>
              )}

              {/* Limit Selector */}
              <div className="flex items-center gap-2">
                <label
                  htmlFor="limit"
                  className="text-white text-sm font-medium"
                >
                  show:
                </label>
                <select
                  id="limit"
                  value={limit}
                  onChange={(e) => {
                    setLimit(Number(e.target.value));
                    setPage(1);
                  }}
                  className="bg-slate-600 text-white px-2 py-2 rounded-md outline-none"
                >
                  {[4, 6, 8, 10, 12, 14, 16].map((num) => (
                    <option key={num} value={num}>
                      {num}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ProductsForAdmin;
