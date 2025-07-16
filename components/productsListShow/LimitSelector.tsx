"use client";

import { useRouter } from "next/navigation";
import { parseAsInteger, useQueryState } from "nuqs";

const LimitSelector = () => {
  const [limitSelected, setLimitSelected] = useQueryState(
    "limit",
    parseAsInteger.withDefault(6)
  );

  const router = useRouter();

  const handleLimitChange = (newLimit: number) => {
    setLimitSelected(newLimit, {
      history: "replace",
      shallow: true,
    }).then(() => {
      router.refresh();
    });
  };
  return (
    <select
      value={limitSelected}
      // onChange={(e) => setLimitSelected(Number(e.target.value))}
      onChange={(e) => handleLimitChange(Number(e.target.value))}
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
