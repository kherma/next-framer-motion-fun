import React from "react";
import { motion } from "framer-motion";
import { btnRotateScaleBorderRadius } from "../../utils/animations";

const BtnTechStack = ({ href, children }) => (
  <motion.a
    animate={btnRotateScaleBorderRadius}
    className="p-2 text-white bg-slate-500 rounded-md"
    href={href}
    target="_blank"
    rel="noreferrer"
  >
    {children}
  </motion.a>
);

export default BtnTechStack;
