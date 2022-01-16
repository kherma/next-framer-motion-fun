import React from "react";
import { v4 as uuidv4 } from "uuid";
const PlanetView = ({ container, planet }) => {
  return (
    <div className="flex justify-center items-center rounded-2xl planetContainer">
      <div className="w-72 h-72">
        <div
          style={{ transform: container ? container : "scale(1)" }}
          className="relative w-full h-full"
        >
          <ul className="fogGroup">
            {[...Array(12)].map(() => (
              <li key={uuidv4()} className="fog" />
            ))}
          </ul>
          <div style={{ ...planet }} className="planet">
            <div className="clouds" />
          </div>
          <div />
        </div>
      </div>
    </div>
  );
};

export default PlanetView;
