import React from "react";
import { AnimatePresence, motion } from "framer-motion";

const PlanetDescriptionSummary = ({ description, name }) => {
  return (
    <div className="flex justify-center items-center w-full h-full">
      <AnimatePresence>
        {description && name && (
          <motion.div
            initial={{ clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)" }}
            animate={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}
            exit={{ clipPath: "polygon(0 0, 1% 0, 1% 100%, 0 100%)" }}
            transition={{
              duration: 1,
              type: "spring",
            }}
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
