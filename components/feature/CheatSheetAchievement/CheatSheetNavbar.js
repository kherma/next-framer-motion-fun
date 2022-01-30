import { useState, useEffect } from "react";
import CheatSheetCelestial from "./CheatSheetCelestial";
import CheatSheetBtnTheme from "./CheatSheetBtnTheme";

const CheatSheetNavbar = () => {
  const [darkMode, setDarkMode] = useState(false);

  const setDarkTheme = () => {
    localStorage.setItem("cheatSheetTheme", "dark");
    document.documentElement.classList.add("dark");
    setDarkMode(true);
  };

  const setLightTheme = () => {
    localStorage.setItem("cheatSheetTheme", "light");
    document.documentElement.classList.remove("dark");
    setDarkMode(false);
  };

  useEffect(() => {
    const getThemeFromLocalStorage = localStorage.getItem("cheatSheetTheme");
    !getThemeFromLocalStorage || getThemeFromLocalStorage === "light"
      ? setLightTheme()
      : setDarkTheme();
  }, []);
  return (
    <nav className="flex overflow-hidden sticky top-0 left-0 justify-between items-center p-5 w-full border-b border-b-black dark:border-b-white transition-colors duration-300 ease-in-out sm:py-8 sm:px-14">
      <div className="flex justify-center items-center">
        <CheatSheetCelestial darkMode={darkMode} />
        <h2 className="text-xl font-black text-black dark:text-white uppercase transition-colors duration-300 ease-in-out sm:text-3xl">
          git cheatsheet
        </h2>
      </div>
      <CheatSheetBtnTheme
        darkMode={darkMode}
        setLightTheme={setLightTheme}
        setDarkTheme={setDarkTheme}
      />
    </nav>
  );
};

export default CheatSheetNavbar;
