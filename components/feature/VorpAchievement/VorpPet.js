import { motion } from "framer-motion";

const VorpPet = ({ animations }) => {
  const { container, gears, eye, lids } = animations;
  return (
    <div className="flex justify-center items-center w-full h-full">
      <div className="sm:scale-150">
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="relative w-48 h-48"
        >
          <motion.div
            variants={gears}
            initial="hidden"
            animate="visible"
            className="w-full h-full bg-cyan-700 rounded-full border-[0.5rem] border-cyan-900 absoluteCenter vorpGears"
          />
          <div className="w-3/4 h-3/4 bg-cyan-600 rounded-full border-[0.4rem] border-y-transparent border-x-bgBlue-300 shadow-md sm:border-[0.7rem] absoluteCenter" />
          <div className="w-1/2 h-1/2 bg-white rounded-full absoluteCenter" />
          <motion.div
            variants={eye}
            initial="hidden"
            animate="visible"
            className="overflow-hidden w-1/2 h-1/2 rounded-full absoluteCenter"
          >
            <div className="w-1/2 h-1/2 bg-bgRed-100 rounded-full absoluteCenter" />
            <div className="w-1/3 h-1/3 bg-bgRed-200 rounded-full absoluteCenter" />
            <div className="w-1/4 h-1/4 bg-bgRed-100 rounded-full absoluteCenter" />
          </motion.div>
          <div className="overflow-hidden w-1/2 h-1/2 bg-transparent rounded-full absoluteCenter">
            <motion.div
              variants={lids}
              initial="hidden"
              animate="visible"
              className="w-full h-full bg-transparent rounded-full border-bgBlue-300 absoluteCenter"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default VorpPet;
