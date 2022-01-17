import React from "react";
import { motion } from "framer-motion";
import { btnExploreAnim } from "../../../../animations/planetPageAnim/planetDescriptionAnim";
import { v4 as uuidv4 } from "uuid";

const PlanetDescriptionBtnExplore = ({ handleGeneratePlanet, loading }) => {
  return (
    <button
      onClick={handleGeneratePlanet}
      className="flex justify-center items-center p-4 w-1/2 h-full bg-red-600 transition-all duration-300 xl:hover:tracking-widest"
    >
      {!loading && <p className="font-black text-white uppercase">explore</p>}
      {loading && (
        <ul className="flex gap-4 justify-between items-center m-2 h-full">
          {btnExploreAnim.map(({ animate, transition }) => (
            <motion.li
              key={uuidv4()}
              animate={animate}
              transition={transition}
              className="w-2 h-2 bg-white"
            />
          ))}
        </ul>
      )}
    </button>
  );
};

export default PlanetDescriptionBtnExplore;
