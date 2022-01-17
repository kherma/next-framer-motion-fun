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
            className="flex flex-col gap-2 justify-start items-end py-2 px-4 w-full h-full"
          >
            <h3 className="text-xl font-black text-right">{name}</h3>
            <p className="text-justify">{description}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default PlanetDescriptionSummary;
