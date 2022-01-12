import React from "react";
import Logo from "../common/Logo";
import Line from "../common/Line";
import HomeMessage from "../feature/HomeMessage";
import TechStackLinks from "../feature/TechStackLinks";
import AchievementsBar from "../feature/AchievementsBar";

const HomeWelcomeSection = () => {
  return (
    <div className="flex flex-col gap-8 justify-center items-center w-full h-full">
      <Logo />
      <HomeMessage />
      <Line />
      <TechStackLinks />
      <Line />
      <AchievementsBar />
    </div>
  );
};

export default HomeWelcomeSection;
