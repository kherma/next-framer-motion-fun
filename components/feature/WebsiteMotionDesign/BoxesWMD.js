import React from "react";
import { motion } from "framer-motion";

const BoxesWMD = ({ scale, minimize }) => {
  return (
    <div className="flex gap-4 w-full h-1/3">
      <motion.div
        animate={{
          scaleX: minimize ? 0.3 : 1,
          scaleY: minimize ? 0.3 : 1,
          y: minimize ? "30%" : 0,
          x: minimize ? "-35%" : 0,
          borderRadius: minimize ? "4rem" : "1rem",
          transition: {
            duration: 0.5,
            type: "spring",
            sctiffness: 300,
          },
        }}
        className="w-full h-full bg-orange-300 rounded-2xl cursor-pointer"
      />
      <motion.div
        animate={{
          scale: scale ? 0.5 : 1,
        }}
        className="w-full h-full bg-teal-400 rounded-2xl cursor-pointer"
      />
    </div>
  );
};

export default BoxesWMD;
