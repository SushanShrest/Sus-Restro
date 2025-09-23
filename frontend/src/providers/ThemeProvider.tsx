import React, { useEffect, useState, createContext, useContext } from "react";

type ThemeContextType = {
  darkMode: boolean;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  // const [darkMode, setDarkMode] = useState<boolean>(() => {
  //   const savedTheme = localStorage.getItem("theme");
  //   return savedTheme ? savedTheme === "dark" : false;
  // });

  // useEffect(() => {
  //   document.documentElement.classList.toggle("dark", darkMode);
  //   localStorage.setItem("theme", darkMode ? "dark" : "light");
  // }, [darkMode]);

  const [darkMode, setDarkMode] = useState<boolean>(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme ? savedTheme === "dark" : false;
  });

  // Set immediately (avoids flicker)
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const toggleTheme = () => setDarkMode((prev) => !prev);

  return (
    <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Hook for easy access
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useTheme must be used within ThemeProvider");
  return context;
};
