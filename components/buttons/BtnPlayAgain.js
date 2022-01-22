import React from "react";

const BtnPlayAgain = ({ handleStart }) => (
  <button
    onClick={handleStart}
    className="absolute top-2/3 left-1/2 py-2 px-4 text-xl font-black text-gray-500 hover:text-white uppercase bg-green-500 hover:bg-green-400 rounded-lg shadow-md hover:shadow-2xl transition-all duration-300 hover:scale-105 -translate-x-1/2 hover:-translate-y-1 sm:py-4 sm:px-8 sm:text-2xl sm:rounded-2xl"
  >
    play again
  </button>
);

export default BtnPlayAgain;
