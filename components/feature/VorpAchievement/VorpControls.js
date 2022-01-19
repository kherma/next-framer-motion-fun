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

const VorpControls = () => {
  const { whileHover, whileTap, transition } = btnScaleAnim(false, 0.95, 1.1);
  return (
    <div className="flex justify-evenly items-center py-2 sm:py-4 xl:py-2">
      {innerData.map(({ Icon }) => (
        <motion.button
          key={uuidv4()}
          whileHover={whileHover}
          whileTap={whileTap}
          transition={transition}
          className="p-2 text-slate-300 bg-slate-500 rounded-full sm:p-4"
        >
          <Icon className="w-8 h-8 sm:w-16 sm:h-16 xl:w-8 xl:h-8 2xl:w-10 2xl:h-10" />
        </motion.button>
      ))}
    </div>
  );
};

export default VorpControls;
