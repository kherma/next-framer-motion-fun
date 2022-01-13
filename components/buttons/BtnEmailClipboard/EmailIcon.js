import React from "react";
import { motion } from "framer-motion";
import { emailClipboardAnima } from "../../../animations/btnEmailClipboardAnim";

const EmailIcon = ({ Icon, isActive }) => {
  const { animate: animateEnvelope, transition: transitionEnvelope } =
    emailClipboardAnima(isActive);
  return (
    <motion.div animate={animateEnvelope} transition={transitionEnvelope}>
      <Icon className="p-4 w-20 h-20 sm:w-28 sm:h-28" />
    </motion.div>
  );
};

export default EmailIcon;
