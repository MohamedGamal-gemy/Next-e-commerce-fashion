// app/admin/layout.tsx
import React from "react";
import Link from "next/link";
import { Shirt, User } from "lucide-react";

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-[200px] bg-slate-950 text-white shadow-lg">
        <ul className="py-4">
          <li>
            <Link
              href="/admin/products"
              className="flex items-center gap-3 p-3 hover:bg-slate-600 transition-colors duration-200 rounded-md mx-2"
            >
              <Shirt className="w-5 h-5 text-sky-400" />
              <span className="font-medium">Products</span>
            </Link>
          </li>
          <li>
            <Link
              href="/admin/users"
              className="flex items-center gap-3 p-3 hover:bg-slate-600 transition-colors duration-200 rounded-md mx-2"
            >
              <User className="w-5 h-5 text-sky-400" />
              <span className="font-medium">Users</span>
            </Link>
          </li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 ">{children}</main>
    </div>
  );
};

export default AdminLayout;
