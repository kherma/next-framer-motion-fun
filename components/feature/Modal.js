import React from "react";
import Backdrop from "../feature/Backdrop";
import { motion } from "framer-motion";
import { modal } from "../../utils/animations";
import LinksMenu from "./LinksMenu";
import EmailClipboard from "../buttons/BtnEmailClipboard";
import Footer from "../layout/Footer";
import BtnCloseModal from "../buttons/BtnCloseModal";

const Modal = ({ handleClose }) => (
  <Backdrop onClick={handleClose}>
    <div
      onClick={(e) => e.stopPropagation()}
      className="relative p-4 w-[90%] bg-gray-200 rounded-xl md:p-10 xl:w-2/3"
    >
      <motion.div
        className="flex flex-col gap-4 justify-between items-center m-auto w-full h-full md:gap-8"
        initial={modal.initial}
        animate={modal.animate}
        exit={modal.exit}
      >
        <BtnCloseModal handleClose={handleClose} />
        <LinksMenu />
        <div className="flex flex-col gap-4 w-full md:flex-row md:gap-8">
          <EmailClipboard />
          <Footer />
        </div>
      </motion.div>
    </div>
  </Backdrop>
);

export default Modal;
