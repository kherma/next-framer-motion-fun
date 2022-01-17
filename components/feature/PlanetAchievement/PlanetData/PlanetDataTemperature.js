import React from "react";
import { AnimatePresence, motion } from "framer-motion";

const PlanetDataTemperature = ({ temperature }) => {
  const handleBgColor = (temperature) => {
    if (temperature > 60) return "#dc2626";
    if (temperature >= 0 && temperature <= 60) return "#fbbf24";
    if (temperature < 0) return "#06b6d4";
  };
  return (
    <div className="flex justify-center items-center p-4 font-black text-white uppercase bg-black">
      <AnimatePresence>
        {temperature !== undefined && (
          <motion.p
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            exit={{ scaleX: 0, opacity: 0 }}
            transition={{
              scaleX: {
                delay: 0.3,
              },
              duration: 0.8,
              type: "spring",
            }}
            style={{ backgroundColor: handleBgColor(temperature) }}
            className="p-4 w-full text-2xl text-center rounded-2xl lg:text-3xl"
          >
            {temperature} &#x000B0;C
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
};

export default PlanetDataTemperature;
