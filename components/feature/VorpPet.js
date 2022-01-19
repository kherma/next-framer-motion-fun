import React from "react";

const VorpPet = () => {
  return (
    <div className="flex justify-center items-center w-full h-full">
      <div className="relative w-72 h-72 md:w-96 md:h-96">
        <div className="w-full h-full rounded-full absoluteCenter vorpGears" />
        <div className="w-3/4 h-3/4 bg-[#659aa6] rounded-full border-[1rem] border-y-transparent border-x-[#2c3140] absoluteCenter vorpBody" />
        <div className="w-1/2 h-1/2 bg-white rounded-full absoluteCenter" />
        <div className="overflow-hidden w-1/2 h-1/2 rounded-full absoluteCenter">
          <div className="w-1/2 h-1/2 rounded-full absoluteCenter vorpEye" />
        </div>
        <div className="w-1/2 h-1/2 bg-transparent rounded-full absoluteCenter vorpLids" />
      </div>
    </div>
  );
};

export default VorpPet;
