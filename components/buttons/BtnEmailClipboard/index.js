import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { btnScaleAnim } from "../../../animations/btnScaleAnim";
import { config } from "../../../config/config";
import EmailIcon from "./EmailIcon";
import CopiedClipboardIcon from "./CopiedClipboardIcon";

const BtnEmailClipboard = () => {
  const [isActive, setIsActive] = useState(false);
  const activateAnimatio = useRef(true);
  const { link, Icon } = config.linksData.email;
  const { whileHover, whileTap, transition } = btnScaleAnim(isActive);

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
      <EmailIcon Icon={Icon} isActive={isActive} />
      {isActive && <CopiedClipboardIcon />}
    </motion.button>
  );
};

export default BtnEmailClipboard;
