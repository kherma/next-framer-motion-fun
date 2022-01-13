import React from "react";
import Logo from "../common/Logo";
import Line from "../common/Line";
import Message from "../common/Message";
import AchievementsBar from "../feature/AchievementsBar";

const PageDescription = () => {
  return (
    <div className="flex flex-col gap-8 justify-center items-center w-full h-full">
      <Logo />
      <Message />
      <Line />
      <AchievementsBar />
    </div>
  );
};

export default PageDescription;
