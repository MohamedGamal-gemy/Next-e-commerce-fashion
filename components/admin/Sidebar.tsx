"use client";
import {
  BarChart3,
  PaintRoller,
  PersonStanding,
  Shirt,
  User,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  const pathname = usePathname();
  const dataSide = [
    {
      href: "/admin/products",
      icon: Shirt,
      label: "Products",
    },
    {
      href: "/admin/users",
      icon: User,
      label: "Users",
    },
    {
      href: "/admin/categories",
      icon: PersonStanding,
      label: "Categories",
    },
    {
      href: "/admin/subcategories",
      icon: PaintRoller,
      label: "Subcategories",
    },
  ];
  
  return (
    <aside className="w-[270px] px-8 py-8 border-r border-white/10 bg-white/5 drop-shadow-2xl text-white shadow-lg">
      {/* head */}
      <div className="flex gap-2 items-center border-y border-white/10 py-8 ">
        <div className="bg-gradient-to-b p-1 rounded-md from-blue-600 to-violet-600">
          <BarChart3 />
        </div>
        <h2 className="font-bold text-2xl">Admin Panel</h2>
      </div>
      {/* head */}
      <ul className="py-4">
        {dataSide?.map((data) => (
          <li key={data.label} className=" ">
            <Link
              href={data.href}
              className={`flex items-center gap-3 p-3  
            transition-colors duration-200 rounded-md ${
              data.href == pathname ? "bg-blue-600/20" : ""
            }`}
            >
              <data.icon className="w-5 h-5 text-sky-400" />
              <span className="font-medium">{data.label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
