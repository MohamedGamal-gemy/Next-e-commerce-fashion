// app/admin/layout.tsx
import React from "react";
import Link from "next/link";
import {
  BarChart3,
  ChartBar,
  ChartBarBigIcon,
  ChartBarStacked,
  PaintRoller,
  PersonStanding,
  Shirt,
  User,
} from "lucide-react";
import Sidebar from "@/components/admin/SideBar";

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  //  #01030e
  // via-blue-800/25
  // via-[#1f1f42]
  return (
    <div className="bg-gradient-to-br from-[#111216] via-[#333369]/50 to-[#111116] ">
      <div className="flex min-h-screen  ">
        {/* Sidebar */}
        <Sidebar />
        {/* Main Content */}
        <main className="flex-1 p-6 ">{children}</main>
      </div>
    </div>
  );
};

export default AdminLayout;
