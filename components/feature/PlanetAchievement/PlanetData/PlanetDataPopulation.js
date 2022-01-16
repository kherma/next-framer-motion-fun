import React from "react";
import { IoMan } from "react-icons/io5";

const PlanetDataPopulation = ({ population }) => {
  return (
    <div className="flex flex-col gap-4 justify-center items-center text-white uppercase bg-black">
      <IoMan className="text-5xl" />
      <p className="flex justify-between items-center text-2xl">
        {population ? population : "0"} m
      </p>
    </div>
  );
};

export default PlanetDataPopulation;
