import React from "react";
import { motion } from "framer-motion";
import { btnScaleAnim } from "../../../animations/btnScaleAnim";
const innerData = [
  { animation: "scale", color: "bg-teal-400" },
  { animation: "minimize", color: "bg-orange-300" },
  { animation: "exit", color: "bg-bgRed-200" },
  { animation: "rotate", color: "bg-blue-400" },
];
const ButtonsWMD = ({ resizeAnimations, setResizeAnimations }) => {
  const { whileHover, whileTap, transition } = btnScaleAnim(false, 0.9, 1.2);

  const toggleAnimation = (variant) => {
    const newState = { ...resizeAnimations };
    Object.keys(newState).forEach((key) => (newState[key] = false));
    newState[variant] = !resizeAnimations[variant];
    setResizeAnimations((prevState) => ({ ...prevState, ...newState }));
  };
  return (
    <ul className="flex gap-4 w-full">
      {innerData.map(({ animation, color }, index) => (
        <motion.li
          key={index}
          whileHover={whileHover}
          whileTap={whileTap}
          transition={transition}
          onClick={() => toggleAnimation(animation)}
          className={`w-4 h-4 ${color} rounded-full cursor-pointer sm:w-8 sm:h-8`}
        />
      ))}
    </ul>
  );
};

export default ButtonsWMD;
