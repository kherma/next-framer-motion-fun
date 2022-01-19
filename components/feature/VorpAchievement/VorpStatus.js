import React from "react";
import { AiFillHeart } from "react-icons/ai";

const VorpStatus = () => {
  return (
    <div className="flex gap-2 justify-between items-center py-2 w-full sm:gap-8 sm:py-4 xl:py-2">
      <div className="p-2 w-full h-8 bg-slate-500 rounded-2xl sm:p-4 sm:h-16 xl:p-2 xl:h-10">
        <div className="w-full h-full bg-slate-300 rounded-2xl" />
      </div>
      <div className="flex gap-2 justify-between items-center">
        {[...Array.from({ length: 3 }, (_, i) => i + 1)].map((item) => (
          <AiFillHeart
            key={item}
            className="w-8 h-8 text-slate-300 sm:w-16 sm:h-16 xl:w-10 xl:h-10"
          />
        ))}
      </div>
    </div>
  );
};

export default VorpStatus;
