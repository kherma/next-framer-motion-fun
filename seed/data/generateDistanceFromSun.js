import { randomRange } from "../utils/randomRange";

export const generateDistanceFromSun = (state) => {
  state.data.distanceFromSun = randomRange(30, 3000);
};
