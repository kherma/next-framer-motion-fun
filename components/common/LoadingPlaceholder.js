import React from "react";
import { BsFillGearFill, BsLayersFill } from "react-icons/bs";
import { IoPlanet } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";

const LoadingPlaceholder = ({ variant }) => {
  return (
    <div className="flex justify-center items-center w-full h-full text-white bg-black rounded-2xl">
      <AnimatePresence>
        <motion.div className="text-9xl">
          {variant === "planet" && <IoPlanet />}
          {variant === "settings" && <BsFillGearFill />}
          {variant === "layers" && <BsLayersFill />}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default LoadingPlaceholder;
