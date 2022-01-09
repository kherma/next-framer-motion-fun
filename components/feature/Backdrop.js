import React from "react";
import { motion } from "framer-motion";
import { backdrop } from "../../utils/animations";

const Backdrop = ({ children, onClick }) => {
  return (
    <motion.div
      className="flex absolute top-0 left-0 z-50 justify-center items-center w-full h-full bg-[#000000e1] md:hidden"
      onClick={onClick}
      initial={backdrop.initial}
      animate={backdrop.animate}
      exit={backdrop.exit}
    >
      {children}
    </motion.div>
  );
};

export default Backdrop;
