import Image from "next/image";

const Right = ({ title, price, sizes, description, imagesOfVariants }) => {
  return (
    <div className="space-y-3 flex-1 ">
      <h2 className="font-semibold text-2xl">{title}</h2>
      <div>
        <h2 className="font-semibold">Price</h2>
        <h2 className="text-sky-400 text-2xl font-bold">{price} EGP</h2>
      </div>
      <div className="flex  gap-4">
        <select className="bg-slate-800 p-3 rounded-md outline-0 w-1/2">
          <option value={""}>Select Size</option>
          {sizes?.map((size) => (
            <option key={size._id} value={size.size}>
              {size.size}
            </option>
          ))}
        </select>
        {/*  */}
        <select className="bg-slate-800 p-3 rounded-md outline-0 w-1/2 ">
          <option value={""}>Select Quantity</option>
          {Array.from({ length: 10 }).map((_, i) => (
            <option key={i} value={i + 1}>
              {i + 1}
            </option>
          ))}
        </select>
      </div>
      <div className="flex gap-2.5">
        {imagesOfVariants?.map((image) => (
          <Image
            key={image}
            src={image}
            width={40}
            height={40}
            alt=""
            className=""
          />
        ))}
      </div>
      <div className="mt-4">
        <h2 className="font-semibold">Description</h2>
        <p>{description}</p>
      </div>
      <div className="mt-4">
        <button className="bg-sky-500 p-3 rounded-md w-full">
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default Right;
