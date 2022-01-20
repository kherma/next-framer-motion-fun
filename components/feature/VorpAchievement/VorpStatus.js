import React from "react";
import { AiFillHeart } from "react-icons/ai";
import { motion } from "framer-motion";
import { startGameStatus } from "../../../animations/vorpPageAnim/vorpStartGameAnim";

const VorpStatus = ({ startGame, gameLenght }) => {
  const status = startGameStatus(startGame, gameLenght);
  return (
    <div className="flex gap-2 justify-between items-center py-2 w-full sm:gap-8 sm:py-4 xl:py-2">
      <div className="p-2 w-1/2 h-10 bg-bgViolet-400 rounded-full sm:p-4 sm:w-3/4 sm:h-16 xl:p-2 xl:h-10 2xl:h-16">
        <motion.div
          variants={status}
          initial="stop"
          animate="start"
          className="h-full bg-bgViolet-300 rounded-full shadow-md"
        />
      </div>
      <div className="flex gap-2 justify-end items-center w-1/2 h-full sm:gap-4 sm:w-1/4">
        {[...Array.from({ length: 3 }, (_, i) => i + 1)].map((item) => (
          <AiFillHeart
            key={item}
            className="w-10 h-10 text-bgViolet-400 sm:w-16 sm:h-16 xl:w-10 xl:h-10 2xl:w-16 2xl:h-16"
          />
        ))}
      </div>
    </div>
  );
};

export default VorpStatus;
