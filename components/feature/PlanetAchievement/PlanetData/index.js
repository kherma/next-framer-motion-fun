import PlanetDataSize from "./PlanetDataSize";
import PlanetDataDistance from "./PlanetDataDistance";
import PlanetDataTemperature from "./PlanetDataTemperature";
import PlanetDataPopulation from "./PlanetDataPopulation";

const PlanetData = ({ size, distanceFromSun, temperature, population }) => (
  <div className="grid overflow-hidden grid-cols-2 auto-rows-fr gap-2 w-full h-[21rem] rounded-2xl sm:gap-4 sm:h-[22rem] xl:h-full">
    <PlanetDataSize size={size} />
    <PlanetDataDistance distanceFromSun={distanceFromSun} />
    <PlanetDataTemperature temperature={temperature} />
    <PlanetDataPopulation population={population} />
  </div>
);

export default PlanetData;
