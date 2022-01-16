import React from "react";

const PlanetAtmosphere = ({ atmosphere }) => {
  return (
    <ul className="flex overflow-hidden flex-col justify-center items-center rounded-2xl">
      {atmosphere ? (
        atmosphere.map(({ layer, color }, index) => (
          <li
            style={{
              backgroundColor: color,
              height: layer === "ozone" ? "30%" : "100%",
            }}
            className="flex justify-center items-center w-full h-full font-black text-white uppercase"
            key={index}
          >
            {layer}
          </li>
        ))
      ) : (
        <p className="text-7xl font-bold">?</p>
      )}
    </ul>
  );
};

export default PlanetAtmosphere;
