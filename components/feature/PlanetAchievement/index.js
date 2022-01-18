import React, { useState } from "react";
import PlanetView from "./PlanetView";
import PlanetData from "./PlanetData";
import PlanetAtmosphere from "./PlanetAtmosphere";
import PlanetDescription from "./PlanetDescription";
import LoadingPlaceholder from "../../common/LoadingPlaceholder";
import { generatePlanet } from "../../../seed";

const PlanetAchievement = () => {
  const [initialAnimation, setInitialAnimatoin] = useState(true);
  const [loading, setLoading] = useState(false);
  const [count, setCount] = useState(0);

  const [planet, setPlanet] = useState({
    data: {},
    view: {},
  });

  const handleGeneratePlanet = () => {
    if (loading) return;
    setLoading(true);
    setPlanet({
      data: {},
      view: {},
    });
    setTimeout(() => {
      if (count <= 5) {
        setCount((count += 1));
      }
      initialAnimation && setInitialAnimatoin(false);
      setPlanet(generatePlanet());
      setLoading(false);
    }, 1200);
  };

  return (
    <div className="flex flex-col gap-8 w-full h-full">
      <div className="flex flex-col gap-8 justify-center items-center w-full h-full sm:flex-row">
        <PlanetDescription
          name={planet.data.name}
          description={planet.data.description}
          handleGeneratePlanet={handleGeneratePlanet}
          count={count}
          loading={loading}
          initialAnimation={initialAnimation}
        />
        {initialAnimation ? (
          <LoadingPlaceholder loading={loading} variant="view" />
        ) : (
          <PlanetView
            container={planet.view.container}
            planet={planet.view.planet}
          />
        )}
      </div>
      <div className="flex flex-col gap-8 justify-center items-center w-full h-full sm:flex-row">
        {initialAnimation ? (
          <LoadingPlaceholder loading={loading} variant="data" />
        ) : (
          <PlanetData
            size={planet.data.size}
            distanceFromSun={planet.data.distanceFromSun}
            temperature={planet.data.temperature}
            population={planet.data.population}
          />
        )}
        {initialAnimation ? (
          <LoadingPlaceholder loading={loading} variant="atmosphere" />
        ) : (
          <PlanetAtmosphere atmosphere={planet.data.atmosphere} />
        )}
      </div>
    </div>
  );
};

export default PlanetAchievement;
