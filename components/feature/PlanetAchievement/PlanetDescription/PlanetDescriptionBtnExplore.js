import React from "react";
import { motion } from "framer-motion";

const PlanetDescriptionBtnExplore = ({ handleGeneratePlanet, loading }) => {
  return (
    <button
      onClick={handleGeneratePlanet}
      className="flex justify-center items-center p-4 w-1/2 h-full bg-red-600 transition-all duration-300 xl:hover:tracking-widest"
    >
      {!loading && <p className="font-black text-white uppercase">explore</p>}
      {loading && (
        <div className="flex gap-4 justify-between items-center m-2 h-full">
          <motion.div
            animate={{ scaleY: [1, 2, 1] }}
            transition={{
              duration: 0.4,
            }}
            className="w-2 h-2 bg-white "
          />
          <motion.div
            animate={{ scaleY: [1, 2, 1] }}
            transition={{
              duration: 0.4,
              delay: 0.4,
            }}
            className="w-2 h-2 bg-white"
          />
          <motion.div
            animate={{ scaleY: [1, 2, 1] }}
            transition={{
              duration: 0.4,
              delay: 0.8,
            }}
            className="w-2 h-2 bg-white"
          />
        </div>
      )}
    </button>
  );
};

export default PlanetDescriptionBtnExplore;
