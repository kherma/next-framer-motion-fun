import React from "react";
import { motion } from "framer-motion";
import { btnScaleAnim } from "../../animations/btnScaleAnim";

const BtnStartVorp = ({ handleGameStart }) => {
  const { whileHover, whileTap, transition } = btnScaleAnim(false, 0.95, 1.03);
  return (
    <motion.button
      onClick={handleGameStart}
      whileHover={whileHover}
      whileTap={whileTap}
      transition={transition}
      exit={{
        scale: 0,
        opacity: 0,
      }}
      className="absolute py-4 px-8 text-xl font-black text-white uppercase rounded-xl sm:py-8 sm:px-12 sm:text-3xl btnStart"
    >
      Start Vorp
    </motion.button>
  );
};

export default BtnStartVorp;
