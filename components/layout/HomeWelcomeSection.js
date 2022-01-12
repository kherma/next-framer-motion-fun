import React from "react";
import Logo from "../common/Logo";
import HomeMessage from "../feature/HomeMessage";
import TechStackLinks from "../feature/TechStackLinks";
import Line from "../common/Line";

const HomeWelcomeSection = () => {
  return (
    <div className="flex flex-col gap-8 justify-center items-center w-full h-full">
      <Logo />
      <HomeMessage />
      <Line />
      <TechStackLinks />
    </div>
  );
};

export default HomeWelcomeSection;
