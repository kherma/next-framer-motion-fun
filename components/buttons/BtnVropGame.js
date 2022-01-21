import React from "react";
import { motion } from "framer-motion";
import { btnScaleAnim } from "../../animations/btnScaleAnim";

const BtnVropGame = ({ handleBehaviour, text }) => {
  const { whileHover, whileTap, transition } = btnScaleAnim(false, 0.95, 1.03);
  return (
    <motion.button
      onClick={handleBehaviour}
      whileHover={whileHover}
      whileTap={whileTap}
      transition={transition}
      exit={{
        scale: 0,
        opacity: 0,
      }}
      className="py-4 px-8 w-full text-xl font-black text-white uppercase rounded-xl sm:py-8 sm:px-12 sm:text-3xl btnStart"
    >
      {text}
    </motion.button>
  );
};

export default BtnVropGame;
