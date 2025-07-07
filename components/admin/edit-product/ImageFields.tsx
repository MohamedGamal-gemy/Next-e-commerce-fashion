import { X } from "lucide-react";
import Image from "next/image";

export default function ImageFields({ imageFields, appendImage, removeImage }) {
  return (
    <div className="mt-3">
      <h4 className="text-sm font-semibold mb-1">Images</h4>
      <div className="flex gap-1.5">
        {imageFields.map((field, i) => (
          <div key={field.id} className=" mb-2 relative">
            <Image
              height={100}
              width={100}
              src={field.url}
              alt="variant-img"
              className="w-24 h-24 object-cover object-top rounded"
            />

            <button
              type="button"
              onClick={() => removeImage(i)}
              className="text-red-500 absolute top-0 right-0"
            >
              <X />
            </button>
          </div>
        ))}
      </div>
      <button
        type="button"
        onClick={() => appendImage({ url: "" })}
        className="text-blue-500 text-sm"
      >
        + Add Image
      </button>
    </div>
  );
}
