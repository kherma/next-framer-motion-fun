import { v4 as uuidv4 } from "uuid";
import { motion } from "framer-motion";
import {
  eatActionDock,
  eatActionPipesMiddle,
  eatActionPlatformTop,
  eatActionBaseTop,
  eatActionWiresTop,
  eatActionBattery,
  eatActionBolt,
} from "../../../animations/vorpPageAnim/vorpEatActionAnim";

const VorpEat = () => (
  <div className="absolute w-full h-full">
    <motion.div
      variants={eatActionBattery}
      initial="hidden"
      animate="visible"
      className="flex absolute bottom-1/4 left-1/2 flex-col justify-center items-center w-8 h-12 bg-black rounded-md -translate-x-1/2 sm:w-12 sm:h-20"
    >
      <div className="absolute bottom-full left-1/2 w-4 h-2 bg-gray-600 rounded-t-xl -translate-x-1/2 " />
      <div className="w-full h-1/4 bg-yellow-600 rounded-t-md" />
      <div className="p-1 w-full h-3/4">
        <motion.div
          variants={eatActionBolt}
          initial="hidden"
          animate="visible"
          className="w-full h-full bg-yellow-500"
        />
      </div>
    </motion.div>
    <motion.div
      variants={eatActionDock}
      initial="hidden"
      animate="visible"
      className="absolute bottom-0 w-full h-1/6"
    >
      <div className="absolute top-[-20%] left-1/2 w-1/6 h-1/5 -translate-x-1/2">
        <motion.ul
          variants={eatActionWiresTop}
          initial="hidden"
          animate="visible"
          className="flex absolute top-[-100%] left-1/2 justify-evenly items-center w-full h-full rounded-t-lg -translate-x-1/2"
        >
          {[...Array.from({ length: 3 }, (_, i) => i + 1)].map(() => (
            <li key={uuidv4()} className="w-1 h-[95%] bg-yellow-300 sm:w-2" />
          ))}
        </motion.ul>
        <motion.div
          variants={eatActionBaseTop}
          initial="hidden"
          animate="visible"
          className="absolute left-1/2 w-full h-full bg-gray-500 rounded-t-lg -translate-x-1/2"
        />
      </div>
      <div className="absolute bottom-0 left-1/2 w-1/2 h-1/5 bg-gray-700 rounded-lg -translate-x-1/2" />
      <ul className="flex absolute bottom-[20%] left-1/2 justify-between items-center px-2 w-1/2 h-1/5 -translate-x-1/2">
        {[...Array.from({ length: 3 }, (_, i) => i + 1)].map(() => (
          <li key={uuidv4()} className="w-4 h-full bg-gray-500" />
        ))}
      </ul>
      <motion.div
        variants={eatActionPlatformTop}
        initial="hidden"
        animate="visible"
        className="absolute bottom-[60%] left-1/2 w-1/2 h-2/5 -translate-x-1/2 "
      >
        <div className="w-full h-1/2 bg-gray-700 rounded-lg" />
        <ul className="flex justify-between items-center px-2 w-full h-1/2">
          {[...Array.from({ length: 3 }, (_, i) => i + 1)].map(() => (
            <li key={uuidv4()} className="w-4 h-full bg-gray-500" />
          ))}
        </ul>
      </motion.div>
      <motion.ul
        variants={eatActionPipesMiddle}
        initial="hidden"
        animate="visible"
        className="flex absolute bottom-[40%] left-1/2 justify-between items-center w-1/2 h-1/5 -translate-x-1/2"
      >
        {[...Array.from({ length: 3 }, (_, i) => i + 1)].map(() => (
          <li key={uuidv4()} className="w-8 h-full bg-gray-700 rounded-lg" />
        ))}
      </motion.ul>
    </motion.div>
  </div>
);

export default VorpEat;
