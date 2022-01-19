import React from "react";
import Layout from "../components/layout/Layout";
import VorpPet from "../components/feature/VorpPet";

const Vorp = () => {
  return (
    <Layout pageTitle="vorp">
      <div className="w-full h-full bg-red-500">
        <VorpPet />
      </div>
    </Layout>
  );
};

export default Vorp;
