import React, { useState, useEffect } from "react";
import Layout from "../components/layout/Layout";
import VorpStatus from "../components/feature/VorpAchievement/VorpStatus";
import VorpPet from "../components/feature/VorpAchievement/VorpPet";
import VorpControls from "../components/feature/VorpAchievement/VorpControls";
import VorpSleep from "../components/feature/VorpAchievement/VorpSleep";
import BtnVropGame from "../components/buttons/BtnVropGame";
import { AnimatePresence } from "framer-motion";
import { config } from "../config/config";

const Vorp = () => {
  const {
    vorpGameAnim: { animations, controlsData },
  } = config;
  const [startGame, setStartGame] = useState(false);
  const [completedActions, setCompletedActions] = useState([]);
  const [currentAction, setCurrentAction] = useState({
    animation: "startGameAnim",
    started: false,
  });
  const [getAchievement, setGetAchievement] = useState(false);

  const handleStart = () => {
    setCompletedActions([]);
    setCurrentAction({
      animation: "startGameAnim",
      started: false,
    });

    setStartGame(true);
    setTimeout(() => {
      setCurrentAction((prevState) => ({
        ...prevState,
        animation: "playGameAnim",
      }));
    }, 10000);
  };

  const handleActions = (action, time) => {
    setCurrentAction({ started: true, animation: action });
    setTimeout(() => {
      setCompletedActions((prevState) => [...prevState, action]);
      setCurrentAction({ started: false, animation: "playGameAnim" });
    }, time * 1000);
  };

  useEffect(() => {
    if (completedActions.length === 3) {
      const timer = setTimeout(() => {
        setGetAchievement(true);
        setStartGame(false);
      }, 2000);
      return () => {
        clearTimeout(timer);
      };
    }
  }, [completedActions]);

  return (
    <Layout pageTitle="vorp">
      <div className="flex flex-col gap-4 p-4 w-full h-full rounded-2xl sm:gap-8 sm:p-8 xl:gap-4 xl:py-4 xl:px-8 gameboy">
        <VorpStatus completedActions={completedActions} />
        <div className="flex overflow-hidden relative justify-center items-center w-full h-80 rounded-2xl sm:py-8 sm:h-[30rem] xl:py-4 xl:h-full screen">
          {getAchievement && (
            <div className="flex flex-col gap-8 justify-center items-center ">
              <BtnVropGame
                handleBehaviour={() => console.log("achievement")}
                text="achievement"
              />
              <BtnVropGame handleBehaviour={handleStart} text="play again" />
            </div>
          )}
          <AnimatePresence>
            {!startGame && !getAchievement && (
              <div className="absolute">
                <BtnVropGame handleBehaviour={handleStart} text="start vorp" />
              </div>
            )}
          </AnimatePresence>
          {startGame && (
            <VorpPet animations={animations[currentAction.animation]} />
          )}
          {currentAction.animation === "sleepActionAnim" && <VorpSleep />}
        </div>
        <VorpControls
          startGame={startGame}
          completedActions={completedActions}
          currentAction={currentAction}
          handleActions={handleActions}
          controlsData={controlsData}
        />
      </div>
    </Layout>
  );
};

export default Vorp;
