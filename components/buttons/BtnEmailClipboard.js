import React, { useState, useEffect, useRef } from "react";
import { links } from "../../utils/config";
import { motion } from "framer-motion";
import {
  headerEnvelopeAnimation,
  headerCheckAnimation,
  headerCopytextAnimation,
  btnScale,
} from "../../utils/animations";
import { AiOutlineCheckCircle } from "react-icons/ai";

const EmailClipboard = () => {
  const [isActive, setIsActive] = useState(false);
  const activateAnimatio = useRef(true);

  const { link, Icon } = links.email;

  const { whileHover, whileTap, transition } = btnScale(isActive);
  const { animate: animateEnvelope, transition: transitionEnvelope } =
    headerEnvelopeAnimation(isActive);

  useEffect(() => {
    if (activateAnimatio.current) {
      activateAnimatio.current = false;
      return;
    }
    const timer = setTimeout(() => setIsActive(false), 5000);
    return () => {
      clearTimeout(timer);
    };
  });

  const handleClick = () => {
    if (!isActive) {
      setIsActive(true);
      navigator.clipboard.writeText(link);
    } else {
      return;
    }
  };

  return (
    <motion.button
      whileHover={whileHover}
      whileTap={whileTap}
      transition={transition}
      className={`flex relative justify-center items-center w-full h-full text-white hover:text-white bg-bgViolet-100 hover:bg-bgViolet-100 transition-colors duration-300 xl:text-black xl:bg-white paper ${
        isActive && "xl:bg-bgViolet-100 xl:text-white xl:cursor-default"
      }`}
      onClick={handleClick}
    >
      <motion.div animate={animateEnvelope} transition={transitionEnvelope}>
        <Icon className="p-4 w-20 h-20 sm:w-28 sm:h-28" />
      </motion.div>
      {isActive && (
        <motion.div
          className="absolute"
          initial={headerCheckAnimation.initial}
          animate={headerCheckAnimation.animate}
          transition={headerCheckAnimation.transition}
        >
          <motion.p
            className="absolute top-1/2 -right-3/4 font-black uppercase -translate-y-1/2 sm:text-2xl"
            initial={headerCopytextAnimation.initial}
            animate={headerCopytextAnimation.animate}
            transition={headerCopytextAnimation.transition}
          >
            copied!
          </motion.p>
          <AiOutlineCheckCircle className="p-4 w-20 h-20 sm:w-28 sm:h-28" />
        </motion.div>
      )}
    </motion.button>
  );
};

export default EmailClipboard;
