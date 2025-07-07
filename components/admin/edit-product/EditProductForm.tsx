// "use client";
// import { useForm, useFieldArray } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { editProductSchema, EditProductType } from "@/schemas/productSchema";
// import VariantField from "./VariantField";
// import axios from "axios";
// import { useEffect, useState } from "react";
// import { useGetCategoriesQuery } from "@/store/categories";

// export default function EditProductForm({
//   defaultValues,
//   categories,
//   subcategories,
// }: {
//   defaultValues: EditProductType;
//   categories: { _id: string; name: string; __v: number }[];
//   subcategories: { _id: string; name: string; __v: number }[];
// }) {
//   const form = useForm<EditProductType>({
//     resolver: zodResolver(editProductSchema),
//     defaultValues,
//   });

//   const {
//     fields: variantFields,
//     append: appendVariant,
//     remove: removeVariant,
//   } = useFieldArray({
//     control: form.control,
//     name: "variants",
//   });

//   const onSubmit = async (data: EditProductType) => {
//     await axios.put(`/api/products/${data._id}`, data);
//     alert("Product Updated");
//   };

//   //   const { data: categories } = useGetCategoriesQuery({});
//   //   console.log(categories);

//   return (
//     <div className="relative flex flex-col justify-center  min-h-screen">
//       <div
//         className="absolute w-[10rem] h-[18rem] right-4 blur-[10rem]
//      bg-gradient-to-t from-sky-500 to-slate-800 top-0"
//       />
//       <div
//         className="absolute w-[10rem] h-[18rem] left-4 blur-[10rem]
//      bg-gradient-to-t from-sky-500 to-slate-800 top-0"
//       />
//       <form
//         onSubmit={form.handleSubmit(onSubmit)}
//         className="space-y-6 p-4 max-w-2xl w-full mx-auto edit-form bg-slate-800/40 rounded-xl  "
//       >
//         <h2 className="text-center font-extrabold text-3xl">Edit Product</h2>
//         <div className="flex items-center gap-3">
//           <input
//             {...form.register("title")}
//             placeholder="Title"
//             className="border p-2  "
//           />
//           <input
//             {...form.register("price")}
//             placeholder="Price"
//             className="border p-2 flex-2/5"
//           />
//         </div>

//         <textarea
//           {...form.register("description")}
//           placeholder="Description"
//           className="border p-2 w-full"
//         />

//         <div className="flex items-center gap-3">
//           <select {...form.register("category.name")} className="bg-slate-900">
//             {categories?.map((category) => (
//               <option key={category._id} value={category.name}>
//                 {category.name}
//               </option>
//             ))}
//           </select>
//           <select {...form.register("subcategory.name")} className="bg-slate-900">
//             {subcategories?.map((subcategory) => (
//               <option key={subcategory._id} value={subcategory.name}>
//                 {subcategory.name}
//               </option>
//             ))}
//           </select>
//         </div>

//         <div className="space-y-4">
//           {variantFields.map((field, index) => (
//             <VariantField
//               key={field.id}
//               variantIndex={index}
//               control={form.control}
//               register={form.register}
//               remove={() => removeVariant(index)}
//             />
//           ))}
//           <button
//             type="button"
//             onClick={() =>
//               appendVariant({
//                 colorName: "",
//                 colorHex: "#000000",
//                 images: [],
//                 sizes: [],
//               })
//             }
//             className="bg-blue-500 text-white px-4 py-2 rounded"
//           >
//             Add Variant
//           </button>
//         </div>

//         <button
//           type="submit"
//           className="bg-sky-600 text-white px-6 py-2 rounded w-10/12 mx-auto block"
//         >
//           Save Changes
//         </button>
//       </form>
//     </div>
//   );
// }

//#######################################################
"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { editProductSchema, EditProductType } from "@/schemas/productSchema";
import {
  useGetCategoriesQuery,
  useGetSubcategoriesQuery,
} from "@/store/categories";
export default function EditProductForm({
  defaultValues,
}: {
  defaultValues: EditProductType;
}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<EditProductType>({
    resolver: zodResolver(editProductSchema),
    defaultValues,
    mode: "onChange",
  });
  const { data: categories } = useGetCategoriesQuery({});
  const { data: subcategories } = useGetSubcategoriesQuery({});
  // import { useRouter } from "next/navigation";
  // import { EditProductType } from "@/schemas/productSchema";

  // const router = useRouter();

  const onSubmit = async (data: EditProductType) => {
    try {
      const res = await fetch(
        `http://localhost:3000/api/products/${data._id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      if (!res.ok) {
        throw new Error("Something went wrong while updating the product");
      }

      const updated = await res.json();
      console.log("✅ Product updated:", updated);

      // optional: redirect after success
      // router.push("/admin/products");
    } catch (error) {
      console.error("❌ Update failed:", error);
      // optional: show error toast
    }
  };

  return (
    <div className="relative flex flex-col justify-center  min-h-screen">
      <div
        className="absolute w-[10rem] h-[18rem] right-4 blur-[10rem]
     bg-gradient-to-t from-sky-500 to-slate-800 top-0"
      />
      <div
        className="absolute w-[10rem] h-[18rem] left-4 blur-[10rem]
     bg-gradient-to-t from-sky-500 to-slate-800 top-0"
      />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-6 p-4 max-w-2xl w-full mx-auto edit-form bg-slate-800/40 rounded-xl  "
      >
        <h2 className="text-center font-extrabold text-3xl">Edit Product</h2>
        <div className="flex items-center gap-3">
          <input
            {...register("title")}
            placeholder="Title"
            className="border p-2  "
          />

          <input
            type="number"
            {...register("price", { valueAsNumber: true })}
            placeholder="Price"
            className="border p-2 flex-2/5"
          />
        </div>

        <div className="flex items-center gap-3">
          {errors.title && (
            <p className="text-red-500 text-sm mt-1">{errors.title.message}</p>
          )}
          {errors.price && (
            <p className="text-red-500 text-sm mt-1">{errors.price.message}</p>
          )}
        </div>
        <div>
          <textarea
            {...register("description")}
            placeholder="Description"
            className="border p-2 w-full"
          />
          {errors.description && (
            <p className="text-red-500 text-sm mt-1">
              {errors.description.message}
            </p>
          )}
        </div>

        <div className="flex items-center gap-3">
          <select {...register("category._id")} className="bg-slate-900">
            {categories?.map((category) => (
              <option key={category._id} value={category._id}>
                {category.name}
              </option>
            ))}
          </select>
          <select {...register("subcategory._id")} className="bg-slate-900">
            {subcategories?.map((subcategory) => (
              <option key={subcategory._id} value={subcategory._id}>
                {subcategory.name}
              </option>
            ))}
          </select>
        </div>
        <div className="flex items-center gap-3">
          {errors.category && (
            <p className="text-red-500 text-sm mt-1">
              {errors.category.message}
            </p>
          )}
          {errors.subcategory && (
            <p className="text-red-500 text-sm mt-1">
              {errors.subcategory.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          className="bg-sky-600 cursor-pointer active:bg-sky-400
           text-white px-6 py-2 rounded w-10/12 mx-auto block"
        >
          Save Changes
        </button>
      </form>
    </div>
  );
}
