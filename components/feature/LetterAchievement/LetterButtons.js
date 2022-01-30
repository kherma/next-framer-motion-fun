import { MdNavigateBefore, MdNavigateNext, MdClose } from "react-icons/md";
import { motion } from "framer-motion";
import { btnScaleAnim } from "../../../animations/btnScaleAnim";

const LetterButtons = ({
  handlePrevious,
  handleClose,
  handleNext,
  disabled,
}) => {
  const { whileHover, whileTap, transition } = btnScaleAnim(false);
  return (
    <div className="flex gap-4 justify-between items-center w-full sm:gap-8">
      <motion.button
        aria-label="Go to previous quote"
        whileHover={whileHover}
        whileTap={whileTap}
        transition={transition}
        onClick={handlePrevious}
        disabled={disabled.prev}
        className="flex justify-center items-center p-2 w-full text-white bg-bgBlue-100 disabled:bg-slate-900 rounded-xl transition-colors duration-300 sm:p-4"
      >
        <MdNavigateBefore className="w-8 h-8 sm:w-12 sm:h-12" />
      </motion.button>
      <motion.button
        aria-label="Close modal"
        whileHover={whileHover}
        whileTap={whileTap}
        transition={transition}
        onClick={handleClose}
        className="flex justify-center items-center p-2 w-full text-white bg-bgRed-100 rounded-xl sm:p-4"
      >
        <MdClose className="w-8 h-8 sm:w-12 sm:h-12" />
      </motion.button>
      <motion.button
        aria-label="Go to next quote"
        whileHover={whileHover}
        whileTap={whileTap}
        transition={transition}
        onClick={handleNext}
        disabled={disabled.next}
        className="flex justify-center items-center p-2 w-full text-white bg-bgBlue-100 disabled:bg-slate-900 rounded-xl transition-colors duration-300 sm:p-4"
      >
        <MdNavigateNext className="w-8 h-8 sm:w-12 sm:h-12" />
      </motion.button>
    </div>
  );
};

export default LetterButtons;
