import React from "react";
import { GiNightSleep, GiBookCover, GiElectric } from "react-icons/gi";
import { motion } from "framer-motion";
import { btnScaleAnim } from "../../../animations/btnScaleAnim";
import { v4 as uuidv4 } from "uuid";

const innerData = [
  { Icon: GiNightSleep, behaviour: "sleep" },
  { Icon: GiElectric, behaviour: "eat" },
  { Icon: GiBookCover, behaviour: "read" },
];

const VorpControls = ({ startGame }) => {
  const { whileHover, whileTap, transition } = btnScaleAnim(
    !startGame,
    0.95,
    1.1
  );
  return (
    <div className="flex justify-evenly items-center py-2 w-full sm:py-4 xl:py-2">
      <div className="flex justify-evenly items-center w-3/4">
        {innerData.map(({ Icon }) => (
          <motion.button
            disabled={!startGame}
            key={uuidv4()}
            whileHover={whileHover}
            whileTap={whileTap}
            transition={transition}
            className="p-2 rounded-full sm:p-4 btnControl"
          >
            <Icon className="w-8 h-8 sm:w-16 sm:h-16 xl:w-8 xl:h-8 2xl:w-10 2xl:h-10" />
          </motion.button>
        ))}
      </div>
      <div className="p-1 w-1/4 h-12 bg-bgViolet-500 rounded-full border-4 border-bgViolet-400 sm:h-20 xl:h-12 2xl:h-16">
        <div className="w-full h-full rounded-full fan" />
      </div>
    </div>
  );
};

export default VorpControls;
