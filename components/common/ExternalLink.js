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
      className="flex justify-center items-center w-full md:w-auto paper"
    >
      <Icon className="p-4 w-16 h-16 sm:w-20 sm:h-20 md:w-16 md:h-16 xl:w-20 xl:h-20" />
    </motion.a>
  );
};

export default CodeLink;
