import { memo } from "react";

const HeadTable = () => {
  return (
    <thead className=" text-gray-300 border-b text-left border-white/20">
      <tr>
        <th className="py-6 px-4  ">Product</th>
        <th className="py-6 px-4  ">Category</th>
        <th className="py-6 px-4  ">Price</th>
        <th className="py-6 px-4  ">Rating</th>
        {/* <th className="py-6 px-4  ">Variants</th> */}
        <th className="py-6 px-4  ">Action</th>
        <th className="py-6 px-4  ">Date</th>
      </tr>
    </thead>
  );
};

export default memo(HeadTable);
