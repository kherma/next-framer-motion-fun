import React from "react";

const ButtonsWMD = () => {
  return (
    <ul className="flex gap-4 w-full">
      <li className="w-4 h-4 bg-green-300 rounded-full cursor-pointer md:w-8 md:h-8" />
      <li className="w-4 h-4 bg-yellow-300 rounded-full cursor-pointer md:w-8 md:h-8" />
      <li className="w-4 h-4 bg-red-400 rounded-full cursor-pointer md:w-8 md:h-8" />
    </ul>
  );
};

export default ButtonsWMD;
