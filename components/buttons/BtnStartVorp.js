import React from "react";
import { motion } from "framer-motion";
import { btnScaleAnim } from "../../animations/btnScaleAnim";

const BtnStartVorp = ({ handleStartGame }) => {
  const { whileHover, whileTap, transition } = btnScaleAnim(false);
  return (
    <motion.button
      onClick={handleStartGame}
      whileHover={whileHover}
      whileTap={whileTap}
      transition={transition}
      exit={{
        scale: 0,
        opacity: 0,
      }}
      className="absolute py-4 px-8 text-xl font-black text-white uppercase bg-yellow-500 rounded-xl shadow-md sm:py-8 sm:px-12 sm:text-3xl"
    >
      Start Vorp
    </motion.button>
  );
};

export default BtnStartVorp;
