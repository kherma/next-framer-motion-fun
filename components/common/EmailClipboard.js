import React, { useState, useEffect, useRef } from "react";
import { links } from "../../utils/config";
import { motion } from "framer-motion";
import {
  btnScaleWithColor,
  headerEnvelopeAnimation,
  headerCheckAnimation,
  headerCopytextAnimation,
} from "../../utils/animations";
import { AiOutlineCheckCircle } from "react-icons/ai";

const EmailClipboard = () => {
  const [isActive, setIsActive] = useState(false);
  const { link, Icon } = links.email;
  const { whileHover, whileTap, transition } = btnScaleWithColor(
    "#885FDD",
    false
  );
  const { animate: animateEnvelope, transition: transitionEnvelope } =
    headerEnvelopeAnimation(isActive);

  const activateAnimatio = useRef(true);
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
      className="flex relative justify-center items-center w-full md:w-40 xl:w-48 paper"
      onClick={handleClick}
    >
      <motion.div animate={animateEnvelope} transition={transitionEnvelope}>
        <Icon className="p-4 w-20 h-20 sm:w-24 sm:h-24 md:w-16 md:h-16 xl:w-20 xl:h-20" />
      </motion.div>
      {isActive && (
        <motion.div
          initial={headerCheckAnimation.initial}
          animate={headerCheckAnimation.animate}
          transition={headerCheckAnimation.transition}
        >
          <AiOutlineCheckCircle className="p-4 w-20 h-20 sm:w-24 sm:h-24 md:w-16 md:h-16 xl:w-20 xl:h-20" />
        </motion.div>
      )}

      {isActive && (
        <motion.p
          className="absolute right-20 font-black uppercase sm:text-2xl md:right-8 md:text-base"
          initial={headerCopytextAnimation.initial}
          animate={headerCopytextAnimation.animate}
          transition={headerCopytextAnimation.transition}
        >
          copied!
        </motion.p>
      )}
    </motion.button>
  );
};

export default EmailClipboard;
