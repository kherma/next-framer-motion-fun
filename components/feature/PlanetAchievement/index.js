import React, { useState } from "react";
import PlanetView from "./PlanetView";
import PlanetData from "./PlanetData";
import PlanetAtmosphere from "./PlanetAtmosphere";
import PlanetDescription from "./PlanetDescription";
import LoadingPlaceholder from "../../common/LoadingPlaceholder";
import { generatePlanet } from "../../../seed";

const PlanetAchievement = () => {
  const [planet, setPlanet] = useState({
    data: {},
    view: {},
  });

  const handleGeneratePlanet = () => {
    setPlanet(generatePlanet());
  };

  return (
    <div className="grid grid-cols-1 auto-rows-fr gap-8 w-full h-full md:grid-cols-2 md:gap-8">
      <PlanetDescription
        name={planet.data.name}
        description={planet.data.description}
        handleGeneratePlanet={handleGeneratePlanet}
      />
      {planet.view.planet && planet.view.container ? (
        <PlanetView
          container={planet.view.container}
          planet={planet.view.planet}
        />
      ) : (
        <LoadingPlaceholder variant="planet" />
      )}
      {planet.data.size &&
      planet.data.distanceFromSun &&
      planet.data.temperature !== undefined &&
      planet.data.population !== undefined ? (
        <PlanetData
          size={planet.data.size}
          distanceFromSun={planet.data.distanceFromSun}
          temperature={planet.data.temperature}
          population={planet.data.population}
        />
      ) : (
        <LoadingPlaceholder variant="settings" />
      )}
      {planet.data.atmosphere ? (
        <PlanetAtmosphere atmosphere={planet.data.atmosphere} />
      ) : (
        <LoadingPlaceholder variant="layers" />
      )}
    </div>
  );
};

export default PlanetAchievement;
