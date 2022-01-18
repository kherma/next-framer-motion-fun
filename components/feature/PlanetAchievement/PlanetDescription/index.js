import React from "react";
import PlanetDescriptionBtnExplore from "./PlanetDescriptionBtnExplore";
import PlanetDescriptionCounter from "./PlanetDescriptionCounter";
import PlanetDescriptionBtnAchievement from "./PlanetDescriptionBtnAchievement";
import PlanetDescriptionSummary from "./PlanetDescriptionSummary";
import { motion } from "framer-motion";
import { RiSpaceShipFill } from "react-icons/ri";
import { descriptionPlaceholderAnim } from "../../../../animations/planetPageAnim/planetDescriptionAnim";
import { placeholderEntryAnim } from "../../../../animations/planetPageAnim/planetPlaceholderAnim";

const PlanetDescription = ({
  description,
  name,
  handleGeneratePlanet,
  count,
  loading,
  initialAnimation,
}) => {
  const { animate, transition } = descriptionPlaceholderAnim(loading);
  const { animate: animateEntry } = placeholderEntryAnim;
  return (
    <motion.div
      animate={animateEntry}
      className="flex overflow-hidden flex-col w-full h-[21rem] text-white bg-black rounded-2xl sm:h-[22rem] xl:h-56 2xl:h-full"
    >
      <div className="flex justify-between items-center">
        <PlanetDescriptionBtnExplore
          handleGeneratePlanet={handleGeneratePlanet}
          loading={loading}
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
            animate={animate}
            transition={transition}
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
