import React from "react";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { motion } from "framer-motion";
import {
  emailCheckAnim,
  emailCopytextAnim,
} from "../../../animations/btnEmailClipboardAnim";

const CopiedClipboardIcon = () => (
  <motion.div
    className="absolute"
    initial={emailCheckAnim.initial}
    animate={emailCheckAnim.animate}
    transition={emailCheckAnim.transition}
  >
    <motion.p
      className="absolute top-1/2 -right-3/4 font-black uppercase -translate-y-1/2 sm:text-2xl"
      initial={emailCopytextAnim.initial}
      animate={emailCopytextAnim.animate}
      transition={emailCopytextAnim.transition}
    >
      copied!
    </motion.p>
    <AiOutlineCheckCircle className="p-4 w-20 h-20 sm:w-28 sm:h-28" />
  </motion.div>
);

export default CopiedClipboardIcon;
