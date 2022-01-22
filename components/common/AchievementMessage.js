import React from "react";

const AchievementMessage = ({ achievementDescription }) => {
  return (
    <div className="flex flex-col gap-4 justify-center items-center text-center xl:gap-2 2xl:gap-4">
      <h3 className="text-4xl font-black text-slate-800 uppercase md:text-5xl xl:text-4xl 2xl:text-5xl">
        achievement
      </h3>
      <p className="w-full text-xl text-slate-600 uppercase md:text-3xl xl:text-2xl 2xl:text-3xl">
        {achievementDescription}
      </p>
    </div>
  );
};

export default AchievementMessage;
