import React from "react";
import { AiOutlineInfoCircle } from "react-icons/ai";

const InfoButton = () => {
  return (
    <button className="flex justify-center items-center w-full hover:text-white hover:bg-bgGreen-100 transition-colors duration-300 md:hidden paper">
      <AiOutlineInfoCircle className="p-4 w-16 h-16 sm:w-20 sm:h-20 md:w-16 md:h-16 xl:w-20 xl:h-20" />
    </button>
  );
};

export default InfoButton;
