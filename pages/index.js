import React from "react";
import Layout from "../components/layout/Layout";
import WebsiteMotionDesign from "../components/feature/WebsiteMotionDesign";

const Home = () => {
  return (
    <Layout pageTitle="home">
      <div className="flex overflow-auto flex-col gap-4 p-4 w-full h-full lg:gap-8 lg:p-8 xl:flex-row">
        <div className="w-full h-full"></div>
        <WebsiteMotionDesign />
      </div>
    </Layout>
  );
};

export default Home;
