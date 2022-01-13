import React from "react";
import { motion } from "framer-motion";
import { btnScaleAnim } from "../../../animations/btnScaleAnim";

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
      <motion.li
        whileHover={whileHover}
        whileTap={whileTap}
        transition={transition}
        onClick={() => toggleAnimation("scale")}
        className="w-4 h-4 bg-teal-400 rounded-full cursor-pointer md:w-8 md:h-8"
      />
      <motion.li
        whileHover={whileHover}
        whileTap={whileTap}
        transition={transition}
        onClick={() => toggleAnimation("minimize")}
        className="w-4 h-4 bg-orange-300 rounded-full cursor-pointer md:w-8 md:h-8"
      />
      <motion.li
        whileHover={whileHover}
        whileTap={whileTap}
        transition={transition}
        onClick={() => toggleAnimation("exit")}
        className="w-4 h-4 bg-bgRed-200 rounded-full cursor-pointer md:w-8 md:h-8"
      />
      <motion.li
        whileHover={whileHover}
        whileTap={whileTap}
        transition={transition}
        onClick={() => toggleAnimation("rotate")}
        className="w-4 h-4 bg-blue-400 rounded-full cursor-pointer md:w-8 md:h-8"
      />
    </ul>
  );
};

export default ButtonsWMD;
