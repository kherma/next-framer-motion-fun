import { v4 as uuidv4 } from "uuid";
import { AnimatePresence, motion } from "framer-motion";
import { planetViewAnim } from "../../../animations/planetPageAnim/planetViewAnim";

const PlanetView = ({ container, planet }) => {
  const { initial, animate, exit, transition } = planetViewAnim;
  return (
    <div className="overflow-hidden w-full h-[21rem] rounded-2xl sm:h-[22rem] xl:h-full planetContainer">
      <AnimatePresence>
        {container && planet && (
          <motion.div
            initial={initial}
            animate={animate}
            exit={exit}
            transition={transition}
            className="flex justify-center items-center w-full h-full"
          >
            <div className="w-72 h-72 xl:w-56 xl:h-56 2xl:w-80 2xl:h-80">
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
