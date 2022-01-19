import React from "react";

const VorpPet = () => {
  return (
    <div className="flex justify-center items-center w-full h-full">
      <div className="relative w-48 h-48 sm:w-72 sm:h-72">
        <div className="w-full h-full bg-cyan-700 rounded-full border-[0.5rem] border-cyan-900 absoluteCenter vorpGears" />
        <div className="w-3/4 h-3/4 bg-cyan-600 rounded-full border-[.4rem] border-y-transparent border-x-bgBlue-300 sm:border-[1rem] absoluteCenter vorpBody" />
        <div className="w-1/2 h-1/2 bg-white rounded-full absoluteCenter" />
        <div className="overflow-hidden w-1/2 h-1/2 rounded-full absoluteCenter">
          <div className="w-1/2 h-1/2 bg-bgRed-100 rounded-full absoluteCenter" />
          <div className="w-1/3 h-1/3 bg-bgRed-200 rounded-full absoluteCenter" />
          <div className="w-1/4 h-1/4 bg-bgRed-100 rounded-full absoluteCenter" />
        </div>
        <div className="overflow-hidden w-1/2 h-1/2 bg-transparent rounded-full absoluteCenter">
          <div className="w-full h-full bg-transparent rounded-full border-y-[1.2rem] border-bgBlue-300 sm:border-y-[2rem] absoluteCenter" />
        </div>
      </div>
    </div>
  );
};

export default VorpPet;
