import { generateName } from "./generateName";
import { generateSize } from "./generateSize";
import { generateDistanceFromSun } from "./generateDistanceFromSun";
import { generateAtmosphere } from "./generateAtmosphere";
import { generateTemperature } from "./generateTemperature";
import { generatePopulation } from "./generatePopulation";
import { generateDescription } from "./generateDescription";

export const generateData = (config) => {
  generateName(config);
  generateSize(config);
  generateDistanceFromSun(config);
  generateAtmosphere(config);
  generateTemperature(config);
  generatePopulation(config);
  generateDescription(config);
};
