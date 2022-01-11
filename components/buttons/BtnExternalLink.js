import React from "react";
import { motion } from "framer-motion";
import { btnScale } from "../../utils/animations";

const CodeLink = ({ link, Icon }) => {
  const { whileHover, whileTap, transition } = btnScale(false);
  return (
    <motion.a
      whileHover={whileHover}
      whileTap={whileTap}
      transition={transition}
      href={link}
      target="_blank"
      rel="noreferrer"
      className="flex justify-center items-center w-full text-white hover:text-white bg-bgBlue-100 hover:bg-bgBlue-100 transition-colors duration-300 xl:text-black xl:bg-white paper"
    >
      <Icon className="p-4 w-20 h-20 sm:w-28 sm:h-28" />
    </motion.a>
  );
};

export default CodeLink;
