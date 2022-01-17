import React, { useState } from "react";
import PlanetDescriptionBtnExplore from "./PlanetDescriptionBtnExplore";
import PlanetDescriptionCounter from "./PlanetDescriptionCounter";
import PlanetDescriptionBtnAchievement from "./PlanetDescriptionBtnAchievement";
import PlanetDescriptionSummary from "./PlanetDescriptionSummary";

const PlanetDescription = ({ description, name, handleGeneratePlanet }) => {
  const [count, setCount] = useState(0);

  const handleCount = () => {
    if (count <= 5) {
      setCount((count += 1));
    }
    handleGeneratePlanet();
    return;
  };

  return (
    <div className="flex overflow-hidden flex-col h-[21rem] rounded-2xl md:h-[22rem] lg:h-80 xl:h-auto">
      <div className="flex justify-between items-center">
        <PlanetDescriptionBtnExplore handleCount={handleCount} />
        {count < 5 ? (
          <PlanetDescriptionCounter count={count} />
        ) : (
          <PlanetDescriptionBtnAchievement />
        )}
      </div>
      <PlanetDescriptionSummary name={name} description={description} />
    </div>
  );
};

export default PlanetDescription;
