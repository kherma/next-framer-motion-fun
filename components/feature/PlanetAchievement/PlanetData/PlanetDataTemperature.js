import React from "react";

const PlanetDataTemperature = ({ temperature }) => {
  const handleBgColor = (temperature) => {
    if (temperature > 60) return "#dc2626";
    if (temperature >= 0 && temperature <= 60) return "#fbbf24";
    if (temperature < 0) return "#06b6d4";
  };
  return (
    <div className="flex justify-center items-center p-4 font-black text-white uppercase bg-black">
      <p
        style={{ backgroundColor: handleBgColor(temperature) }}
        className="p-4 w-full text-2xl text-center rounded-2xl lg:text-3xl"
      >
        {temperature} &#x000B0;C
      </p>
    </div>
  );
};

export default PlanetDataTemperature;
