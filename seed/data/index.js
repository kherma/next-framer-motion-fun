import { generateName } from "./generateName";
import { generateSize } from "./generateSize";
import { generateDistanceFromSun } from "./generateDistanceFromSun";
import { generateAtmosphere } from "./generateAtmosphere";
import { generateTemperature } from "./generateTemperature";
import { generatePopulation } from "./generatePopulation";
import { generateDescription } from "./generateDescription";

export const generateData = (state) => {
  generateName(state);
  generateSize(state);
  generateDistanceFromSun(state);
  generateAtmosphere(state);
  generateTemperature(state);
  generatePopulation(state);
  generateDescription(state);
};
