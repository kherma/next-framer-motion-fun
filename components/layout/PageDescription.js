import React from "react";
import Logo from "../common/Logo";
import Line from "../common/Line";
import Message from "../common/Message";
import AchievementsBar from "../feature/AchievementsBar";
import { motion } from "framer-motion";
import { page } from "../../utils/animations";

const PageDescription = ({ title, message, achievementDescription }) => {
  return (
    <div className="py-8 px-4 w-full h-full sm:p-8 xl:w-1/2 paper">
      <motion.div
        initial={page.initial}
        animate={page.animate}
        className="flex flex-col gap-8 justify-center items-center w-full h-full"
      >
        <Logo title={title} />
        <Message message={message} />
        <Line />
        <AchievementsBar achievementDescription={achievementDescription} />
      </motion.div>
    </div>
  );
};

export default PageDescription;
