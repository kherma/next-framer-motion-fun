import { randomRange } from "../utils/randomRange";

export const generatePopulation = (config) => {
  const { size, ozoneLayer } = config.data;

  if (ozoneLayer) {
    switch (size) {
      case "small":
        config.data.population = randomRange(100, 1750);
        break;
      case "medium":
        config.data.population = randomRange(1751, 3500);
        break;
      case "large":
        config.data.population = randomRange(3501, 5250);
        break;
      default:
        return;
    }
  }
};
