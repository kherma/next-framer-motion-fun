import React from "react";
import Layout from "../components/layout/Layout";
import CheatSheetNavbar from "../components/feature/CheatSheetAchievement/CheatSheetNavbar";

const CheatSheet = () => {
  return (
    <Layout pageTitle="cheatsheet">
      <div className="w-full h-full bg-white dark:bg-black rounded-2xl transition-colors duration-300 ease-in-out">
        <CheatSheetNavbar />
        <div className="w-full h-96"></div>
      </div>
    </Layout>
  );
};

export default CheatSheet;
