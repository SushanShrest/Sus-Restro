import React from "react";
import { SunFilled, MoonFilled } from "@ant-design/icons";
import { useTheme } from "../../providers/ThemeProvider";

const ToggleTheme: React.FC = () => {
  const { darkMode, toggleTheme } = useTheme();
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

export default ToggleTheme;
