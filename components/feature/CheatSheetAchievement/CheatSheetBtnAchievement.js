import { useState } from "react";

const CheatSheetBtnAchievement = ({ command }) => {
  const [showAchievementBtn, setShowAchievementBtn] = useState(false);

  return (
    <li
      onClick={() => !showAchievementBtn && setShowAchievementBtn(true)}
      className="text-xs text-black dark:text-white lowercase bg-white dark:bg-black transition-colors duration-300 ease-in-out sm:text-base xl:text-base 2xl:text-lg"
    >
      {showAchievementBtn ? (
        <button className="p-2 text-white bg-yellow-400 hover:bg-yellow-500 rounded-lg transition-colors duration-300 ease-in-out">
          Achievement
        </button>
      ) : (
        command
      )}
    </li>
  );
};

export default CheatSheetBtnAchievement;
