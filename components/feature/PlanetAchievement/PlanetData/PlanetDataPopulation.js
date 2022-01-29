import { IoMan } from "react-icons/io5";
import { AnimatePresence, motion } from "framer-motion";
import { populationAnim } from "../../../../animations/planetPageAnim/planetDataAnim";

const PlanetDataPopulation = ({ population }) => {
  const { initial, animate, exit, transition } = populationAnim;
  return (
    <div className="overflow-hidden text-white uppercase bg-black">
      <AnimatePresence>
        {population !== undefined && (
          <motion.div
            initial={initial}
            animate={animate}
            exit={exit}
            transition={transition}
            className="flex flex-col gap-4 justify-center items-center w-full h-full xl:gap-2 2xl:gap-4"
          >
            <IoMan className="text-5xl xl:text-4xl 2xl:text-5xl" />
            <p className="flex justify-between items-center text-2xl">
              {population ? population : "0"} m
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default PlanetDataPopulation;
