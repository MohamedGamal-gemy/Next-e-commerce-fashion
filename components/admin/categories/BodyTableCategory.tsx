"use client";

import {
  useGetCategoriesQuery,
  useDeleteCategoryMutation,
} from "@/store/categories";
import { X } from "lucide-react";
import Model from "./Model";
import { toast } from "sonner";
import EditDialog from "./ModelUpdate";
// import EditPopover from "./ModelUpdate";
const BodyTableCategory = () => {
  const { categories, loading } = useGetCategoriesQuery(undefined, {
    selectFromResult: ({ data, isLoading }) => ({
      categories: data,
      loading: isLoading,
    }),
  });
  const [deleteCategory, { isLoading }] = useDeleteCategoryMutation();
//   console.log(categories);

  const handleDelete = async (id: string) => {
    try {
      await deleteCategory(id).unwrap();
      toast("Deleted Success!");
    } catch (error) {
      console.error("Failed to delete category:", error);
    }
  };
// if(loading)
  return (
    <>
      {categories?.map((category) => (
        <tr key={category._id}>
          <td className="py-2">{category.name}</td>
          <td>{new Date(category.createdAt).toLocaleDateString()}</td>
          <td>
            <div className="flex gap-2 items-center justify-center">
              <EditDialog
                categoryId={category._id}
                currentName={category.name}
              />
              <Model onConfirm={() => handleDelete(category._id)}>
                <X
                  className={`cursor-pointer text-red-500 hover:text-red-700 transition ${
                    isLoading ? "opacity-50 pointer-events-none" : ""
                  }`}
                />
              </Model>
            </div>
          </td>
        </tr>
      ))}
    </>
  );
};

export default BodyTableCategory;
