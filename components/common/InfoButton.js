import React from "react";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { motion } from "framer-motion";
import { btnScaleWithColor } from "../../utils/animations";

const InfoButton = ({ toogleModal }) => {
  const { whileHover, whileTap, transition } = btnScaleWithColor(
    "#5CDB69",
    false
  );
  return (
    <motion.button
      onClick={toogleModal}
      whileHover={whileHover}
      whileTap={whileTap}
      transition={transition}
      className="flex justify-center items-center w-full md:hidden paper"
    >
      <AiOutlineInfoCircle className="p-4 w-16 h-16 sm:w-20 sm:h-20 md:w-16 md:h-16 xl:w-20 xl:h-20" />
    </motion.button>
  );
};

export default InfoButton;
