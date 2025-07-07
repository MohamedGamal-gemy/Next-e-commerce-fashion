import { ShoppingBagIcon } from "lucide-react";
import Link from "next/link";

const Header = () => {
  return (
    <header className="relative flex justify-between p-4 items-center bg-gray-900">
      <div>
        <Link href="/">
          <h1>Fashion</h1>
        </Link>
      </div>
      <nav>
        <ul className="flex gap-2">
          <li>
            <Link href="/products/men">Men</Link>
          </li>
          <li>
            <Link href="/admin">Admin</Link>
          </li>
          <li className="relative">
            <Link href="/cart">
              <span
                className="absolute -top-1.5 -right-1.5 text-xs text-white
                 bg-red-500 rounded-full w-5 h-5 flex justify-center items-center"
              >
                0
              </span>
              <ShoppingBagIcon />
              {/* </div> */}
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
