"use client";
import { Search } from "lucide-react";
import { Input } from "../ui/input";
import { parseAsString, useQueryState } from "nuqs";
import { useRouter } from "next/navigation";
import { memo } from "react";

const FilterByTitle = () => {
  const router = useRouter();
  const [title, setTitle] = useQueryState(
    "title",
    parseAsString.withDefault("")
  );
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = title.trim();

    if (trimmed === "") {
      // ✅ امسح البارام لو فاضي
      setTitle(null, { history: "replace", shallow: true }).then(() =>
        router.refresh()
      );
    } else {
      // ✅ ضيف القيمة لو مش فاضية
      setTitle(trimmed, { history: "replace", shallow: true }).then(() =>
        router.refresh()
      );
    }
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="border  border-white/10 rounded-md flex items-center justify-between
       bg-slate-900 "
    >
      <Input
        value={title}
        onChange={(e) =>
          setTitle(e.target.value, { history: "replace", shallow: true })
        }
        type="search"
        className=" border-0 !outline-0 !ring-0 !shadow-none"
        placeholder="Search By Title"
      />
      {/* </div> */}
      <button
        type="submit"
        // onClick={handleChange}
        className="flex items-center gap-1 p-2 rounded-md rounded-l-none
       bg-sky-500/60 cursor-pointer"
      >
        <Search className="text-sky-200 text-sm" size={16} />
        <span className="text-sm">Search</span>
      </button>
    </form>
  );
};

export default memo(FilterByTitle);
