import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./providers/ThemeProvider";

import MainLayout from "./layouts/MainLayout";
// import Home from "./pages/Home/Home";
import Hero from "./pages/Home/v2/Hero";
import Menu from "./pages/Menu/v3/Menu";
import AboutUs from "./pages/AboutUs/AboutUs";
import AdminPanel from "./pages/Admin/v2/Admin";

const App = () => {
  return (
    <ThemeProvider>
      <BrowserRouter>
        {/* <MainLayout> */}
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route element={<MainLayout />}>
            <Route path="/" element={<Hero />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/admin" element={<AdminPanel />} />
          </Route>
        </Routes>
        {/* </MainLayout> */}
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;

// import React, { useEffect, useState } from "react";
// import Navbar from "./components/Navbar";
// import Home from "./components/Home";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Menu from "./components/Menu";
// import AboutUs from "./components/AboutUs";
// import Footer from "./components/Footer";
// import AdminPanel from "./components/AdminPanel";

// const App = () => {
//   const [darkMode, setDarkMode] = useState<boolean>(() => {
//     const savedTheme = localStorage.getItem("theme");
//     if (savedTheme) return savedTheme === "dark";
//     return false; // default light
//   });

//   useEffect(() => {
//     if (darkMode) {
//       document.documentElement.classList.add("dark");
//     } else {
//       document.documentElement.classList.remove("dark");
//     }
//     localStorage.setItem("theme", darkMode ? "dark" : "light");
//   }, [darkMode]);

//   // load theme from storage
//   // const [darkMode, setDarkMode] = useState(() => {
//   //   const savedTheme = localStorage.getItem("theme");
//   //   return savedTheme ? savedTheme === "dark" : true;
//   // });
//   // useEffect(() => {
//   //   if (darkMode) {
//   //     document.documentElement.classList.add("dark");
//   //     localStorage.setItem("theme", "dark");
//   //   } else {
//   //     document.documentElement.classList.remove("dark");
//   //     localStorage.setItem("theme", "light");
//   //   }
//   // }, [darkMode]);

//   return (
//     <BrowserRouter>
//       <div>
//         <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/menu" element={<Menu />} />
//           <Route path="/aboutus" element={<AboutUs />} />
//           <Route path="/admin" element={<AdminPanel />} />
//         </Routes>
//       </div>
//       <Footer />
//     </BrowserRouter>
//   );
// };

// export default App;
