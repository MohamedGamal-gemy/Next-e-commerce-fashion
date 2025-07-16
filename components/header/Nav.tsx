"use client";
import { ShoppingBagIcon } from "lucide-react";
import Link from "next/link";

const Nav = () => {
  return (
    <nav>
      <ul className="flex gap-2">
        <li>
          <Link href="/login" onClick={() => localStorage.removeItem("token")} prefetch>
            Log Out
          </Link>
        </li>

        <li>
          <Link href="/login" > Login</Link>
        </li>

        <li>
          <Link href="/products/men" >Men</Link>
        </li>
        <li>
          <Link href="/admin" >Admin</Link>
        </li>
        <li className="relative">
          <Link href="/cart" >
            <span
              className="absolute -top-1.5 -right-1.5 text-xs text-white
                 bg-red-500 rounded-full w-5 h-5 flex justify-center items-center"
            >
              0
            </span>
            <ShoppingBagIcon />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
