import React from "react";

const PlanetDescriptionCounter = ({ count }) => {
  return (
    <div className="flex relative justify-center items-center w-1/2 h-full rounded-tr-2xl border border-black">
      <p className="font-black">{count} &#47; 5</p>
      <div className="absolute top-0 left-0 w-4 h-4 bg-black" />
      <div className="absolute right-0 bottom-0 w-4 h-4 bg-black" />
    </div>
  );
};

export default PlanetDescriptionCounter;
