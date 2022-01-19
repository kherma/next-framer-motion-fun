import React, { useState } from "react";
import Layout from "../components/layout/Layout";
import VorpStatus from "../components/feature/VorpAchievement/VorpStatus";
import VorpPet from "../components/feature/VorpAchievement/VorpPet";
import VorpControls from "../components/feature/VorpAchievement/VorpControls";
// import VorpSleep from "../components/feature/VorpAchievement/VorpSleep";
import BtnStartVorp from "../components/buttons/BtnStartVorp";
import { AnimatePresence } from "framer-motion";

const Vorp = () => {
  const gameLenght = 10;
  const [startGame, setStartGame] = useState(false);
  const [startGameAnim, setStartGameAnim] = useState(false);

  const handleStartGame = () => {
    setStartGameAnim(true);
    setTimeout(() => {
      setStartGame(true);
    }, gameLenght * 1000);
    setTimeout(() => {
      setStartGameAnim(false);
      setStartGame(false);
    }, gameLenght * 2000);
  };

  return (
    <Layout pageTitle="vorp">
      <div className="flex flex-col gap-4 p-4 w-full h-full bg-yellow-500 rounded-2xl shadow-md sm:gap-8 sm:p-8 xl:gap-4 xl:py-4 xl:px-8">
        <VorpStatus startGame={startGame} gameLenght={gameLenght} />
        <div className="flex overflow-hidden relative justify-center items-center w-full h-80 rounded-2xl border-2 border-green-300 sm:py-8 sm:h-[30rem] xl:py-4 xl:h-full vorpScreen">
          <AnimatePresence>
            {!startGameAnim && (
              <BtnStartVorp handleStartGame={handleStartGame} />
            )}
          </AnimatePresence>
          {startGameAnim && <VorpPet />}
          {/* <VorpSleep /> */}
        </div>
        <VorpControls startGame={startGame} />
      </div>
    </Layout>
  );
};

export default Vorp;
