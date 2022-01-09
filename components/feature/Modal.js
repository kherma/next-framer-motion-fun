import React from "react";
import Backdrop from "../feature/Backdrop";
import { motion } from "framer-motion";

const dropIn = {
  hidden: {
    y: "-10vh",
    opacity: 0,
  },
  visible: {
    y: "0",
    opacity: 1,
    transition: {
      duration: 0.1,
      type: "spring",
      damping: 25,
      stiffness: 500,
    },
  },
  exit: {
    y: "10vh",
    opacity: 0,
  },
};

const Modal = ({ handleClose }) => {
  return (
    <Backdrop onClick={handleClose}>
      <div className="p-5 w-80 h-80 bg-[#ffffff23] rounded-xl">
        <motion.div
          onClick={(e) => e.stopPropagation()}
          className="flex flex-col items-center px-8 m-auto w-full h-full rounded-xl paper"
          variants={dropIn}
          initial="hidden"
          animate="visible"
          exit="exit"
          drag
          dragConstraints={{
            top: -20,
            left: -20,
            right: 20,
            bottom: 20,
          }}
        ></motion.div>
      </div>
    </Backdrop>
  );
};

export default Modal;
