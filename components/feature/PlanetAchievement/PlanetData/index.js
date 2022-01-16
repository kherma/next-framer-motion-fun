import React from "react";
import PlanetDataSize from "./PlanetDataSize";
import PlanetDataDistance from "./PlanetDataDistance";
import PlanetDataTemperature from "./PlanetDataTemperature";
import PlanetDataPopulation from "./PlanetDataPopulation";

const PlanetData = ({ size, distanceFromSun, temperature, population }) => {
  return (
    <div className="flex overflow-hidden justify-center items-center w-full h-full rounded-2xl">
      {size &&
      distanceFromSun &&
      temperature !== undefined &&
      population !== undefined ? (
        <div className="grid grid-cols-2 auto-rows-fr gap-2 w-full h-full sm:gap-4">
          <PlanetDataSize size={size} />
          <PlanetDataDistance distanceFromSun={distanceFromSun} />
          <PlanetDataTemperature temperature={temperature} />
          <PlanetDataPopulation population={population} />
        </div>
      ) : (
        <p className="text-7xl font-bold">?</p>
      )}
    </div>
  );
};

export default PlanetData;
