// "use client";
// import { useAuth } from "@/context/AuthContext";
// import { ShoppingBagIcon } from "lucide-react";
// import Link from "next/link";
// import { useRouter } from "next/navigation";

// const Nav = () => {
//   const router = useRouter();
//   const { user, loading, logout } = useAuth();

//   const handleLogout = async () => {
//     await logout();
//     router.push("/login");
//   };

//   if (loading) return <p>Loading...</p>;

//   return (
//     <nav>
//       <ul className="flex gap-4">
//         {user ? (
//           <>
//             <li>Welcome, {user.username}</li>
//             <li>
//               <button
//                 onClick={handleLogout}
//                 className="text-red-500 font-semibold"
//               >
//                 Logout
//               </button>
//             </li>
//           </>
//         ) : (
//           <>
//             <li>
//               <Link href="/login">Login</Link>
//             </li>
//             <li>
//               <Link href="/register">Register</Link>
//             </li>
//           </>
//         )}
//         <li>
//           <Link href="/products/men">Men</Link>
//         </li>
//         <li>
//           <Link href="/admin">Admin</Link>
//         </li>
//         <li className="relative">
//           <Link href="/cart">
//             <span
//               className="absolute -top-1.5 -right-1.5 text-xs text-white
//                  bg-red-500 rounded-full w-5 h-5 flex justify-center items-center"
//             >
//               0
//             </span>
//             <ShoppingBagIcon />
//           </Link>
//         </li>
//       </ul>
//     </nav>
//   );
// };

// export default Nav;

"use client";
import { useAuth } from "@/context/AuthContext";
import { ShoppingBagIcon, UserIcon, LogOutIcon } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Nav = () => {
  const router = useRouter();
  const { user, loading, logout } = useAuth();

  const handleLogout = async () => {
    await logout();
    router.push("/login");
  };

  if (loading) return <p className="text-gray-300">Loading...</p>;

  return (
    <nav>
      <ul className="flex items-center gap-6 text-sm font-medium">
        {/* Links */}
        <li>
          <Link href="/products/men" className="hover:text-blue-400 transition">
            Men
          </Link>
        </li>
        <li>
          <Link href="/admin" className="hover:text-blue-400 transition">
            Admin
          </Link>
        </li>

        {/* Cart */}
        <li className="relative">
          <Link href="/cart" className="hover:text-blue-400 transition">
            <ShoppingBagIcon size={22} />
            <span className="absolute -top-2 -right-2 text-xs text-white bg-red-500 rounded-full w-5 h-5 flex justify-center items-center">
              0
            </span>
          </Link>
        </li>

        {/* Auth */}
        {user ? (
          <>
            <li className="flex items-center gap-2">
              <UserIcon size={18} />
              <span className="hidden sm:inline">Hi, {user.username}</span>
            </li>
            <li>
              <button
                onClick={handleLogout}
                className="flex items-center gap-1 text-red-400 hover:text-red-500 transition"
              >
                <LogOutIcon size={18} /> Logout
              </button>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link
                href="/login"
                className="hover:text-blue-400 transition font-semibold"
              >
                Login
              </Link>
            </li>
            <li>
              <Link
                href="/register"
                className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-md transition font-semibold"
              >
                Sign Up
              </Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Nav;
