import React from "react";
import { v4 as uuidv4 } from "uuid";
import { AnimatePresence, motion } from "framer-motion";
import { planetAtmosphereAnim } from "../../../animations/planetPageAnim/planetAtmosphereAnim";

const PlanetAtmosphere = ({ atmosphere }) => {
  const { initial, animate, exit, transition } = planetAtmosphereAnim;
  return (
    <ul className="overflow-hidden bg-slate-200 rounded-2xl">
      <AnimatePresence>
        {atmosphere && atmosphere.length > 0 && (
          <motion.ul
            initial={initial}
            animate={animate}
            exit={exit}
            transition={transition}
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
