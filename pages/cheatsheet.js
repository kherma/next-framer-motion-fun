import Layout from "../components/layout/Layout";
import CheatSheetNavbar from "../components/feature/CheatSheetAchievement/CheatSheetNavbar";
import CheatSheetChangeSlide from "../components/feature/CheatSheetAchievement/CheatSheetChangeSlide";

const CheatSheet = () => (
  <Layout pageTitle="cheatsheet">
    <div className="flex flex-col w-full h-full font-mono bg-white dark:bg-black rounded-2xl transition-colors duration-300 ease-in-out">
      <CheatSheetNavbar />
      <div className="w-full h-96 xl:h-full"></div>
      <CheatSheetChangeSlide />
    </div>
  </Layout>
);

export default CheatSheet;
