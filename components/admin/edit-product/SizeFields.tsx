export default function SizeFields({
  register,
  variantIndex,
  sizeFields,
  appendSize,
  removeSize,
}) {
  return (
    <div className="mt-3">
      <h4 className="text-sm font-semibold mb-1">Sizes</h4>
      {sizeFields.map((field, i) => (
        <div key={field.id} className="flex gap-2 mb-2">
          <input
            {...register(`variants.${variantIndex}.sizes.${i}.size`)}
            placeholder="Size"
            className="border p-1"
          />
          <input
            type="number"
            {...register(`variants.${variantIndex}.sizes.${i}.stock`)}
            placeholder="Qty"
            className="border p-1 w-20"
          />
          <button
            type="button"
            onClick={() => removeSize(i)}
            className="text-red-500"
          >
            x
          </button>
        </div>
      ))}
      <button
        type="button"
        onClick={() => appendSize({ size: "", stock: 0 })}
        className="text-blue-500 text-sm"
      >
        + Add Size
      </button>
    </div>
  );
}
