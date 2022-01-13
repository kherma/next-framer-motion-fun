import React from "react";
import { v4 as uuidv4 } from "uuid";

const BoxesWMD = ({ innerData }) => {
  return (
    <div className="flex gap-4 w-full h-1/3">
      {innerData.map((color) => (
        <div
          key={uuidv4()}
          className={`w-full h-full rounded-2xl cursor-pointer ${color}`}
        />
      ))}
    </div>
  );
};

export default BoxesWMD;
