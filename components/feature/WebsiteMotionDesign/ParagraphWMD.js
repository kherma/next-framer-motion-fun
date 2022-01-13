import React from "react";
import { motion } from "framer-motion";

const ParagraphWMD = ({ handleOpen, rotate }) => {
  return (
    <div className="flex flex-col gap-4 justify-between items-center w-2/3 h-full md:gap-8">
      <motion.div
        animate={{
          scale: rotate ? 0.5 : 1,
          rotate: rotate ? 360 : 0,
          transition: {
            duration: 0.5,
          },
        }}
        className="w-full h-3/4 bg-blue-400 rounded-2xl"
      />
      <div
        onClick={handleOpen}
        className="w-full h-1/4 bg-blue-400 rounded-2xl cursor-pointer"
      />
    </div>
  );
};

export default ParagraphWMD;
