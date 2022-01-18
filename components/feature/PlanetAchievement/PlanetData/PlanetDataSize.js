import React from "react";
import { v4 as uuidv4 } from "uuid";
import { AnimatePresence, motion } from "framer-motion";
import { config } from "../../../../config/config";
import { sizeAnim } from "../../../../animations/planetPageAnim/planetDataAnim";

const PlanetDataSize = ({ size }) => {
  const { initial, animate, exit, transition } = sizeAnim;
  return (
    <div className="overflow-hidden bg-black">
      <AnimatePresence>
        {size && (
          <motion.div
            initial={initial}
            animate={animate}
            exit={exit}
            transition={transition}
            className="flex flex-col gap-4 justify-center items-center w-full h-full"
          >
            <ul className="flex justify-evenly items-end w-full">
              {config.planetSizeData.map(
                ({ wordSize, numSize, backgroundColor }) => (
                  <li
                    style={{
                      backgroundColor:
                        wordSize === size ? backgroundColor : "white",
                      width: numSize,
                      height: numSize,
                    }}
                    key={uuidv4()}
                    className="bg-white rounded-full"
                  />
                )
              )}
            </ul>
            <h3 className="text-xl font-black text-white uppercase xl:text-sm 2xl:text-xl">
              {size}
            </h3>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default PlanetDataSize;
