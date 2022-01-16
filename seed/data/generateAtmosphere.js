import { randomRange } from "../utils/randomRange";

export const generateAtmosphere = (state) => {
  const {
    data: { distanceFromSun },
    settings: { atmosphereOptions },
  } = state;

  const atmosphere = [];
  let ozoneLayer = false;

  if (distanceFromSun <= 1000) {
    atmosphere.push(
      randomRange(1, 3) < 2 ? atmosphereOptions[0] : atmosphereOptions[5]
    );
  }

  if (distanceFromSun > 1000 && distanceFromSun <= 1500) {
    const chancesOfLive = randomRange(1, 10);
    switch (true) {
      case chancesOfLive <= 4:
        atmosphere.push(
          atmosphereOptions[0],
          atmosphereOptions[3],
          atmosphereOptions[5]
        );
        break;
      case chancesOfLive > 4 && chancesOfLive <= 8:
        atmosphere.push(
          atmosphereOptions[0],
          atmosphereOptions[2],
          atmosphereOptions[3],
          atmosphereOptions[4],
          atmosphereOptions[5]
        );
        break;
      case chancesOfLive > 8:
        atmosphere.push(...atmosphereOptions);
        ozoneLayer = true;
        break;
      default:
        return;
    }
  }

  if (distanceFromSun > 1500) {
    const randomLayers = randomRange(1, 10);
    switch (true) {
      case randomLayers < 3:
        atmosphere.push(atmosphereOptions[0]);
        break;
      case randomLayers > 2 && randomLayers < 5:
        atmosphere.push(atmosphereOptions[4]);
        break;
      case randomLayers > 4 && randomLayers < 8:
        atmosphere.push(
          atmosphereOptions[0],
          atmosphereOptions[3],
          atmosphereOptions[5]
        );
        break;
      case randomLayers > 7:
        atmosphere.push(
          atmosphereOptions[0],
          atmosphereOptions[2],
          atmosphereOptions[3],
          atmosphereOptions[4],
          atmosphereOptions[5]
        );
        break;
      default:
        return;
    }
  }

  state.data.atmosphere = atmosphere;
  state.data.ozoneLayer = ozoneLayer;
};
