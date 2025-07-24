// import Link from "next/link";
// import Nav from "./Nav";

// const Header = () => {
//   return (
//     <header className="relative flex justify-between p-4 items-center bg-gray-900">
//       <div>
//         <Link href="/">
//           <h1>Fashion</h1>
//         </Link>
//       </div>
//       <Nav />
//     </header>
//   );
// };

// export default Header;


import Link from "next/link";
import Nav from "./Nav";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r to-gray-800 from-slate-900 via-slate-700 text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center px-4 py-3">
        {/* Logo */}
        <Link href="/" className="text-2xl font-extrabold tracking-wide">
          Fashion<span className="text-blue-400">Hub</span>
        </Link>

        {/* Navigation */}
        <Nav />
      </div>
    </header>
  );
};

export default Header;
