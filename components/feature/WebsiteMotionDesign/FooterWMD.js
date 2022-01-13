import React from "react";

const FooterWMD = ({ handleOpen }) => {
  return (
    <div
      onClick={handleOpen}
      className="w-full h-1/5 bg-blue-400 rounded-2xl cursor-pointer"
    />
  );
};

export default FooterWMD;
