import React from "react";
import { AiOutlineInfoCircle } from "react-icons/ai";

const InfoButton = () => {
  return (
    <button className="sm:hidden">
      <AiOutlineInfoCircle className="p-4 w-20 h-20 hover:text-white hover:bg-bgGreen-100 transition-colors duration-300 paper" />
    </button>
  );
};

export default InfoButton;
