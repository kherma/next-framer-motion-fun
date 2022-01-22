import React, { useState } from "react";
import Layout from "../components/layout/Layout";
import Envelope from "../components/feature/LetterAchievement/Envelope";

const Letter = () => {
  const [toggleAnimation, setToggleAnimation] = useState(false);

  return (
    <Layout pageTitle="letter">
      <div className="relative p-4 w-full h-full bg-slate-800 rounded-2xl sm:p-8">
        <h1 className="p-4 w-full text-xl font-black text-center text-slate-300 uppercase bg-slate-700 rounded-xl sm:p-8 sm:text-2xl">
          Just click the letter
        </h1>
        <Envelope
          setToggleAnimation={setToggleAnimation}
          toggleAnimation={toggleAnimation}
        />
      </div>
    </Layout>
  );
};

export default Letter;
