import React from "react";

const PlanetDescriptionSummary = ({ description, name }) => {
  return (
    <div className="flex justify-center items-center w-full h-full text-white bg-red-500">
      {description ? (
        <div className="flex flex-col gap-2 justify-start items-end py-2 px-4 w-full h-full">
          <h3 className="text-xl font-black text-right">{name}</h3>
          <p className="text-justify">{description}</p>
        </div>
      ) : (
        <p className="text-xl font-bold uppercase">Explore new planets.</p>
      )}
    </div>
  );
};

export default PlanetDescriptionSummary;
