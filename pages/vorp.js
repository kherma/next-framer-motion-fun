import React, { useState } from "react";
import Layout from "../components/layout/Layout";
import VorpStatus from "../components/feature/VorpAchievement/VorpStatus";
import VorpPet from "../components/feature/VorpAchievement/VorpPet";
import VorpControls from "../components/feature/VorpAchievement/VorpControls";
// import VorpSleep from "../components/feature/VorpAchievement/VorpSleep";
import BtnStartVorp from "../components/buttons/BtnStartVorp";
import { AnimatePresence } from "framer-motion";
import { config } from "../config/config";

const Vorp = () => {
  const gameLenght = 5;
  const { vorpGameAnim } = config;
  const [startGame, setStartGame] = useState(false);
  const [startGameAnim, setStartGameAnim] = useState(false);
  const [action, setAction] = useState("startGameAnim");

  // startGameAnim
  // playGameAnim
  // sleepActionAnim
  // eatActionAnim
  // readActionAnim

  const handleGameStart = () => {
    setStartGameAnim(true);
    setTimeout(() => {
      setAction("playGameAnim");
      setStartGame(true);
    }, 10000);
    setTimeout(() => {
      setStartGameAnim(false);
      setStartGame(false);
      setAction("startGameAnim");
    }, gameLenght * 1000 + 10000);
  };

  // const handleGameAction = (action, time) => {
  //   setAction(action),
  //     setTimeout(() => {
  //       setAction("playGameAnim");
  //     }, time);
  // };

  return (
    <Layout pageTitle="vorp">
      <div className="flex relative flex-col gap-4 p-4 w-full h-full rounded-2xl sm:gap-8 sm:p-8 xl:gap-4 xl:py-4 xl:px-8 gameboy">
        <VorpStatus startGame={startGame} gameLenght={gameLenght} />
        <div className="flex overflow-hidden justify-center items-center w-full h-80 rounded-2xl sm:py-8 sm:h-[30rem] xl:py-4 xl:h-full screen">
          <AnimatePresence>
            {!startGameAnim && (
              <BtnStartVorp handleGameStart={handleGameStart} />
            )}
          </AnimatePresence>
          {startGameAnim && <VorpPet animations={vorpGameAnim[action]} />}
          {/* <VorpSleep /> */}
        </div>
        <VorpControls startGame={startGame} />
      </div>
    </Layout>
  );
};

export default Vorp;
