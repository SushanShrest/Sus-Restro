import React from "react";
import { ShopTwoTone, SunFilled, MoonFilled } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { useTheme } from "../../providers/ThemeProvider"; // ✅ no prop drilling

// Parent wrapper
const Navbar: React.FC<{ children: React.ReactNode }> & {
  Brand: typeof NavbarBrand;
  Links: typeof NavbarLinks;
  ToggleTheme: typeof NavbarToggleTheme;
} = ({ children }) => {
  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-neutral-900 dark:text-white shadow-sm">
      <div className="container flex items-center justify-between px-8 py-4">
        {children}
      </div>
    </header>
  );
};

// Subcomponents
const NavbarBrand: React.FC = () => (
  <div className="flex items-center gap-2">
    <div className="text-3xl">
      <ShopTwoTone twoToneColor="#f48d20ff" />
    </div>
    <Link to="/">
      <h1 className="text-xl font-bold">Suspicious Restro</h1>
    </Link>
  </div>
);

const NavbarLinks: React.FC = () => (
  <nav className="hidden md:flex gap-8 font-medium">
    <Link
      to="/"
      className="hover:text-orange-400 text-neutral-400 dark:text-neutral-300"
    >
      Home
    </Link>
    <Link
      to="/menu"
      className="hover:text-orange-400 text-neutral-400 dark:text-neutral-300"
    >
      Menu
    </Link>
    <Link
      to="/aboutus"
      className="hover:text-orange-400 text-neutral-400 dark:text-neutral-300"
    >
      About Us
    </Link>
    <Link
      to="/admin"
      className="hover:text-orange-400 text-neutral-400 dark:text-neutral-300"
    >
      Admin Panel
    </Link>
  </nav>
);

const NavbarToggleTheme: React.FC = () => {
  const { darkMode, toggleTheme } = useTheme(); // ✅ use context
  return (
    <button
      onClick={toggleTheme}
      className="ml-6 p-2 rounded-full bg-gray-200 dark:bg-neutral-600"
    >
      {darkMode ? (
        <SunFilled style={{ color: "orange", fontSize: "25px" }} />
      ) : (
        <MoonFilled style={{ color: "gray", fontSize: "25px" }} />
      )}
    </button>
  );
};

// Attach subcomponents
Navbar.Brand = NavbarBrand;
Navbar.Links = NavbarLinks;
Navbar.ToggleTheme = NavbarToggleTheme;

export default Navbar;

// import React from "react";
// import { ShopTwoTone, SunFilled, MoonFilled } from "@ant-design/icons";
// import { Link } from "react-router-dom";

// // 1. Define props type
// interface NavbarProps {
//   darkMode: boolean;
//   setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
// }

// // 2. Use it in the component
// const Navbar: React.FC<NavbarProps> = ({ darkMode, setDarkMode }) => {
//   return (
//     <header className="sticky top-0 z-50 bg-white dark:bg-neutral-900 dark:text-white shadow-sm">
//       {/* <header className="bg-white shadow-sm"> */}
//       <div className="container flex items-center justify-between px-8 py-4">
//         {/* Logo Section */}
//         <div className="flex items-center gap-2">
//           <div className="text-3xl">
//             <ShopTwoTone twoToneColor="#f48d20ff" />
//           </div>
//           <Link to="/">
//             <h1 className="text-xl font-bold">Suspicious Restro</h1>
//           </Link>
//         </div>

//         {/* Links Section */}
//         <nav className="hidden md:flex gap-8 font-medium">
//           <Link
//             to="/"
//             className="hover:text-orange-400 text-neutral-400 dark:text-neutral-300"
//           >
//             Home
//           </Link>
//           <Link
//             to="/menu"
//             className="hover:text-orange-400 text-neutral-400 dark:text-neutral-300"
//           >
//             Menu
//           </Link>
//           <Link
//             to="/aboutus"
//             className="hover:text-orange-400 text-neutral-400 dark:text-neutral-300"
//           >
//             About Us
//           </Link>
//           <Link
//             to="/admin"
//             className="hover:text-orange-400 text-neutral-400 dark:text-neutral-300"
//           >
//             Admin panel
//           </Link>
//         </nav>

//         {/* Button Section */}
//         <button
//           onClick={() => {
//             setDarkMode(!darkMode);
//           }}
//           className="ml-6 p-2 rounded-full bg-gray-200 dark:bg-neutral-600"
//         >
//           {darkMode ? (
//             <SunFilled style={{ color: "orange", fontSize: "25px" }} />
//           ) : (
//             <MoonFilled style={{ color: "gray", fontSize: "25px" }} />
//           )}
//         </button>
//       </div>
//     </header>
//   );
// };

// export default Navbar;
