import { randomRange } from "../utils/randomRange";

export const generateAtmosphere = (config) => {
  const {
    data: { distanceFromSun },
    settings: { atmosphereLayers },
  } = config;

  if (distanceFromSun <= 1000) {
    config.data.atmosphere.push(
      randomRange(1, 3) < 2 ? atmosphereLayers[0] : atmosphereLayers[4]
    );
  }

  if (distanceFromSun > 1000 && distanceFromSun <= 1500) {
    const chancesOfLive = randomRange(1, 10);
    switch (true) {
      case chancesOfLive < 4:
        config.data.atmosphere.push(
          atmosphereLayers[0],
          atmosphereLayers[2],
          atmosphereLayers[4]
        );
        break;
      case chancesOfLive > 4 && chancesOfLive < 7:
        config.data.atmosphere.push(...atmosphereLayers);
        break;
      case chancesOfLive > 7:
        config.data.atmosphere.push(...atmosphereLayers);
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
        config.data.atmosphere.push(atmosphereLayers[0]);
        break;
      case randomLayers > 2 && randomLayers < 5:
        config.data.atmosphere.push(atmosphereLayers[4]);
        break;
      case randomLayers > 4 && randomLayers < 8:
        config.data.atmosphere.push(
          atmosphereLayers[0],
          atmosphereLayers[2],
          atmosphereLayers[4]
        );
        break;
      case randomLayers > 7:
        config.data.atmosphere.push(...atmosphereLayers);
        break;
      default:
        return;
    }
  }
};
