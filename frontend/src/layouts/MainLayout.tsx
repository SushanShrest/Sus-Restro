// import React from "react";
// import Navbar from "./Navbar/Navbar";
// import Footer from "./Footer/Footer";

// const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
//   return (
//     <div>
//       <Navbar>
//         <Navbar.Brand />
//         <Navbar.Links />
//         <Navbar.ToggleTheme />
//       </Navbar>
//       <main>{children}</main>
//       <Footer />
//     </div>
//   );
// };

// export default MainLayout;

// src/layouts/MainLayout.tsx
import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";

const MainLayout: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar>
        <Navbar.Brand />
        <Navbar.Links />
        <Navbar.ToggleTheme />
      </Navbar>
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
