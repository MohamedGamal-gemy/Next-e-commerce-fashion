"use client";
import {
  Dot,
  DotIcon,
  Edit,
  ListCollapse,
  MoreHorizontal,
  Trash2,
  X,
} from "lucide-react";
import Link from "next/link";
import { memo } from "react";

const Actions = ({ id, setVariantsModal }: { id: string }) => {
  return (
    <div className="flex gap-1 justify-center  ">
      <button
        onClick={() => setVariantsModal(id)}
        className=" hover:bg-sky-600/20 transition-colors text-gray-100  p-2 rounded-md  
         cursor-pointer"
      >
        <MoreHorizontal className=" " size={16} />
      </button>

      <Link href={`/admin/edit-product/${id}`}>
        <button
          className=" hover:bg-sky-600/20 transition-colors text-blue-400  p-2 rounded-md  
         cursor-pointer"
        >
          <Edit className=" " size={16} />
        </button>
      </Link>
      <button
        className=" hover:bg-rose-600/20 transition-colors text-red-400  p-2 rounded-md  cursor-pointer
       "
      >
        <Trash2 size={16} />
      </button>
    </div>
  );
};

export default memo(Actions);
