import React from "react";
import Logo from "../common/Logo";
import Line from "../common/Line";
import Message from "../common/Message";
import AchievementsBar from "../feature/AchievementsBar";

const PageDescription = ({ title, message, achievementDescription }) => {
  return (
    <div className="flex flex-col gap-8 justify-center items-center py-8 px-4 w-full h-full sm:p-8 xl:w-1/2 paper">
      <Logo title={title} />
      <Message message={message} />
      <Line />
      <AchievementsBar achievementDescription={achievementDescription} />
    </div>
  );
};

export default PageDescription;
