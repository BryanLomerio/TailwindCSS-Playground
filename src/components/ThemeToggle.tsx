import React from "react";
import { useTheme } from "./ThemeContext";

const ThemeToggle: React.FC = () => {
    const { theme, toggleTheme } = useTheme();
    return (
        <button
            onClick={toggleTheme}
            className="px-4 py-2 bg-gray-200 rounded dark:bg-gray-800 text-gray-800 dark:text-gray-200"
        >
            Switch to {theme === "light" ? "Dark" : "Light"} Mode
        </button>
    );
};

export default ThemeToggle;
