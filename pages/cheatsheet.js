import { useState } from "react";
import Layout from "../components/layout/Layout";
import CheatSheetNavbar from "../components/feature/CheatSheetAchievement/CheatSheetNavbar";
import CheatSheetSlider from "../components/feature/CheatSheetAchievement/CheatSheetSlider";
import CheatSheetChangeSlide from "../components/feature/CheatSheetAchievement/CheatSheetChangeSlide";
import { useSwipeable } from "react-swipeable";
import { config } from "../config/config";

const CheatSheet = () => {
  const [position, setPosition] = useState(0);
  const { cheatSheetData } = config;

  const handleNext = () => {
    if (position < cheatSheetData.length - 1) {
      setPosition((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (position > 0) {
      setPosition((prev) => prev - 1);
    }
  };

  const handlers = useSwipeable({
    onSwipedLeft: handleNext,
    onSwipedRight: handlePrev,
    preventDefaultTouchmoveEvent: true,
  });

  return (
    <Layout pageTitle="cheatsheet">
      <div className="flex flex-col w-full h-full font-mono bg-white dark:bg-black rounded-2xl transition-colors duration-300 ease-in-out">
        <CheatSheetNavbar />
        <CheatSheetSlider
          cheatSheetData={cheatSheetData}
          position={position}
          handlers={handlers}
        />
        <CheatSheetChangeSlide
          handlePrev={handlePrev}
          handleNext={handleNext}
          position={position}
          dataLength={cheatSheetData.length}
        />
      </div>
    </Layout>
  );
};

export default CheatSheet;
