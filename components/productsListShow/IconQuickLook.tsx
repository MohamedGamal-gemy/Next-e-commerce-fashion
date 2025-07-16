import { Eye } from "lucide-react";

const IconQuickLook = ({ setProductId, id }) => {
  return (
    <button
      onClick={() => setProductId(id)}
      className="absolute top-3 right-3 z-20 w-10 h-10
       bg-slate-900/80 backdrop-blur-sm border border-slate-700/50 rounded-full flex items-center justify-center cursor-pointer opacity-0 scale-90 translate-y-1 group-hover:opacity-100 group-hover:scale-100 group-hover:translate-y-0 transition-all duration-300 ease-out hover:bg-slate-800/90 hover:border-slate-600/70 hover:scale-110"
    >
      <Eye size={18} className="text-white drop-shadow-sm" />
    </button>
  );
};

export default IconQuickLook;
