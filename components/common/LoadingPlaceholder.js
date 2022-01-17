import React from "react";
import { motion } from "framer-motion";
import { BsFillGearFill } from "react-icons/bs";
import { IoPlanet } from "react-icons/io5";
import { WiBarometer } from "react-icons/wi";

const LoadingPlaceholder = ({ variant, loading }) => {
  return (
    <motion.div
      animate={{ scale: [0.5, 1] }}
      className="flex justify-center items-center w-full h-full text-white bg-black rounded-2xl"
    >
      {variant === "view" && (
        <motion.div
          initial={{
            rotate: -30,
          }}
          animate={{
            rotate: loading ? [-60, 0, -60, 0] : -30,
            opacity: loading ? 0 : 1,
          }}
          transition={{
            duration: 0.9,
            opacity: {
              delay: 0.7,
            },
          }}
          className="text-9xl"
        >
          <IoPlanet />
        </motion.div>
      )}
      {variant === "data" && (
        <motion.div
          animate={{
            rotate: loading ? 360 : 0,
            opacity: loading ? 0 : 1,
          }}
          transition={{
            duration: 0.9,
            opacity: {
              delay: 0.7,
            },
          }}
          className="text-9xl"
        >
          <BsFillGearFill />
        </motion.div>
      )}
      {variant === "atmosphere" && (
        <motion.div
          animate={{
            scale: loading ? [0.9, 1.1, 0.9, 1.1] : 1,
            opacity: loading ? 0 : 1,
          }}
          transition={{
            duration: 0.9,
            opacity: {
              delay: 0.7,
            },
          }}
          className="text-[12rem]"
        >
          <WiBarometer />
        </motion.div>
      )}
    </motion.div>
  );
};

export default LoadingPlaceholder;
