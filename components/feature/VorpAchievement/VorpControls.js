import React from "react";
import { GiNightSleep, GiBookCover, GiElectric } from "react-icons/gi";
import { motion } from "framer-motion";
import { btnScaleAnim } from "../../../animations/btnScaleAnim";
import { v4 as uuidv4 } from "uuid";

const innerData = [
  { Icon: GiNightSleep, action: "sleepActionAnim", time: 10 },
  { Icon: GiElectric, action: "eatActionAnim", time: 10 },
  { Icon: GiBookCover, action: "readActionAnim", time: 10 },
];

const VorpControls = ({
  startGame,
  completedActions,
  handleActions,
  currentAction,
}) => {
  const isBtnDsiabled = (disabled, action) => {
    const isDisablet =
      !startGame ||
      completedActions.includes(action) ||
      currentAction.started ||
      currentAction.animation === "startGameAnim";
    return disabled ? isDisablet : btnScaleAnim(isDisablet, 0.95, 1.1);
  };

  return (
    <div className="flex justify-evenly items-center py-2 w-full sm:py-4 xl:py-2">
      {innerData.map(({ Icon, action, time }) => (
        <motion.button
          disabled={isBtnDsiabled(true, action)}
          key={uuidv4()}
          onClick={() => handleActions(action, time)}
          whileHover={isBtnDsiabled(false, action).whileHover}
          whileTap={isBtnDsiabled(false, action).whileTap}
          transition={isBtnDsiabled(false, action).transition}
          className="p-2 rounded-full sm:p-4 btnControl"
        >
          <Icon className="w-8 h-8 sm:w-16 sm:h-16 xl:w-8 xl:h-8 2xl:w-10 2xl:h-10" />
        </motion.button>
      ))}
    </div>
  );
};

export default VorpControls;
