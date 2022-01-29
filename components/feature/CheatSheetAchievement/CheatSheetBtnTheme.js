import React from "react";
import { FaSun, FaMoon } from "react-icons/fa";

const CheatSheetBtnTheme = ({ darkMode, setLightTheme, setDarkTheme }) => {
  return (
    <button
      className="text-3xl text-black dark:text-white transition-colors duration-300 ease-in-out sm:text-4xl"
      onClick={() => (darkMode ? setLightTheme() : setDarkTheme())}
    >
      {darkMode ? <FaSun /> : <FaMoon />}
    </button>
  );
};

export default CheatSheetBtnTheme;
