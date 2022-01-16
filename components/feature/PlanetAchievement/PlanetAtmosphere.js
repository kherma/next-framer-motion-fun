import React from "react";
import { v4 as uuidv4 } from "uuid";

const PlanetAtmosphere = ({ atmosphere }) => {
  return (
    <ul className="flex overflow-hidden flex-col justify-center items-center rounded-2xl">
      {atmosphere.map(({ layer, color }) => (
        <li
          style={{
            backgroundColor: color,
            height: layer === "ozone" ? "30%" : "100%",
          }}
          className="flex justify-center items-center w-full h-full font-black text-white uppercase"
          key={uuidv4()}
        >
          {layer}
        </li>
      ))}
    </ul>
  );
};

export default PlanetAtmosphere;
