import React, { useState, useEffect } from "react";
import LetterButtons from "./LetterButtons";
import LetterBtnAchievement from "./LetterBtnAchievement";
import {
  letterBackdropAnim,
  letterModalAnim,
} from "../../../animations/letterPageAnim/letterModalAnim";
import { motion } from "framer-motion";

const LetterModal = ({ quotesList, setToggleAnimation, toggleAnimation }) => {
  const [pagination, setPagination] = useState(0);
  const [disabled, setDisabled] = useState({
    prev: false,
    next: false,
  });

  const handleNext = () => {
    setPagination((prevState) => prevState + 1);
  };

  const handlePrevious = () => {
    setPagination((prevState) => prevState - 1);
  };

  const handleClose = () => {
    setToggleAnimation((prevState) => !prevState);
  };

  const {
    initial: backgropInitial,
    animate: backgropAnimate,
    exit: backgropExit,
  } = letterBackdropAnim(toggleAnimation);

  const {
    initial: letterInitial,
    animate: letterAnimate,
    exit: letterExit,
  } = letterModalAnim(toggleAnimation);

  useEffect(() => {
    if (pagination === 0)
      setDisabled((prevState) => ({ ...prevState, prev: true }));
    if (pagination === quotesList.length - 1) {
      setDisabled((prevState) => ({ ...prevState, next: true }));
    }
    if (pagination !== 0 && pagination !== quotesList.length - 1) {
      setDisabled((prevState) => ({ ...prevState, next: false, prev: false }));
    }
  }, [pagination, quotesList.length]);

  return (
    <motion.div
      initial={backgropInitial}
      animate={backgropAnimate}
      exit={backgropExit}
      className="flex absolute top-0 left-0 z-10 justify-center items-center p-8 w-full h-full bg-[#000000a9]"
    >
      <motion.div
        initial={letterInitial}
        animate={letterAnimate}
        exit={letterExit}
        className="flex flex-col gap-4 p-4 w-full h-full bg-slate-800 rounded-2xl sm:gap-8 sm:p-8"
      >
        <h2 className="p-4 font-black text-center text-slate-500 uppercase bg-slate-900 rounded-2xl sm:py-8 sm:px-4 sm:text-4xl">
          {quotesList[pagination].author}
        </h2>
        <div className="flex justify-center items-center p-4 w-full h-full text-center bg-slate-700 rounded-2xl sm:p-8">
          <>
            {quotesList[pagination].content === "achievement" ? (
              <LetterBtnAchievement />
            ) : (
              <p className="text-xl font-black text-slate-500 uppercase sm:text-4xl">
                &quot;{quotesList[pagination].content}&quot;
              </p>
            )}
          </>
        </div>
        <LetterButtons
          handleNext={handleNext}
          handlePrevious={handlePrevious}
          handleClose={handleClose}
          disabled={disabled}
        />
      </motion.div>
    </motion.div>
  );
};

export default LetterModal;
