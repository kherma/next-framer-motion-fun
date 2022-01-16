import React from "react";
import { CgArrowsHAlt } from "react-icons/cg";

const PlanetDataDistance = ({ distanceFromSun }) => {
  return (
    <div className="flex flex-col justify-center items-center font-black text-white uppercase bg-black bgDistanceFromSun">
      <div className="flex flex-col items-center ml-3">
        <p>{distanceFromSun} m</p>
        <CgArrowsHAlt className="text-3xl text-red-400" />
        <p>miles</p>
      </div>
    </div>
  );
};

export default PlanetDataDistance;
