import { useState } from "react";

const DarkModeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle("dark");
  };

  return (
    <button
      className="fixed top-14 right-4 z-50 p-2 rounded-full bg-gray-200 dark:bg-gray-700"
      onClick={toggleDarkMode}
    >
      {isDarkMode ? "Light" : "Dark"} Mode
    </button>
  );
};

export default DarkModeToggle;
