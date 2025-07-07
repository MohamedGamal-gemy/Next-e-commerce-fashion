import { memo } from "react";

const HeadTable = () => {
  return (
    <thead className="bg-[#4969ad] text-white">
      <tr>
        <th className="py-2 ">Img</th>
        <th>Title</th>
        <th>Description</th>
        <th>Category</th>
        <th>Subcategory</th>
        <th>Price</th>
        <th>Rating</th>
        <th>Reviews</th>
        <th>Variants</th>
        <th>Action</th>
        <th>Date</th>
      </tr>
    </thead>
  );
};

export default memo(HeadTable);
