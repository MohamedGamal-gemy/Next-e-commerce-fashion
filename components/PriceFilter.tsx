"use client";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import { useRouter } from "next/navigation";
import { parseAsInteger, useQueryState } from "nuqs";

const PriceFilter = ({ minPriceDefault, maxPriceDefault }: { minPriceDefault: number; maxPriceDefault: number }) => {
  const router = useRouter();
  const [minPrice, setMinPrice] = useQueryState("minPrice", parseAsInteger.withDefault(minPriceDefault));
  const [maxPrice, setMaxPrice] = useQueryState("maxPrice", parseAsInteger.withDefault(maxPriceDefault));

  const handlePriceChange = (values: number[]) => {
    setMinPrice(values[0], { history: "replace", shallow: true });
    setMaxPrice(values[1], { history: "replace", shallow: true }).then(() => router.refresh());
  };

  return (
    <div className=" ">
      <h2 className="text-lg font-medium mb-4">Price Range</h2>
      <Slider
        range
        min={minPriceDefault}
        max={maxPriceDefault}
        value={[minPrice, maxPrice]}
        onChange={handlePriceChange}
        trackStyle={[{ backgroundColor: "#0ea5e9" }]}
        handleStyle={[
          { backgroundColor: "#0ea5e9", borderColor: "#0ea5e9" },
          { backgroundColor: "#0ea5e9", borderColor: "#0ea5e9" },
        ]}
        railStyle={{ backgroundColor: "#1e293b" }}
      />
      <div className="flex justify-between text-sm mt-2">
        <span>EGP {minPrice}</span>
        <span>EGP {maxPrice}</span>
      </div>
    </div>
  );
};

export default PriceFilter;
