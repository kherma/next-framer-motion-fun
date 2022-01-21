import React from "react";
import { motion } from "framer-motion";
import {
  sleepActionDome,
  sleepActionPlatform,
} from "../../../animations/vorpPageAnim/vorpSleepActionAnim";

const VorpSleep = () => {
  return (
    <div className="absolute top-0 w-full h-full">
      <motion.div
        variants={sleepActionDome}
        initial="hidden"
        animate="visible"
        className="absolute top-0 left-1/2 w-1/3 h-1/2 -translate-x-1/2"
      >
        <div className="absolute top-0 left-1/2 w-[3%] h-1/2 bg-gray-700 -translate-x-1/2">
          <div className="absolute bottom-0 left-1/2 w-[150%] h-[10%] bg-gray-800 rounded-t-full -translate-x-1/2" />
        </div>
        <div className="absolute bottom-0 left-1/2 w-3/4 h-1/2 -translate-x-1/2">
          <div className="w-full h-full bg-blue-200 rounded-t-full border-4 border-blue-400 opacity-70" />
          <div className="absolute right-[10%] bottom-[10%] w-[10%] h-[50%] bg-white rounded-full" />
        </div>
      </motion.div>
      <motion.div
        variants={sleepActionPlatform}
        initial="hidden"
        animate="visible"
        className="absolute top-1/2 left-1/2 w-1/3 h-1/2 -translate-x-1/2"
      >
        <div className="absolute w-full h-[5%] bg-gray-700" />
        <div className="absolute bottom-0 left-1/2 w-[10%] h-[95%] bg-gray-800 -translate-x-1/2" />
      </motion.div>
    </div>
  );
};

export default VorpSleep;
