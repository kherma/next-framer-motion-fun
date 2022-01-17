import React from "react";

const PlanetDescriptionCounter = ({ count }) => {
  return (
    <div className="flex relative justify-center items-center w-1/2 h-full bg-black rounded-tr-2xl">
      <p className="text-xl font-black text-white">{count} &#47; 5</p>
    </div>
  );
};

export default PlanetDescriptionCounter;
