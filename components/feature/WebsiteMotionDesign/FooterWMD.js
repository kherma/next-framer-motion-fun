import React from "react";
import { btnScaleAnim } from "../../../animations/btnScaleAnim";
import { motion } from "framer-motion";

const FooterWMD = ({ handleOpen }) => {
  const { whileHover, whileTap, transition } = btnScaleAnim(false, 0.9, 1.05);

  return (
    <motion.div
      whileHover={whileHover}
      whileTap={whileTap}
      transition={transition}
      onClick={handleOpen}
      className="w-full h-1/5 bg-blue-400 rounded-2xl cursor-pointer"
    />
  );
};

export default FooterWMD;
