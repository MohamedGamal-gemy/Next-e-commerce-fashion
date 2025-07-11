import BodyTableCategory from "@/components/admin/categories/BodyTableCategory";
import Model from "@/components/admin/categories/Model";
import EffectLightBackground from "@/components/admin/showProductsTable/EffectLightBackground";
import { FileWarning, Info, X } from "lucide-react";

const Categories = () => {
  return (
    <div className="relative">
      <EffectLightBackground />
      <table
        className="lg:max-w-4xl md:max-w-3xl sm:max-w-2xl max-w-xl mx-auto w-full
       bg-slate-600/20 mt-6 rounded-md relative"
      >
        <thead>
          <tr className="bg-slate-400">
            <th className="py-2">Name</th>
            <th>CreatedAt</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody className="text-center">
          <BodyTableCategory />
        </tbody>
      </table>
    </div>
  );
};

export default Categories;
