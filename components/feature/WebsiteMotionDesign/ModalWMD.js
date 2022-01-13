import React from "react";
import { motion } from "framer-motion";
import { backdropAnim, modalAnim } from "../../../animations/modalMenuAnim";
import { v4 as uuidv4 } from "uuid";

const innerData = ["rotate-45", "-rotate-45"];

const ModalWMD = ({ handleClose }) => {
  return (
    <motion.div
      initial={backdropAnim.initial}
      animate={backdropAnim.animate}
      exit={backdropAnim.exit}
      onClick={handleClose}
      className="flex justify-center items-center w-full h-full bg-slate-900 absoltue"
    >
      <motion.div
        initial={modalAnim.initial}
        animate={modalAnim.animate}
        exit={modalAnim.exit}
        onClick={(e) => e.stopPropagation()}
        className="flex relative flex-col gap-4 justify-between items-center p-4 w-2/3 bg-gray-200 rounded-xl md:p-8 xl:w-2/3"
      >
        <button
          onClick={handleClose}
          className="group relative w-full h-8 bg-bgRed-100 rounded-xl transition-all duration-500 sm:h-16 xl:bg-white xl:hover:bg-bgRed-100 paper"
        >
          {innerData.map((rotate) => (
            <span
              key={uuidv4()}
              className={`absolute top-1/2 left-1/2 w-5 h-[0.2rem] bg-white xl:bg-black xl:group-hover:bg-white transition-colors duration-300 ${rotate} -translate-x-1/2 -translate-y-1/2 sm:w-9 sm:h-[0.4rem]`}
            />
          ))}
        </button>
        <p className="p-2 w-full h-full text-center uppercase md:p-8 md:text-2xl lg:text-3xl paper">
          <span className="mr-2 font-bold">warning:</span>
          there is no way back!
        </p>
        <button className="group w-full h-8 font-black text-center text-white uppercase bg-yellow-400 transition-colors duration-500 sm:h-16 lg:p-4 xl:text-black xl:hover:text-white xl:bg-white xl:hover:bg-yellow-400 m paper">
          achievement
        </button>
      </motion.div>
    </motion.div>
  );
};

export default ModalWMD;
