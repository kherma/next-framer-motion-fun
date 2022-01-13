import React from "react";
import { motion } from "framer-motion";
import { btnScaleAnim } from "../../animations/btnScaleAnim";
import clsx from "clsx";

const BtnExternalLink = ({ link, Icon, variant }) => {
  const { whileHover, whileTap, transition } = btnScaleAnim(false);
  return (
    <motion.a
      whileHover={whileHover}
      whileTap={whileTap}
      transition={transition}
      href={link}
      target="_blank"
      rel="noreferrer"
      className={clsx(
        "flex justify-center items-center w-full text-white hover:text-white transition-colors duration-300 xl:text-black xl:bg-white paper",
        variant === "btnBlue" && "bg-bgBlue-100 hover:bg-bgBlue-100",
        variant === "btnTeal" && "bg-teal-500 hover:bg-teal-500"
      )}
    >
      <Icon className="p-4 w-16 h-16 sm:w-28 sm:h-28" />
    </motion.a>
  );
};

export default BtnExternalLink;
