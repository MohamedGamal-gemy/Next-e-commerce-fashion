// "use client";

// import { useEffect, useState } from "react";
// import { useDebounce } from "use-debounce";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
// import { usePathname, useRouter, useSearchParams } from "next/navigation";

const PriceFilter = ({ MIN, MAX }: { MIN: number; MAX: number }) => {
  // const searchParams = useSearchParams();
  // const pathname = usePathname();
  // const router = useRouter();

  // const [values, setValues] = useState<[number, number]>([MIN, MAX]);
  // const [debouncedValues] = useDebounce(values, 500);

  // useEffect(() => {
  //   const minInUrl = searchParams.get("minPrice");
  //   const maxInUrl = searchParams.get("maxPrice");

  //   const min = Number(minInUrl);
  //   const max = Number(maxInUrl);

  //   const shouldReset =
  //     !minInUrl ||
  //     !maxInUrl ||
  //     isNaN(min) ||
  //     isNaN(max) ||
  //     min < MIN ||
  //     max > MAX;

  //   if (shouldReset) {
  //     const newParams = new URLSearchParams(searchParams.toString());
  //     newParams.delete("minPrice");
  //     newParams.delete("maxPrice");
  //     router.push(`${pathname}?${newParams.toString()}`);
  //     setValues([MIN, MAX]);
  //   } else {
  //     setValues([min, max]);
  //   }
  // }, [MIN, MAX, pathname, router, searchParams]);

  // useEffect(() => {
  //   const newParams = new URLSearchParams(searchParams.toString());

  //   if (debouncedValues[0] === MIN && debouncedValues[1] === MAX) {
  //     newParams.delete("minPrice");
  //     newParams.delete("maxPrice");
  //   } else {
  //     newParams.set("minPrice", debouncedValues[0].toString());
  //     newParams.set("maxPrice", debouncedValues[1].toString());
  //   }

  //   newParams.set("page", "1"); // ✅ نرجع لأول صفحة بعد التغيير

  //   router.push(`${pathname}?${newParams.toString()}`);
  // }, [debouncedValues, pathname, router, searchParams]);

  return (
    <div className="px-4 rounded-lg text-gray-200 bg-slate-80">
      <h2 className="text-lg font-medium mb-4 text-basic">Price Range</h2>

      <Slider
        range
        min={MIN}
        max={MAX}
        // value={values}
        value={[MIN, MAX]}
        // onChange={(val) => setValues(val as [number, number])}
        trackStyle={[{ backgroundColor: "#0ea5e9" }]}
        handleStyle={[
          { backgroundColor: "#0ea5e9", borderColor: "#0ea5e9" },
          { backgroundColor: "#0ea5e9", borderColor: "#0ea5e9" },
        ]}
        railStyle={{ backgroundColor: "#e5e7eb" }}
      />

      <div className="flex justify-between text-sm mt-2">
        {/* <span>EGP {values[0]}</span> */}
        {/* <span>EGP {values[1]}</span> */}
      </div>
    </div>
  );
};

export default PriceFilter;
