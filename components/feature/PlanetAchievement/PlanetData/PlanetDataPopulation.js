import React from "react";
import { IoMan } from "react-icons/io5";
import { AnimatePresence, motion } from "framer-motion";

const PlanetDataPopulation = ({ population }) => {
  return (
    <div className="overflow-hidden text-white uppercase bg-black">
      <AnimatePresence>
        {population !== undefined && (
          <motion.div
            initial={{ y: "-50%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "50%", opacity: 0 }}
            transition={{
              duration: 0.9,
              type: "spring",
            }}
            className="flex flex-col gap-4 justify-center items-center w-full h-full"
          >
            <IoMan className="text-5xl" />
            <p className="flex justify-between items-center text-2xl">
              {population ? population : "0"} m
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default PlanetDataPopulation;
