import React from "react";
import { v4 as uuidv4 } from "uuid";
import { AnimatePresence, motion } from "framer-motion";

const PlanetDataSize = ({ size }) => {
  const innerData = [
    { wordSize: "small", numSize: "1rem", backgroundColor: "#2dd4bf" },
    { wordSize: "medium", numSize: "2rem", backgroundColor: "#fcd34d" },
    { wordSize: "large", numSize: "3rem", backgroundColor: "#ef4444" },
  ];
  return (
    <div className="overflow-hidden bg-black">
      <AnimatePresence>
        {size && (
          <motion.div
            initial={{ x: "-50%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "50%", opacity: 0 }}
            transition={{
              duration: 0.6,
              type: "spring",
            }}
            className="flex flex-col gap-4 justify-center items-center w-full h-full"
          >
            <ul className="flex justify-evenly items-end w-full">
              {innerData.map(({ wordSize, numSize, backgroundColor }) => (
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
              ))}
            </ul>
            <h3 className="text-xl font-black text-white uppercase">{size}</h3>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default PlanetDataSize;
