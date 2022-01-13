import React from "react";
import { motion } from "framer-motion";
import { btnScale } from "../../utils/animations";

const innerData = {
  buttons: ["bg-green-300", "bg-yellow-300", "bg-red-400"],
  boxes: ["bg-orange-300", "bg-teal-400"],
  text: [...Array.from({ length: 5 }, (_, i) => i + 1)],
};

const WebsiteMotionDesign = () => {
  const { whileHover, whileTap, transition } = btnScale(false);
  return (
    <div className="flex justify-center items-center w-full">
      <div className="flex overflow-hidden flex-col w-72 h-72 bg-slate-200 rounded-3xl shadow-md md:w-[37rem] md:h-[37rem]">
        <div className="flex items-center p-4 w-full h-[15%] bg-slate-500 md:px-8">
          <div className="flex gap-4 w-full">
            {innerData.buttons.map((color) => (
              <motion.div
                whileHover={whileHover}
                whileTap={whileTap}
                transition={transition}
                key={color}
                className={`w-4 h-4 md:w-8 md:h-8 rounded-full cursor-pointer ${color}`}
              />
            ))}
          </div>
          <motion.div
            whileHover={whileHover}
            whileTap={whileTap}
            transition={transition}
            className="w-full h-4 bg-slate-400 rounded-2xl cursor-pointer md:h-8"
          />
        </div>
        <div className="flex flex-col gap-4 p-8 w-full h-[85%] md:gap-8 md:py-16 md:px-10">
          <div className="flex gap-4 w-full md:gap-8">
            {innerData.boxes.map((color) => (
              <motion.div
                whileHover={whileHover}
                whileTap={whileTap}
                transition={transition}
                key={color}
                className={`w-full h-14 md:h-28 rounded-2xl cursor-pointer ${color}`}
              />
            ))}
          </div>
          <div className="flex gap-4 w-full h-full md:gap-8">
            <motion.div
              whileHover={whileHover}
              whileTap={whileTap}
              transition={transition}
              className="w-1/3 h-full bg-pink-400 rounded-2xl cursor-pointer"
            />
            <div className="flex flex-col justify-between w-2/3 h-full">
              {innerData.text.map((line) => (
                <motion.div
                  whileHover={whileHover}
                  whileTap={whileTap}
                  transition={transition}
                  key={line}
                  className="w-full h-4 bg-blue-400 rounded-2xl cursor-pointer md:h-10"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebsiteMotionDesign;
