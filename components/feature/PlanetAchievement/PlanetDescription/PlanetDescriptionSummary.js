import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { summaryAnim } from "../../../../animations/planetPageAnim/planetDescriptionAnim";

const PlanetDescriptionSummary = ({ description, name }) => {
  const { initial, animate, exit, transition } = summaryAnim;
  return (
    <div className="flex justify-center items-center w-full h-full">
      <AnimatePresence>
        {description && name && (
          <motion.div
            initial={initial}
            animate={animate}
            exit={exit}
            transition={transition}
            className="flex flex-col gap-2 justify-start items-end py-2 px-4 w-full h-full lg:p-8 xl:p-4 2xl:gap-6"
          >
            <h3 className="text-xl font-black text-right lg:text-2xl xl:text-base 2xl:text-2xl">
              {name}
            </h3>
            <p className="text-justify xl:text-sm 2xl:text-base">
              {description}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default PlanetDescriptionSummary;
