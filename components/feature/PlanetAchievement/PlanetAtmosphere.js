import React from "react";
import { v4 as uuidv4 } from "uuid";
import { AnimatePresence, motion } from "framer-motion";

const PlanetAtmosphere = ({ atmosphere }) => {
  return (
    <ul className="overflow-hidden bg-slate-200 rounded-2xl">
      <AnimatePresence>
        {atmosphere && atmosphere.length > 0 && (
          <motion.ul
            initial={{
              scaleY: 0,
              opacity: 0,
            }}
            animate={{ scaleY: 1, opacity: 1 }}
            exit={{
              opacity: 0,
              scaleY: 0,
              transition: {
                scaleY: {
                  delay: 0.3,
                },
              },
            }}
            transition={{
              duration: 1,
              type: "spring",
            }}
            className="flex overflow-hidden flex-col justify-center items-center w-full h-full rounded-2xl"
          >
            {atmosphere.map(({ layer, color }) => (
              <li
                style={{
                  backgroundColor: color,
                  height: layer === "ozone" ? "30%" : "100%",
                }}
                className="flex justify-center items-center w-full h-full font-black text-white uppercase"
                key={uuidv4()}
              >
                {layer}
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </ul>
  );
};

export default PlanetAtmosphere;
