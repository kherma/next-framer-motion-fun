import { randomRange } from "../utils/randomRange";

export const generateAtmosphere = (config) => {
  const {
    data: { distanceFromSun },
    settings: { atmosphereOptions },
  } = config;

  if (distanceFromSun <= 1000) {
    config.data.atmosphere.push(
      randomRange(1, 3) < 2 ? atmosphereOptions[0] : atmosphereOptions[4]
    );
  }

  if (distanceFromSun > 1000 && distanceFromSun <= 1500) {
    const chancesOfLive = randomRange(1, 10);
    switch (true) {
      case chancesOfLive < 4:
        config.data.atmosphere.push(
          atmosphereOptions[0],
          atmosphereOptions[2],
          atmosphereOptions[4]
        );
        break;
      case chancesOfLive > 4 && chancesOfLive < 7:
        config.data.atmosphere.push(...atmosphereOptions);
        break;
      case chancesOfLive > 7:
        config.data.atmosphere.push(...atmosphereOptions);
        config.data.ozoneLayer = true;
        break;
      default:
        return;
    }
  }

  if (distanceFromSun > 1500) {
    const randomLayers = randomRange(1, 10);
    switch (true) {
      case randomLayers < 3:
        config.data.atmosphere.push(atmosphereOptions[0]);
        break;
      case randomLayers > 2 && randomLayers < 5:
        config.data.atmosphere.push(atmosphereOptions[4]);
        break;
      case randomLayers > 4 && randomLayers < 8:
        config.data.atmosphere.push(
          atmosphereOptions[0],
          atmosphereOptions[2],
          atmosphereOptions[4]
        );
        break;
      case randomLayers > 7:
        config.data.atmosphere.push(...atmosphereOptions);
        break;
      default:
        return;
    }
  }
};
