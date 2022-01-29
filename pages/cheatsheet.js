import { useState } from "react";
import Layout from "../components/layout/Layout";
import CheatSheetNavbar from "../components/feature/CheatSheetAchievement/CheatSheetNavbar";
import CheatSheetSlider from "../components/feature/CheatSheetAchievement/CheatSheetSlider";
import CheatSheetChangeSlide from "../components/feature/CheatSheetAchievement/CheatSheetChangeSlide";

const CheatSheet = () => {
  const [position, setPosition] = useState(0);
  const innerData = [1, 2, 3, 4, 5, 6];

  const handleNext = () => {
    if (position < innerData.length - 1) {
      setPosition((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (position > 0) {
      setPosition((prev) => prev - 1);
    }
  };

  return (
    <Layout pageTitle="cheatsheet">
      <div className="flex flex-col w-full h-full font-mono bg-white dark:bg-black rounded-2xl transition-colors duration-300 ease-in-out">
        <CheatSheetNavbar />
        <CheatSheetSlider innerData={innerData} position={position} />
        <CheatSheetChangeSlide
          handlePrev={handlePrev}
          handleNext={handleNext}
          position={position}
          dataLength={innerData.length}
        />
      </div>
    </Layout>
  );
};

export default CheatSheet;
