import React from "react";
import PlanetDescriptionBtnExplore from "./PlanetDescriptionBtnExplore";
import PlanetDescriptionCounter from "./PlanetDescriptionCounter";
import PlanetDescriptionBtnAchievement from "./PlanetDescriptionBtnAchievement";
import PlanetDescriptionSummary from "./PlanetDescriptionSummary";
import { motion } from "framer-motion";
import { RiSpaceShipFill } from "react-icons/ri";

const PlanetDescription = ({
  description,
  name,
  handleGeneratePlanet,
  count,
  loading,
  initialAnimation,
}) => {
  return (
    <motion.div
      animate={{ scale: [0.5, 1] }}
      className="flex overflow-hidden flex-col h-[21rem] text-white bg-black rounded-2xl md:h-[22rem] lg:h-80 xl:h-auto"
    >
      <div className="flex justify-between items-center">
        <PlanetDescriptionBtnExplore
          handleGeneratePlanet={handleGeneratePlanet}
        />
        {count < 5 ? (
          <PlanetDescriptionCounter count={count} />
        ) : (
          <PlanetDescriptionBtnAchievement />
        )}
      </div>
      {initialAnimation ? (
        <div className="flex overflow-hidden justify-center items-center w-full h-full">
          <motion.div
            animate={{
              scale: loading ? [1, 1, 1, 1, 1, 0.5] : 1,
              y: loading ? [0, 10, 10, 10, 10, -50] : 0,
              rotate: loading ? [0, 0, 0, -10, 10, 0] : 0,
              opacity: loading ? 0 : 1,
            }}
            transition={{
              opacity: {
                delay: 0.6,
              },
              duration: 0.9,
            }}
            className="text-9xl"
          >
            <RiSpaceShipFill />
          </motion.div>
        </div>
      ) : (
        <PlanetDescriptionSummary name={name} description={description} />
      )}
    </motion.div>
  );
};

export default PlanetDescription;
