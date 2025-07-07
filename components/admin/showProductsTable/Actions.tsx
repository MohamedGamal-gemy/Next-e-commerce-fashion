"use client";
import { Edit, X } from "lucide-react";
import Link from "next/link";
import { memo } from "react";

const Actions = ({ id }: { id: string }) => {
  return (
    <div className="flex gap-1 justify-center  ">
      <Link href={`/admin/edit-product/${id}`}>
        <button
          className=" hover:bg-sky-600 transition-colors text-white  p-2 rounded-md  bg-sky-400
         cursor-pointer"
        >
          <Edit className=" " size={16} />
        </button>
      </Link>
      <button
        className=" hover:bg-rose-600 transition-colors text-white  p-2 rounded-md  cursor-pointer
       bg-rose-500"
      >
        <X size={16} />
      </button>
    </div>
  );
};

export default memo(Actions);
