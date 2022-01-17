import React from "react";
import { v4 as uuidv4 } from "uuid";
import { AnimatePresence, motion } from "framer-motion";

const PlanetView = ({ container, planet }) => {
  return (
    <div className="overflow-hidden rounded-2xl planetContainer">
      <AnimatePresence>
        {container && planet && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.1 }}
            transition={{
              scale: {
                delay: 0.3,
              },
              duration: 2,
              type: "spring",
            }}
            className="flex justify-center items-center w-full h-full"
          >
            <div className="w-72 h-72">
              <div
                style={{ transform: container ? container : "scale(1)" }}
                className="relative w-full h-full"
              >
                <ul className="fogGroup">
                  {[...Array(12)].map(() => (
                    <li key={uuidv4()} className="fog" />
                  ))}
                </ul>
                <div style={{ ...planet }} className="planet">
                  <div className="clouds" />
                </div>
                <div />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default PlanetView;
