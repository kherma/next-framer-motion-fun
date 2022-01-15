import { randomRange } from "../utils/randomRange";

export const generateDistanceFromSun = (config) => {
  config.data.distanceFromSun = randomRange(30, 3000);
};
