import React from "react";

const AchievementMessage = ({ achievementDescription }) => {
  return (
    <div className="text-center">
      <h3 className="mr-2 text-2xl font-semibold text-slate-800 uppercase lg:text-3xl">
        To get achievement
      </h3>
      <p className="text-xl text-slate-600 uppercase lg:text-2xl">
        {achievementDescription}
      </p>
    </div>
  );
};

export default AchievementMessage;
