import { motion } from "framer-motion";
import { slideAnim } from "../../../animations/cheatScheetAnim";
import CheatSheetSlidePage from "./CheatSheetSlidePage";

const CheatSheetSlider = ({ cheatSheetData, position, handlers }) => {
  return (
    <ul
      {...handlers}
      className="overflow-hidden relative w-full h-96 sm:h-[32rem] xl:h-full"
    >
      {cheatSheetData.map(({ title, commands }, index) => {
        const { initial, animate, transition } = slideAnim(index, position);
        return (
          <motion.li
            initial={initial}
            animate={animate}
            transition={transition}
            key={index}
            className="flex overflow-hidden absolute top-[5%] justify-center items-center w-[90%] h-[90%] text-black dark:text-white uppercase rounded-2xl border border-black dark:border-white transition-colors duration-300 ease-in-out"
          >
            <CheatSheetSlidePage title={title} commands={commands} />
          </motion.li>
        );
      })}
    </ul>
  );
};

export default CheatSheetSlider;
