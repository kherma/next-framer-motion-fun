import { randomRange } from "../utils/randomRange";

export const generateTemperature = (config) => {
  const atmosphere = config.data.atmosphere;
  const ozoneLayer = config.data.ozoneLayer;
  const distanceFromSun = config.data.distanceFromSun;

  if (distanceFromSun <= 1000 && atmosphere.includes("troposphere")) {
    config.data.temperature = randomRange(100, 200);
  }

  if (distanceFromSun <= 1000 && atmosphere.includes("exosphere")) {
    config.data.temperature = randomRange(300, 500);
  }

  if (distanceFromSun > 1000 && distanceFromSun <= 1500 && !ozoneLayer) {
    config.data.temperature = randomRange(-100, 60);
  }

  if (distanceFromSun > 1000 && distanceFromSun <= 1500 && ozoneLayer) {
    config.data.temperature = randomRange(10, 30);
  }

  if (distanceFromSun > 1500) {
    config.data.temperature = randomRange(-200, 0);
  }
};
