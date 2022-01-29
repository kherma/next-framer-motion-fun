import { motion } from "framer-motion";
import { btnScaleAnim } from "../../../animations/btnScaleAnim";

const CheatSheetChangeSlide = ({
  handleNext,
  handlePrev,
  position,
  dataLength,
}) => {
  const prevDisablet = position <= 0;
  const nextDisablet = position >= dataLength - 1;

  const innerData = [
    {
      text: "prev",
      radius: "rounded-bl-2xl",
      handler: handlePrev,
      disabled: prevDisablet,
    },
    {
      text: "next",
      radius: "rounded-br-2xl",
      handler: handleNext,
      disabled: nextDisablet,
    },
  ];

  return (
    <div className="flex overflow-hidden gap-2 justify-between items-center px-2 pt-2 pb-4 rounded-b-2xl">
      {innerData.map(({ text, radius, handler, disabled }) => {
        const { whileHover, whileTap, transition } = btnScaleAnim(
          disabled,
          0.95,
          1
        );
        return (
          <motion.button
            disabled={disabled}
            whileHover={whileHover}
            whileTap={whileTap}
            transition={transition}
            key={text}
            onClick={handler}
            className={`p-4 w-full dark:text-white uppercase dark:bg-black border ${radius} border-black dark:border-white ${
              disabled ? "opacity-0" : "opacity-100"
            } transition-all duration-300 ease-in-out xl:hover:text-white xl:dark:hover:text-black xl:hover:bg-black xl:dark:hover:bg-white`}
          >
            {text}
          </motion.button>
        );
      })}
    </div>
  );
};

export default CheatSheetChangeSlide;
