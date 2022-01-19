import React from "react";
import Layout from "../components/layout/Layout";
import VorpStatus from "../components/feature/VorpAchievement/VorpStatus";
import VorpPet from "../components/feature/VorpAchievement/VorpPet";
import VorpControls from "../components/feature/VorpAchievement/VorpControls";

const Vorp = () => {
  return (
    <Layout pageTitle="vorp">
      <div className="flex flex-col gap-4 p-4 w-full h-full bg-slate-900 rounded-2xl sm:gap-8 sm:p-8 xl:gap-4 xl:py-4 xl:px-8">
        <VorpStatus />
        <div className="w-full h-80 bg-slate-800 rounded-2xl border border-slate-700 sm:py-8 sm:h-[30rem] xl:py-4 xl:h-full">
          <VorpPet />
        </div>
        <VorpControls />
      </div>
    </Layout>
  );
};

export default Vorp;
