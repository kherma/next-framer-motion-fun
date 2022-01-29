import React, { useState, useEffect } from "react";
import Layout from "../components/layout/Layout";
import { FaSun, FaMoon } from "react-icons/fa";

const CheatSheet = () => {
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
    <Layout pageTitle="cheatsheet">
      <div className="overflow-hidden w-full h-full bg-white dark:bg-black rounded-2xl transition-colors duration-300 ease-in-out">
        <nav className="flex sticky top-0 left-0 justify-between items-center p-5 w-full border-b-2">
          <button
            className="text-black dark:text-white transition-colors duration-300 ease-in-out"
            onClick={() => (darkMode ? setLightTheme() : setDarkTheme())}
          >
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>
        </nav>
        <div className="w-full h-96"></div>
      </div>
    </Layout>
  );
};

export default CheatSheet;
