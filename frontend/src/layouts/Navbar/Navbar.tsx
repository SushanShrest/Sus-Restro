import React from "react";
import Brand from "./Brand";
import Links from "./Links";
import ToggleTheme from "./ToggleTheme";

const Navbar: React.FC<{ children: React.ReactNode }> & {
  Brand: typeof Brand;
  Links: typeof Links;
  ToggleTheme: typeof ToggleTheme;
} = ({ children }) => {
  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-neutral-900 dark:text-white
     shadow-sm">
      <div className="container flex items-center justify-between px-8 py-4">
        {children}
      </div>
    </header>
  );
};

//subcomponents
Navbar.Brand = Brand;
Navbar.Links = Links;
Navbar.ToggleTheme = ToggleTheme;

export default Navbar;
