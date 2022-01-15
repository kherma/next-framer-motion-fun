import React from "react";
import PlanetView from "./PlanetView";
import PlanetData from "./PlanetData";
import PlanetAtmosphere from "./PlanetAtmosphere";
import PlanetDescription from "./PlanetDescription";
import { generatePlanet } from "../../../seed";

const PlanetAchievement = () => {
  generatePlanet();
  return (
    <div className="grid grid-cols-1 auto-rows-fr gap-4 w-full h-full md:grid-cols-2 md:gap-8">
      <PlanetView />
      <PlanetData />
      <PlanetAtmosphere />
      <PlanetDescription />
    </div>
  );
};

export default PlanetAchievement;
