import React, { useState } from "react";

const PlanetDescription = ({ description, name, handleGeneratePlanet }) => {
  const [count, setCount] = useState(0);

  const handleCounte = () => {
    if (count <= 5) {
      setCount((count += 1));
    }
    handleGeneratePlanet();
    return;
  };

  return (
    <div className="flex overflow-hidden flex-col h-[21rem] rounded-2xl md:h-[22rem] lg:h-auto">
      <div className="flex justify-between items-center">
        <button
          onClick={handleCounte}
          className="p-4 w-1/2 font-black hover:tracking-widest text-center text-white uppercase bg-black transition-all duration-300"
        >
          explore
        </button>

        {count < 5 ? (
          <div className="flex relative justify-center items-center w-1/2 h-full rounded-tr-2xl border border-black">
            <p className="font-black">{count} &#47; 5</p>
            <div className="absolute top-0 left-0 w-4 h-4 bg-black" />
            <div className="absolute right-0 bottom-0 w-4 h-4 bg-black" />
          </div>
        ) : (
          <button className="p-4 w-1/2 font-black text-center text-white uppercase bg-yellow-400 transition-colors duration-300 xl:text-black xl:hover:text-white xl:bg-white xl:hover:bg-yellow-400">
            achievement
          </button>
        )}
      </div>
      <div className="flex justify-center items-center w-full h-full">
        {description ? (
          <div className="flex flex-col gap-2 justify-center items-end p-2 w-full h-full">
            <h3 className="text-xl font-black text-right">{name}</h3>
            <p className="text-justify">{description}</p>
          </div>
        ) : (
          <p className="text-7xl font-bold">?</p>
        )}
      </div>
    </div>
  );
};

export default PlanetDescription;
