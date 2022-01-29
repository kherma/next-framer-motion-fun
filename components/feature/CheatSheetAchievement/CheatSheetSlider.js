import { motion } from "framer-motion";
import { slideAnim } from "../../../animations/cheatScheetAnim";

const CheatSheetSlider = ({ innerData, position, handlers }) => {
  return (
    <ul
      {...handlers}
      className="overflow-hidden relative w-full h-96 xl:h-full"
    >
      {innerData.map((item, index) => {
        const { initial, animate, transition } = slideAnim(index, position);
        return (
          <motion.li
            initial={initial}
            animate={animate}
            transition={transition}
            key={item}
            className="flex absolute top-[5%] justify-center items-center w-[90%] h-[90%] text-5xl text-black dark:text-white uppercase rounded-2xl border border-black dark:border-white transition-colors duration-300 ease-in-out"
          >
            {item}
          </motion.li>
        );
      })}
    </ul>
  );
};

export default CheatSheetSlider;
