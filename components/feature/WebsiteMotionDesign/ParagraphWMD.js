import React from "react";

const ParagraphWMD = ({ handleOpen }) => {
  return (
    <div className="flex flex-col gap-4 justify-between items-center w-2/3 h-full md:gap-8">
      <div className="w-full h-3/4 bg-blue-400 rounded-2xl cursor-pointer" />
      <div
        onClick={handleOpen}
        className="w-full h-1/4 bg-blue-400 rounded-2xl cursor-pointer"
      />
    </div>
  );
};

export default ParagraphWMD;
