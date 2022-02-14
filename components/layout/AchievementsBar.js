import { useState } from "react";
import { motion } from "framer-motion";
import { config } from "../../config/config";
import Line from "../common/Line";

const AchievementsBar = () => {
  const [achievements, setAchievements] = useState({ total: 5, achieved: 0 });

  const handleUpdate = () => {
    if (achievements.total === achievements.achieved) return;
    const newState = { ...achievements };
    newState.achieved += 1;
    setAchievements((prev) => ({ ...prev, ...newState }));
  };

  return (
    <div className="flex flex-col gap-8 justify-center items-center py-8 px-4 w-full sm:p-8 md:py-12 md:px-8 xl:col-span-2 paper">
      <h2 className="text-4xl font-black text-slate-800 uppercase md:text-5xl">
        badges
      </h2>
      <Line />
      <div className="relative p-2 w-full h-12 bg-slate-500 rounded-full lg:w-4/5">
        <ul
          onClick={handleUpdate}
          className="flex absolute top-0 left-0 gap-3 justify-between items-center p-3 w-full h-full"
        >
          {config.achievementsData.map(({ Icon, color }, index) => (
            <motion.li
              initial={{
                color: "#fff",
              }}
              animate={{
                color: index + 1 <= achievements.achieved ? color : "#fff",
              }}
              key={index}
              className="flex justify-end items-center pr-2 w-full h-full"
            >
              <Icon className="p-0 m-0 w-5 h-5 transition-colors" />
            </motion.li>
          ))}
        </ul>
        <motion.div
          initial={{
            width: 0,
          }}
          animate={{
            width: `${(100 / achievements.total) * achievements.achieved}%`,
          }}
          transition={{
            duration: 0.5,
          }}
          className="h-full bg-slate-800 rounded-full"
        />
      </div>
    </div>
  );
};

export default AchievementsBar;
