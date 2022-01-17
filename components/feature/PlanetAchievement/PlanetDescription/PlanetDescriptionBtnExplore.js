import React from "react";

const PlanetDescriptionBtnExplore = ({ handleCount }) => {
  return (
    <button
      onClick={handleCount}
      className="p-4 w-1/2 font-black text-center text-white uppercase bg-red-600 transition-all duration-300 xl:hover:tracking-widest"
    >
      <p>explore</p>
    </button>
  );
};

export default PlanetDescriptionBtnExplore;
