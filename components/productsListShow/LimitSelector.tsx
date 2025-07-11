"use client";
import { useRouter, useSearchParams } from "next/navigation";

const LimitSelector = () => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const handleLimitSearchParams = (limit: any) => {
    const url = new URLSearchParams(searchParams.toString());

    url.set("limit", limit.toString());
    router.push(`?${url.toString()}`);
  };
  return (
    <select
      onChange={(e) => handleLimitSearchParams(e.target.value)}
      className="px-3 py-2 bg-slate-800 rounded outline-0"
    >
      {[6, 8, 12, 14, 16].map((lim) => (
        <option key={lim} value={lim}>
          {lim}
        </option>
      ))}
    </select>
  );
};

export default LimitSelector;
