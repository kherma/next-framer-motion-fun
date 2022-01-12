import React from "react";
import { motion } from "framer-motion";
import { backdrop } from "../../utils/animations";

const Backdrop = ({ children, onClick }) => (
  <motion.div
    className="flex fixed top-0 left-0 z-50 justify-center items-center w-full h-full bg-gray-900"
    onClick={onClick}
    initial={backdrop.initial}
    animate={backdrop.animate}
    exit={backdrop.exit}
  >
    {children}
  </motion.div>
);

export default Backdrop;
