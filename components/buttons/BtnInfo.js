import { AiOutlineInfoCircle } from "react-icons/ai";
import { motion } from "framer-motion";
import { btnScaleAnim } from "../../animations/btnScaleAnim";

const BtnInfo = ({ handleOpen }) => {
  const { whileHover, whileTap, transition } = btnScaleAnim(false);

  return (
    <motion.button
      role="button"
      aria-label="Open menu"
      onClick={handleOpen}
      whileHover={whileHover}
      whileTap={whileTap}
      transition={transition}
      className="flex justify-center items-center w-full text-white hover:text-white bg-bgGreen-100 hover:bg-bgGreen-100 transition-colors duration-300 xl:text-black xl:bg-white paper"
    >
      <AiOutlineInfoCircle className="p-4 w-16 h-16 lg:w-20 lg:h-20" />
    </motion.button>
  );
};

export default BtnInfo;
