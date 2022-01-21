import React from "react";

const BtnPlayAgain = ({ handleStart }) => (
  <button
    onClick={handleStart}
    className="absolute top-2/3 left-1/2 py-4 px-8 text-2xl font-black text-gray-500 hover:text-white uppercase bg-green-500 hover:bg-green-400 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 hover:scale-105 -translate-x-1/2 hover:-translate-y-1"
  >
    play again
  </button>
);

export default BtnPlayAgain;
