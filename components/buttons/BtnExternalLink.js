import React from "react";
import { motion } from "framer-motion";
import { btnScaleWithColor } from "../../utils/animations";

const CodeLink = ({ link, Icon }) => {
  const { whileHover, whileTap, transition } = btnScaleWithColor(
    "#577FFB",
    false
  );
  return (
    <motion.a
      whileHover={whileHover}
      whileTap={whileTap}
      transition={transition}
      href={link}
      target="_blank"
      rel="noreferrer"
      className="flex justify-center items-center w-full paper"
    >
      <Icon className="p-4 w-20 h-20 sm:w-28 sm:h-28" />
    </motion.a>
  );
};

export default CodeLink;
