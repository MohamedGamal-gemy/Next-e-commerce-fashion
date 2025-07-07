import { UseFormRegister, Control, useFieldArray } from "react-hook-form";
import { EditProductType } from "@/schemas/productSchema";
import SizeFields from "./SizeFields";
import ImageFields from "./ImageFields";
import { Delete } from "lucide-react";

export default function VariantField({
  variantIndex,
  control,
  register,
  remove,
}: {
  variantIndex: number;
  control: Control<EditProductType>;
  register: UseFormRegister<EditProductType>;
  remove: () => void;
}) {
  const {
    fields: sizeFields,
    append: appendSize,
    remove: removeSize,
  } = useFieldArray({
    control,
    name: `variants.${variantIndex}.sizes`,
  });

  const {
    fields: imageFields,
    append: appendImage,
    remove: removeImage,
  } = useFieldArray({
    control,
    name: `variants.${variantIndex}.images`,
  });

  return (
    <>
      <button type="button" onClick={remove} className="text-red-600">
        <Delete />
      </button>
      <div className="border p-4 rounded-md shadow-sm">
        <div className="flex gap-4 mb-2">
          <input
            {...register(`variants.${variantIndex}.color.name`)}
            placeholder="Color Name"
            className="border p-2"
          />
          <input
            type="color"
            {...register(`variants.${variantIndex}.color.value`)}
            className="w-12"
          />
        </div>

        <ImageFields
          imageFields={imageFields}
          appendImage={appendImage}
          removeImage={removeImage}
        />

        <SizeFields
          variantIndex={variantIndex}
          sizeFields={sizeFields}
          appendSize={appendSize}
          removeSize={removeSize}
          register={register}
        />
      </div>
    </>
  );
}
