import React from "react";
import { motion } from "framer-motion";

const BoxesWMD = ({ scale, minimize }) => {
  return (
    <div className="flex gap-4 w-full h-2/5 md:gap-8">
      <motion.div
        animate={{
          scale: scale ? 0.5 : 1,
        }}
        className="w-full h-full bg-teal-400 rounded-2xl"
      />
      <motion.div
        animate={{
          scale: minimize ? 0.3 : 1,
          transition: {
            duration: 0.5,
            type: "spring",
            sctiffness: 300,
          },
        }}
        className="w-full h-full bg-orange-300 rounded-xl origin-bottom-right md:rounded-2xl"
      />
    </div>
  );
};

export default BoxesWMD;
