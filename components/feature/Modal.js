import React from "react";
import Backdrop from "../feature/Backdrop";
import { motion } from "framer-motion";
import { modal } from "../../utils/animations";
import ExternalLink from "../common/ExternalLink";
import EmailClipboard from "../common/EmailClipboard";
import { links } from "../../utils/config";
import { v4 as uuidv4 } from "uuid";

const innerData = ["linkedin", "website"];

const Modal = ({ handleClose }) => {
  return (
    <Backdrop onClick={handleClose}>
      <div className="p-5 w-80 h-80 bg-[#ffffff23] rounded-xl sm:w-96 sm:h-96">
        <motion.div
          onClick={(e) => e.stopPropagation()}
          className="flex flex-col gap-2 justify-between items-center m-auto w-full h-full"
          initial={modal.initial}
          animate={modal.animate}
          exit={modal.exit}
        >
          <div className="flex gap-4 justify-between items-center w-full sm:gap-10">
            {innerData.map((linkName) => (
              <ExternalLink
                key={uuidv4()}
                link={links[linkName].link}
                Icon={links[linkName].Icon}
              />
            ))}
          </div>
          <EmailClipboard />
          <div className="flex justify-center items-center w-full h-24 text-xl font-bold uppercase sm:text-2xl paper">
            <p>Kamil Herma &copy; 2022</p>
          </div>
        </motion.div>
      </div>
    </Backdrop>
  );
};

export default Modal;
