import React from "react";
import Backdrop from "../feature/Backdrop";
import { motion } from "framer-motion";
import { modal } from "../../utils/animations";

const Modal = ({ handleClose }) => {
  return (
    <Backdrop onClick={handleClose}>
      <div className="p-5 w-80 h-80 bg-[#ffffff23] rounded-xl sm:w-96 sm:h-96">
        <motion.div
          onClick={(e) => e.stopPropagation()}
          className="flex flex-col items-center px-8 m-auto w-full h-full rounded-xl paper"
          initial={modal.initial}
          animate={modal.animate}
          exit={modal.exit}
          drag
          dragConstraints={modal.dragConstraints}
        ></motion.div>
      </div>
    </Backdrop>
  );
};

export default Modal;
