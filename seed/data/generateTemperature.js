import { randomRange } from "../utils/randomRange";

export const generateTemperature = (state) => {
  const { atmosphere, ozoneLayer, distanceFromSun } = state.data;

  if (
    distanceFromSun <= 1000 &&
    atmosphere.some(({ layer }) => layer === "troposphere")
  ) {
    state.data.temperature = randomRange(100, 200);
  }

  if (
    distanceFromSun <= 1000 &&
    atmosphere.some(({ layer }) => layer === "exosphere")
  ) {
    state.data.temperature = randomRange(300, 500);
  }

  if (distanceFromSun > 1000 && distanceFromSun <= 1500 && !ozoneLayer) {
    state.data.temperature = randomRange(-100, 60);
  }

  if (distanceFromSun > 1000 && distanceFromSun <= 1500 && ozoneLayer) {
    state.data.temperature = randomRange(10, 30);
  }

  if (distanceFromSun > 1500) {
    state.data.temperature = randomRange(-200, 0);
  }
};
