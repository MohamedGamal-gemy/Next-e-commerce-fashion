import Link from "next/link";
import Nav from "./Nav";

const Header = () => {
  return (
    <header className="relative flex justify-between p-4 items-center bg-gray-900">
      <div>
        <Link href="/">
          <h1>Fashion</h1>
        </Link>
      </div>
      <Nav />
    </header>
  );
};

export default Header;
