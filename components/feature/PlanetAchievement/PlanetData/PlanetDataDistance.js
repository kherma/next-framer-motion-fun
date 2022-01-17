import React from "react";
import { CgArrowsHAlt } from "react-icons/cg";
import { AnimatePresence, motion } from "framer-motion";

const PlanetDataDistance = ({ distanceFromSun }) => {
  return (
    <div className="flex overflow-hidden flex-col justify-center items-center font-black text-white uppercase bg-black">
      <AnimatePresence>
        {distanceFromSun && (
          <motion.div
            initial={{ scale: 8 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            transition={{
              duration: 0.7,
              type: "spring",
            }}
            className="flex relative flex-col items-center ml-3"
          >
            <p>{distanceFromSun} m</p>
            <CgArrowsHAlt className="text-3xl text-red-400" />
            <p>miles</p>
            <div className="absolute top-1/2 right-[120%] w-72 h-72 bg-yellow-400 rounded-full border-[1rem] border-red-500 -translate-y-1/2 xl:right-[135%]" />
            <div className="absolute top-1/2 -right-7 w-4 h-4 bg-white rounded-full -translate-y-1/2 lg:-right-12 xl:-right-9" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default PlanetDataDistance;
