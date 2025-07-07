import { Eye } from "lucide-react";

const IconQuickLook = ({ setProductId, id }) => {
  return (
    <>
      <Eye
        onClick={() => setProductId(id)}
        aria-label="Quick Look"
        className="absolute top-1 right-1 z-20 text-[#1c1c1d] cursor-pointer
      opacity-0 scale-90 translate-y-1
      group-hover:opacity-100 group-hover:scale-100 group-hover:translate-y-0
      transition-all duration-500 ease-in-out
      "
        size={24}
        fill="white"
      />
    </>
  );
};

export default IconQuickLook;
