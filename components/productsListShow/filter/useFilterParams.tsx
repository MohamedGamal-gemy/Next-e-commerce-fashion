import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export const useFilterParams = (paramName: string) => {
  const search = useSearchParams();
  const router = useRouter();

  const [selectedValues, setSelectedValues] = useState<string[]>(() => {
    const initial = search.get(paramName);
    return initial ? initial.split(",") : [];
  });

  const updateURLParams = (values: string[]) => {
    const params = new URLSearchParams(search.toString());
    if (values.length > 0) {
      params.set(paramName, values.join(","));
    } else {
      params.delete(paramName);
    }
    router.push(`?${params.toString()}`);
  };

  const handleValueChange = (value: string) => {
    let updated: string[];

    if (selectedValues.includes(value)) {
      updated = selectedValues.filter((id) => id !== value);
    } else {
      updated = [...selectedValues, value];
    }

    setSelectedValues(updated);
    updateURLParams(updated);
  };

  // Update state when URL changes
  useEffect(() => {
    const param = search.get(paramName);
    setSelectedValues(param ? param.split(",") : []);
  }, [search, paramName]);

  return {
    selectedValues,
    handleValueChange,
  };
};
