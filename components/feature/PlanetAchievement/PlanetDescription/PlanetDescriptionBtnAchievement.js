import React from "react";

const PlanetDescriptionBtnAchievement = () => {
  return (
    <button className="relative p-4 w-1/2 h-full font-black text-center text-white uppercase bg-yellow-400 transition-colors duration-300 xl:text-black xl:hover:text-white xl:bg-white xl:hover:bg-yellow-400">
      achievement
      <div className="absolute top-0 left-0 w-4 h-4 bg-black" />
      <div className="absolute right-0 bottom-0 w-4 h-4 bg-black" />
    </button>
  );
};

export default PlanetDescriptionBtnAchievement;
