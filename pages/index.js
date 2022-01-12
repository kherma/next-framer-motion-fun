import React from "react";
import Layout from "../components/layout/Layout";
import HomeMessage from "../components/common/HomeMessage";
import TechStackLinks from "../components/feature/TechStackLinks";
import WebsiteMotionDesign from "../components/feature/WebsiteMotionDesign";

const Home = () => {
  return (
    <Layout pageTitle="home">
      <div className="flex overflow-auto flex-col gap-8 p-8 w-full h-full xl:flex-row">
        <div className="flex flex-col gap-8 justify-center items-center w-full h-full">
          <HomeMessage />
          <div className="w-20 h-2 bg-slate-400 rounded-xl" />
          <TechStackLinks />
        </div>
        <WebsiteMotionDesign />
      </div>
    </Layout>
  );
};

export default Home;
