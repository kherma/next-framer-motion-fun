import React from "react";

const PlanetDescriptionBtnExplore = ({ handleCount }) => {
  return (
    <button
      onClick={handleCount}
      className="p-4 w-1/2 font-black hover:tracking-widest text-center text-white uppercase bg-black transition-all duration-300"
    >
      <div>explore</div>
    </button>
  );
};

export default PlanetDescriptionBtnExplore;
