import React from "react";

const ModalWMD = ({ handleClose }) => {
  return (
    <div
      onClick={handleClose}
      className="flex justify-center items-center w-full h-full bg-slate-900 absoltue"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative p-4 w-[90%] bg-gray-200 rounded-xl md:p-10 xl:w-2/3"
      ></div>
    </div>
  );
};

export default ModalWMD;
