import React from "react";
import { motion } from "framer-motion";

const AsidWMD = ({ exit }) => {
  return (
    <motion.div
      animate={{
        scale: exit ? 0 : 1,
        opacity: exit ? 0 : 1,
        transition: {
          scale: {
            delay: 0.1,
          },
        },
      }}
      className="w-1/3 h-full bg-pink-400 rounded-2xl cursor-pointer"
    />
  );
};

export default AsidWMD;
