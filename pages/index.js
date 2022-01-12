import React from "react";
import Layout from "../components/layout/Layout";
import HomeWelcomeSection from "../components/layout/HomeWelcomeSection";
import WebsiteMotionDesign from "../components/feature/WebsiteMotionDesign";

const Home = () => (
  <Layout pageTitle="home">
    <div className="flex overflow-auto flex-col gap-8 py-8 px-4 w-full h-full sm:p-8 xl:flex-row">
      <HomeWelcomeSection />
      <WebsiteMotionDesign />
    </div>
  </Layout>
);

export default Home;
