import React from "react";
import { v4 as uuidv4 } from "uuid";

const innerData = ["rotate-45", "-rotate-45"];

const BtnCloseModal = ({ handleClose }) => {
  return (
    <button
      onClick={handleClose}
      className="group flex gap-[0.4rem] justify-center items-center w-full h-20 sm:gap-3 sm:h-28 paper"
    >
      <p className="font-black uppercase sm:text-2xl">
        Click here or outside to
      </p>
      <div className="relative w-6 h-6 group-hover:bg-bgRed-100 rounded-md transition-all duration-500 group-hover:scale-125 group-hover:rotate-180 sm:w-10 sm:h-10">
        {innerData.map((rotate) => (
          <span
            key={uuidv4()}
            className={`absolute top-1/2 left-1/2 w-5 h-[0.2rem] bg-black group-hover:bg-white transition-colors duration-300 ${rotate} -translate-x-1/2 -translate-y-1/2 sm:w-9 sm:h-[0.4rem]`}
          />
        ))}
      </div>
    </button>
  );
};

export default BtnCloseModal;
