import React from "react";
import Logo from "../common/Logo";
import Line from "../common/Line";
import Message from "../common/Message";
import AchievementsBar from "../feature/AchievementsBar";
import AchievementMessage from "../common/AchievementMessage";
import { motion } from "framer-motion";
import { pageAnim } from "../../animations/pageAnim";

const PageDescription = ({ title, message, achievementDescription }) => {
  return (
    <div className="py-8 px-4 w-full h-full sm:p-8 md:py-12 md:px-8 xl:p-8 xl:w-1/2 paper">
      <motion.div
        initial={pageAnim.initial}
        animate={pageAnim.animate}
        className="flex flex-col gap-8 justify-center items-center w-full h-full"
      >
        <Logo title={title} />
        <Message message={message} />
        <Line />
        <AchievementsBar />
        <Line />
        <AchievementMessage achievementDescription={achievementDescription} />
      </motion.div>
    </div>
  );
};

export default PageDescription;
