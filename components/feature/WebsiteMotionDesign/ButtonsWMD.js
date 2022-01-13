import React from "react";
import { v4 as uuidv4 } from "uuid";

const ButtonsWMD = ({ innerData }) => {
  return (
    <ul className="flex gap-4 w-full">
      {innerData.map((color) => (
        <li
          key={uuidv4()}
          className={`w-4 h-4 md:w-8 md:h-8 rounded-full cursor-pointer ${color}`}
        />
      ))}
    </ul>
  );
};

export default ButtonsWMD;
